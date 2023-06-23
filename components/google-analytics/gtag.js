// ABOUT: not a .ts file because it uses window.gtag which is not typed

export const measurementId='G-25JL4Z9H4S'; //for joelgrayson.com data stream

export function pageView(url) { //used in handle route change
    window.gtag('config', measurementId, {
        page_path: url
    });
}

export function event({ action, category, label, value }) {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    });
}

