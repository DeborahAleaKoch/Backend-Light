interface Props{
    name:string
    onClick: (name:string)=> void
}


export const Button: React.FC<Props> = ({name, onClick}) => {


    return ( <>
    <button onClick={()=>onClick(name)} >{name}</button>
    </> );
}
 
