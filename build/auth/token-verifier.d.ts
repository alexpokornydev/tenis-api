import { ConfigService } from '@nestjs/config';
export declare class TokenVerifier {
    private readonly issuer;
    private readonly jwks;
    constructor(config: ConfigService);
    verify(token: string): Promise<import("jose").JWTVerifyResult<import("jose").JWTPayload> & import("jose").ResolvedKey<CryptoKey>>;
}
