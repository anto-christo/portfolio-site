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

    return (
        <Badge style={getBadgeStyle(tech.color)} className="mx-1 float-right" variant={tech.type}>{tech.name}</Badge>
    )
}