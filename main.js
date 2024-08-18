const _err = 'Navegador No Soportado - Unsupported Browser'

if ('serviceWorker' in navigator) {

	navigator.serviceWorker.register('./sw.js').then(function (registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch(function (err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	});

	// CLEAN SERVICE WORKER OLD
	navigator.serviceWorker.getRegistrations()
		.then(function (registrations) {
			for (let registration of registrations) {
				const sw_url = registration.active.scriptURL || ''
				if (sw_url.includes('service-worker.js')) {
					registration.unregister();
				}
			}
		});


} else {
	console.error(_err)
	// alert(_err)
}
