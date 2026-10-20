import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenVerifier {
  private readonly issuer: string;
  private readonly jwksUrl: URL;
  private jwks: ReturnType<typeof import('jose')['createRemoteJWKSet']> | undefined;

  constructor(config: ConfigService) {
    const url = config.getOrThrow<string>('SUPABASE_URL').replace(/\/$/, '');
    this.issuer = `${url}/auth/v1`;
    this.jwksUrl = new URL(`${this.issuer}/.well-known/jwks.json`);
  }

  async verify(token: string) {
    const { createRemoteJWKSet, jwtVerify } = await import('jose');
    this.jwks ??= createRemoteJWKSet(this.jwksUrl);
    return jwtVerify(token, this.jwks, { issuer: this.issuer, audience: 'authenticated' });
  }
}
