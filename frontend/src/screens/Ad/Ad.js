import React, {useState, useEffect} from "react";
import Body from "components/layout/Body/Body";
import Button from "components/units/Button/Button";
import {useParams} from "react-router";
import {AdStyled, StyledUl, StyledText, BottomDiv, StyledStreet, StyledItems} from "./Ad.styles";
import {faMapMarkerAlt, faBed, faEuroSign, faHome, faBath} from "@fortawesome/free-solid-svg-icons";
import Gallery from "components/composed/Gallery/Gallery";
import ContactModal from "components/composed/ContactModal/ContactModal.js";
import {
    adImage1,
    adImage2,
    adImage3,
    adThumbnail1,
    adThumbnail2,
    adThumbnail3,
} from "assets/images";
import IconWithLabel from "components/units/IconWithLabel/IconWithLabel";
import Map from "components/composed/Map/Map/Map";
import {getAd} from "api/ads";

// const LIST_ICONS = [
// 	{name: ad.city, icon: faMapMarkerAlt},
// 	{name: `${ad.numRooms} habitaciones`, icon: faBed},
// 	{name: ad.monthlyRent, icon: faEuroSign}, //monthlyRent o precio del piso?
// 	{name: ad.squareMeters, icon: faHome},
// 	{name: `${ad.numBaths} baños`, icon: faBath},
// ];

const Ad = () => {
    const {id} = useParams();

    const [ad, setAd] = useState(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        getAd(id).then((ad) => setAd(ad));
    }, [id]);

    // const images =
    // 	ad &&
    // 	ad.gallery &&
    // 	ad.gallery.map((image) => ({
    // 		original: image.url,
    // 		thumbnail: image.urlThumbnail,
    // 		originalAlt: image.alt,
    // 		thumbnailAlt: image.altThumbnail,
    // 	}));

    let LIST_ICONS = ad && [
        {name: ad.city, icon: faMapMarkerAlt},
        {name: `${ad.n_rooms} habitaciones`, icon: faBed},
        {name: ad.price, icon: faEuroSign},
        {name: ad.square_meters, icon: faHome},
        {name: `${ad.n_bathrooms} baños`, icon: faBath},
    ];

    const images = [
        {
            original: adImage1,
            thumbnail: adThumbnail1,
            originalAlt: "Bedroom",
            thumbnailAlt: "Bedroom",
        },
        {
            original: adImage2,
            thumbnail: adThumbnail2,
            originalAlt: "Bedroom2",
            thumbnailAlt: "Bedroom2",
        },
        {
            original: adImage3,
            thumbnail: adThumbnail3,
            originalAlt: "Casa piscina",
            thumbnailAlt: "Casa piscina",
        },
    ];

    return (
        <>
            {ad && (
                <Body
                    title="Anuncio"
                    justifyTitle="flex-start"
                    paddingTitle="0px"
                    paddingTitle2="15vw"
                    isLoggedIn="true"
                >
                    <>
                        <AdStyled>
                            <div className="Title">{ad.title}</div>
                            <Gallery images={images} />

                            <BottomDiv>
                                <StyledUl>
                                    {LIST_ICONS.map((el, index) => {
                                        return (
                                            <StyledItems>
                                                <IconWithLabel
                                                    key={index}
                                                    icon={el.icon}
                                                    text={el.name}
                                                />
                                            </StyledItems>
                                        );
                                    })}
                                </StyledUl>

                                <StyledText>
                                    <p>Description: {ad.description}</p>
                                </StyledText>
                                <Map lat={ad.map_lat} lng={ad.map_lon} />
                                <StyledStreet>
                                    <a
                                        href={`http://www.google.com/maps/place/${ad.map_lat},${ad.map_lon}`}
                                    >
                                        Dirección: Carrer Trafalgar 4
                                    </a>
                                </StyledStreet>
                                <Button
                                    buttonStyles={{
                                        width: "7.5rem",
                                        fontsize: "12px",
                                        height: "2.2rem",
                                        marginTop: "0rem",
                                    }}
                                    text="Contacto"
                                    className="blue-gradient"
                                    type="button"
                                    onClick={() => setActive(true)}
                                />
                                <ContactModal active={active} hideModal={() => setActive(false)} />
                            </BottomDiv>
                        </AdStyled>
                    </>
                </Body>
            )}
        </>
    );
};

export default Ad;
