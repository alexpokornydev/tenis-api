import { ConfigService } from '@nestjs/config';
export declare class TokenVerifier {
    private readonly issuer;
    private readonly jwksUrl;
    private jwks;
    constructor(config: ConfigService);
    verify(token: string): Promise<import("jose", { with: { "resolution-mode": "import" } }).JWTVerifyResult<import("jose", { with: { "resolution-mode": "import" } }).JWTPayload> & import("jose", { with: { "resolution-mode": "import" } }).ResolvedKey<CryptoKey>>;
}
