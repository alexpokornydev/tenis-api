import type { ConfigService } from '@nestjs/config';
export declare class TokenVerifier {
    private readonly jwks;
    private readonly issuer;
    constructor(config: ConfigService);
    verify(token: string): Promise<import("jose").JWTVerifyResult<import("jose").JWTPayload> & import("jose").ResolvedKey<CryptoKey>>;
}
