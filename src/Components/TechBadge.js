import {
    Badge
} from 'react-bootstrap';

export default function TechBadge({ tech }) {
    function getBadgeStyle(color) { 
        return {
            color, 
            border: '1px solid', 
            backgroundColor: 'transparent' 
        }
    };

    function getClass() {
        let style = "mx-1";
        if (window.screen.width >= 768) {
            style += " float-right";
        }
        return style;
    }

    return (
        <Badge style={getBadgeStyle(tech.color)} className={getClass()} variant={tech.type}>{tech.name}</Badge>
    )
}