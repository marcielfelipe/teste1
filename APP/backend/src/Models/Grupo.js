const mongoose=require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

const GrupoSchema=new mongoose.Schema({
    nome:String,
    dataSorteio:Date,
    valorMinimo:Number,
    valorMaximo:Number,
    status:String,
    participantes:[{
        _id : {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
        idListaDesejos:{type: mongoose.Schema.Types.ObjectId, ref: 'ListaDesejos'}
        /* itens:[
            {
                item:String
            }
        ] */
    }],
    sorteio:[{
        _id : {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
        _idAmigo : {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}
        
    }]
});
GrupoSchema.plugin(mongoosePaginate);

module.exports=mongoose.model('Grupo',GrupoSchema);
