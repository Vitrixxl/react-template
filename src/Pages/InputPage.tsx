import Input from "../components/Input";

export default function  InputPage(){
    return (
        <div className=" w-full mt-32 flex flex-col justify-center items-center gap-4">
            <Input errorMessage="c'est de la bite" label="Etablissement"  size="sm" variant="bordered"/>
            <Input errorMessage="c'est de la bite" label="Etablissement" color="secondary" size="md"/>
            <Input errorMessage="c'est de la bite" label="Etablissement" color="success" size="lg"/>
            <Input errorMessage="c'est de la bite" label="Etablissement" color="warning" variant="filled" />
            <Input errorMessage="c'est de la bite" label="Etablissement" color="danger" />
        </div>
    );
}