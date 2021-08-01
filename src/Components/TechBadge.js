import {
    Badge
} from 'react-bootstrap';
import isMediumScreen from '../utils/screen';
import { CONTENT_STYLE } from '../utils/style';

export default function TechBadge({ tech }) {
    function getBadgeStyle(color) { 
        return Object.assign(
            {
                color, 
                border: '1px solid', 
                backgroundColor: 'transparent'
            },
            CONTENT_STYLE
        ); 
    };

    function getClass() {
        let style = "mx-1";
        if (isMediumScreen()) {
            style += " float-right";
        }
        return style;
    }

    return (
        <Badge style={getBadgeStyle(tech.color)} className={getClass()} variant={tech.type}>{tech.name}</Badge>
    )
}