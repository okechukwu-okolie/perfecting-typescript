//working with required optional props in typescript
import { type ReactNode } from 'react';



interface UserCardProps{
    id: string;
    name?: string;
    subtitle?: ReactNode//can be string or any react element
}
export function UserCard({id, name, subtitle}: UserCardProps){

    const displayName = name ?? 'Guest User';
    return(
        <div>
            <p>#{id}</p>
            <strong>{displayName}</strong>
            {subtitle ? <div>{subtitle}</div> : null}
        </div>
    )
}