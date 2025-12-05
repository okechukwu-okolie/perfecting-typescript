

const VARIANT = ['primary', 'secondary', 'tertiary'] as const;

type Variant = (typeof VARIANT)[number];

type BadgeProps = {
    label:string;
    variant?:Variant;
}

export const Badge = ({ label, variant = 'primary' }: BadgeProps) => {
    return (
        <span style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: variant === 'primary' ? 'blue' : variant === 'secondary' ? 'gray' : 'green',
            color: 'white',
            fontWeight: 'bold',
        }}>
            {label}
        </span>
    );
}