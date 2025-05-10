export async function getDeviceInfo() {
    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        
        return {
            ip: ipData.ip,
            deviceType: navigator.userAgent,
            browser: navigator.appCodeName,
            os: navigator.platform
        };
    } catch (error) {
        console.error('Errore nel recupero dell\'IP:', error);
        return {
            ip: 'IP non disponibile',
            deviceType: navigator.userAgent,
            browser: navigator.appCodeName,
            os: navigator.platform
        };
    }
}

