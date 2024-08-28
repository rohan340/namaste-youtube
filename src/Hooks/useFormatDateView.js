export const formatViewsCount = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    } else {
        return num;
    }
};

export const convertToRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = [
        { name: 'year', seconds: 31536000 }, // 60 * 60 * 24 * 365
        { name: 'month', seconds: 2592000 }, // 60 * 60 * 24 * 30
        { name: 'day', seconds: 86400 }, // 60 * 60 * 24
        { name: 'hour', seconds: 3600 }, // 60 * 60
        { name: 'minute', seconds: 60 }, // 60
        { name: 'second', seconds: 1 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.name}${count > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now'; // For cases where the date is too close to now
};
