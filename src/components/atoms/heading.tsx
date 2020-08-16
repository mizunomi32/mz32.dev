import React, { Children } from "react";

type HeadingProps = {
    level: 1 | 2| 3| 4| 5| 6,
    className?: string
};

const Heading: React.FC<HeadingProps> = ({level, className, children}) =>{
    let styles = [className];
    
    switch (level) {
        case 1:
            styles.push('text-4xl','font-bold');
            return (
                <h1 className={styles.join(' ')}>{children}</h1>
            );
        case 2:
            styles.push('text-3xl','font-bold');
            return (
                <h2 className={styles.join(' ')}>{children}</h2>
            );
        case 3:
            styles.push('text-xl','font-bold');
            return (
                <h3 className={styles.join(' ')}>{children}</h3>
            );
        case 4:
            styles.push('text-xl');
            return (
                <h4 className={styles.join(' ')}>{children}</h4>
            );
        case 5:
            styles.push('text-lg','font-bold');
            return (
                <h5 className={styles.join(' ')}>{children}</h5>
            );
        default:
            styles.push('text-lg');
            return (
                <h6 className={styles.join(' ')}>{children}</h6>
            );
    }
}
export default Heading;