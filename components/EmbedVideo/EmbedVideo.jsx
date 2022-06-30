const EmbedVideo = ({ url }) => {
  const embedUrl = url.replace("watch?v=", "embed/");
  return (
    <div className='embed-video'>
      <iframe
        src={embedUrl}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
};

export default EmbedVideo;
