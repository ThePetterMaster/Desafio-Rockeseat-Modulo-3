import Recipient from '../models/Recipient';
import * as Yup from 'yup'
class RecipientController{
    async store(req,res){
        const schema=Yup.object().shape({
            nome:Yup.string().required(),
            rua:Yup.string().required(),
            numero:Yup.string().required(),
            complemento:Yup.string().required(),
            estado:Yup.string().required(),
            cidade:Yup.string().required(),
            cep:Yup.string().required()
            
        });
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:'Validation fails'});
        }
        const recipientExists=await Recipient.findOne({where:{nome:req.body.nome}});
        if(recipientExists){
            return res.status(400).json({error:'Recipient already exists'});
        }
        
        const {id,rua,numero,complemento,cidade,estado,cep}=await Recipient.create(req.body);
        return res.json({id,rua,numero,complemento,cidade,estado,cep});
    }
    
}
export default new RecipientController();