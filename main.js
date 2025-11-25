function tocaSom(idElementoaudio){
const elemento=Document.QuerySelector(idElementoaudio)
if( elemento && elemento.localName=== 'audio'){
    elemento.play ( ); 
}else{
    console.log('')
}
}