import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class TokenVerifier {
  private readonly issuer: string;
  private readonly jwksUrl: URL;

  constructor(config: ConfigService) {
    const url = config.getOrThrow<string>('SUPABASE_URL').replace(/\/$/, '');
    this.issuer = `${url}/auth/v1`;
    this.jwksUrl = new URL(`${this.issuer}/.well-known/jwks.json`);
  }

  async verify(token: string) {
    const { createRemoteJWKSet, jwtVerify } = await import('jose');
    const jwks = createRemoteJWKSet(this.jwksUrl);
    return jwtVerify(token, jwks, { issuer: this.issuer, audience: 'authenticated' });
  }
}
