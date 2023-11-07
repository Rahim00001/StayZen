import './location.css'
const Location = () => {
    return (
        <div className='my-8'>
            <p className='text-center text-5xl font-bold mb-5'>Our Location</p>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.687105728888!2d90.3970947!3d23.7412531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894e42e5373%3A0x4434c59289bd383f!2z4KaH4Kao4KeN4Kaf4Ka-4Kaw4KaV4Kao4KeN4Kaf4Ka_4Kao4KeH4Kao4KeN4Kaf4Ka-4KayIOCmueCni-Cmn-Cnh-Cmsg!5e0!3m2!1sbn!2sbd!4v1699335905494!5m2!1sbn!2sbd"
                    width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Location;