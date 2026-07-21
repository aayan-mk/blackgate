const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file === 'node_modules' || file === 'dist' || file === '.git' || file === '.gemini') continue;
            replaceInFiles(fullPath);
        } else if (fullPath.match(/\.(js|jsx|ts|tsx|css|cjs)$/)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/accent-cyan/g, 'accent-cyan')
                .replace(/accent-teal/g, 'accent-teal')
                .replace(/glow-cyan/g, 'glow-cyan')
                .replace(/text-gradient-cyan/g, 'text-gradient-cyan')
                .replace(/rgba\(245,\s*158,\s*11/g, 'rgba(6, 182, 212')
                .replace(/rgba\(245,158,11/g, 'rgba(6,182,212')
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
replaceInFiles('./');
