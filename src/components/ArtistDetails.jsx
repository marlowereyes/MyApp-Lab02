import Layout from "./Layout";

function ArtistDetails(props) {
    const { artists } = props;

    return (
        <div>
            {artists.map((artist, index) => (
                <Layout key={index}>
                    <img src={artist.photo_url} alt={artist.name} className="artist-photo"/>
                    <div className="information">
                        <h2>{artist.name}</h2>
                        <p>Country: {artist.country}</p>
                        <p>Years active: {artist.years_active}</p>
                    </div>
                </Layout>
            ))}
        </div>
    );
}

export default ArtistDetails;
