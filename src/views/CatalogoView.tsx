import fondo_titulo from '/img/fondo_titulo.svg';

export default function CatalogoView() {
  return (
    <div className='text-center text-[#F7F6F6]'>
      <h1 className="text-4xl font-bold px-10 pb-2 inline-block"
        style={{
          backgroundImage: `url(${fondo_titulo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          }}
      >Cátalogo</h1>
    </div>
  )
}
