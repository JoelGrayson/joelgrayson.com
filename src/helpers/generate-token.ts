import crypto from 'crypto';

export default function generateToken() {
    return crypto.randomBytes(16).toString('hex');
}
