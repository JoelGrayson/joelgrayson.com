export default function formatNumber(num: number) {
    return num.toLocaleString('en-US', { maximumFractionDigits: 1 });
}
