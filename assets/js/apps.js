async function registerUser() {
    const publicKey = {
        challenge: new Uint8Array(32),
        rp: { name: "Contoh Website" },
        user: {
            id: new Uint8Array(16),
            name: "user@example.com",
            displayName: "User Contoh"
        },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }],
        authenticatorSelection: { authenticatorAttachment: "platform" },
        timeout: 60000,
        attestation: "direct"
    };

    try {
        const credential = await navigator.credentials.create({ publicKey });
        console.log("Kredensial berhasil dibuat:", credential);
    } catch (error) {
        console.error("Pendaftaran gagal:", error);
    }
}