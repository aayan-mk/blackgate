const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInFiles(fullPath);
        } else if (fullPath.match(/\.(js|jsx|ts|tsx|css|js)$/)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/accent-cyan/g, 'accent-cyan')
                .replace(/accent-teal/g, 'accent-teal')
                .replace(/glow-cyan/g, 'glow-cyan')
                .replace(/text-gradient-cyan/g, 'text-gradient-cyan')
                .replace(/rgba\(6,\s*182,\s*212/g, 'rgba(6, 182, 212')
                .replace(/rgba\(6,182,212/g, 'rgba(6, 182, 212')
                .replace(/#06b6d4/g, '#06b6d4')
                .replace(/#14b8a6/g, '#14b8a6');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log('Updated', fullPath);
            }
        }
    }
}
replaceInFiles('./src');
replaceInFiles('./'); // To catch tailwind.config.js
