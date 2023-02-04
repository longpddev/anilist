import type { AnimeDetailQuery, MediaType } from "anilist_gql/graphql"
import {
  ANIME_CHARACTERS,
  ANIME_DETAIL,
  ANIME_DETAIL_FOR_LAYOUT,
  ANIME_REVIEWS,
  ANIME_STATS,
  ANIME_STATS_TYPE,
  ANIME_THREAD,
} from "gql/animeDetail"
import { STAFF } from "gql/staff"
import fetchGql from "./server"

const data = {
  Media: {
    id: 101922,
    title: {
      userPreferred: "Kimetsu no Yaiba",
      romaji: "Kimetsu no Yaiba",
      english: "Demon Slayer: Kimetsu no Yaiba",
      native: "鬼滅の刃",
    },
    coverImage: {
      extraLarge:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
      large:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg",
    },
    bannerImage:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
    startDate: {
      year: 2019,
      month: 4,
      day: 6,
    },
    endDate: {
      year: 2019,
      month: 9,
      day: 28,
    },
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)",
    season: "SPRING",
    seasonYear: 2019,
    type: "ANIME",
    format: "TV",
    status: "FINISHED",
    episodes: 26,
    duration: 24,
    chapters: null,
    volumes: null,
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    synonyms: [
      "KnY",
      "Kimetsu no Yaiba: Kyoudai no Kizuna",
      "Demon Slayer: Kimetsu no Yaiba: Bonds of Siblings",
      "鬼滅の刃-兄妹の絆-",
      "鬼灭之刃",
      "הלהב קוטל השדים",
      "قاتل الشياطين",
      "ดาบพิฆาตอสูร",
      "Miecz zabójcy demonów – Kimetsu no Yaiba",
      " Guardians de la nit: Kimetsu no Yaiba",
    ],
    source: "MANGA",
    isAdult: false,
    isLocked: false,
    meanScore: 84,
    averageScore: 84,
    popularity: 602387,
    favourites: 38991,
    isFavouriteBlocked: false,
    hashtag: "#鬼滅の刃",
    countryOfOrigin: "JP",
    isLicensed: true,
    isFavourite: false,
    isRecommendationBlocked: false,
    isReviewBlocked: false,
    nextAiringEpisode: null,
    relations: {
      edges: [
        {
          id: 23106,
          relationType: "SOURCE",
          node: {
            id: 87216,
            title: {
              userPreferred: "Kimetsu no Yaiba",
            },
            format: "MANGA",
            type: "MANGA",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/manga/banner/87216-TVKEGfSxAqKs.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87216-c9bSNVD10UuD.png",
            },
          },
        },
        {
          id: 35282,
          relationType: "SEQUEL",
          node: {
            id: 112151,
            title: {
              userPreferred: "Kimetsu no Yaiba: Mugen Ressha-hen",
            },
            format: "MOVIE",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112151-eHCBz19nf2yC.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112151-1qlQwPB1RrJe.png",
            },
          },
        },
        {
          id: 52746,
          relationType: "CHARACTER",
          node: {
            id: 129627,
            title: {
              userPreferred: "Kimetsu Gakuen: Valentine-hen",
            },
            format: "ONA",
            type: "ANIME",
            status: "FINISHED",
            bannerImage: null,
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129627-GiVeOqDUAqUC.png",
            },
          },
        },
        {
          id: 63584,
          relationType: "SEQUEL",
          node: {
            id: 129874,
            title: {
              userPreferred: "Kimetsu no Yaiba: Mugen Ressha-hen (TV)",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/129874-3ipZzS50i9Ta.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129874-g6ZKXB94Hui1.jpg",
            },
          },
        },
        {
          id: 77767,
          relationType: "CHARACTER",
          node: {
            id: 154541,
            title: {
              userPreferred:
                "Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Kimetsu no Utage Tokubetsu-hen",
            },
            format: "SPECIAL",
            type: "ANIME",
            status: "FINISHED",
            bannerImage: null,
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b154541-uw1iAxNKdUAf.png",
            },
          },
        },
      ],
    },
    characterPreview: {
      edges: [
        {
          id: 171550,
          role: "MAIN",
          name: null,
          voiceActors: [
            {
              id: 111635,
              name: {
                userPreferred: "Natsuki Hanae",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png",
              },
            },
            {
              id: 101560,
              name: {
                userPreferred: "Satomi Satou",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n101560-x0Va6GS2YMeH.png",
              },
            },
          ],
          node: {
            id: 126071,
            name: {
              userPreferred: "Tanjirou Kamado",
            },
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/character/large/b126071-BTNEc1nRIv68.png",
            },
          },
        },
        {
          id: 171554,
          role: "MAIN",
          name: null,
          voiceActors: [
            {
              id: 119722,
              name: {
                userPreferred: "Akari Kitou",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n119722-5dLCvvv1Rbcc.png",
              },
            },
          ],
          node: {
            id: 127518,
            name: {
              userPreferred: "Nezuko Kamado",
            },
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/character/large/b127518-NRlq1CQ1v1ro.png",
            },
          },
        },
        {
          id: 171549,
          role: "MAIN",
          name: null,
          voiceActors: [
            {
              id: 106817,
              name: {
                userPreferred: "Yoshitsugu Matsuoka",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n106817-mioGQjbTWWQ6.png",
              },
            },
          ],
          node: {
            id: 129130,
            name: {
              userPreferred: "Inosuke Hashibira",
            },
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/character/large/n129130-SJC0Kn1DU39E.jpg",
            },
          },
        },
        {
          id: 171552,
          role: "MAIN",
          name: null,
          voiceActors: [
            {
              id: 95356,
              name: {
                userPreferred: "Hiro Shimono",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n95356-PFaZRlI9oJ56.png",
              },
            },
          ],
          node: {
            id: 129131,
            name: {
              userPreferred: "Zenitsu Agatsuma",
            },
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/character/large/b129131-FZrQ7lSlxmEr.png",
            },
          },
        },
        {
          id: 173535,
          role: "SUPPORTING",
          name: null,
          voiceActors: [
            {
              id: 95129,
              name: {
                userPreferred: "Toshihiko Seki",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n95129-AAL7kfwAPpgR.jpg",
              },
            },
          ],
          node: {
            id: 129132,
            name: {
              userPreferred: "Muzan Kibutsuji",
            },
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/character/large/b129132-4nIZakUZ1o8W.jpg",
            },
          },
        },
        {
          id: 183938,
          role: "SUPPORTING",
          name: null,
          voiceActors: [
            {
              id: 95245,
              name: {
                userPreferred: "Satoshi Hino",
              },
              language: "Japanese",
              image: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/staff/large/n95245-prBoWpg0HaGX.jpg",
              },
            },
          ],
          node: {
            id: 129133,
            name: {
              userPreferred: "Kyoujurou Rengoku",
            },
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/character/large/b129133-VlTPowwt68rJ.png",
            },
          },
        },
      ],
    },
    staffPreview: {
      edges: [
        {
          id: 333408,
          role: "Design Manager (eps 11, 14)",
          node: {
            id: 185081,
            name: {
              userPreferred: "Takashi Toda",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
            },
          },
        },
        {
          id: 126117,
          role: "Theme Song Performance (ED1)",
          node: {
            id: 103691,
            name: {
              userPreferred: "FictionJunction",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/8691.jpg",
            },
          },
        },
        {
          id: 125206,
          role: "Theme Song Performance (OP, ED1)",
          node: {
            id: 105561,
            name: {
              userPreferred: "LiSA",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/n105561-bluE1C2NqCrV.png",
            },
          },
        },
        {
          id: 133656,
          role: "Theme Song Performance (ED2)",
          node: {
            id: 144505,
            name: {
              userPreferred: "Nami Nakagawa",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/n144505-us941ePmMAAO.png",
            },
          },
        },
        {
          id: 332910,
          role: "Theme Song Performance (ED2)",
          node: {
            id: 109341,
            name: {
              userPreferred: "Gou Shiina",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/n109341-q5Wmz53sbNsO.png",
            },
          },
        },
        {
          id: 333114,
          role: "Episode Director (OP, eps 1, 2, 14, 26)",
          node: {
            id: 99006,
            name: {
              userPreferred: "Haruo Sotozaki",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/n99006-ubhRe65EcEUF.jpg",
            },
          },
        },
        {
          id: 333113,
          role: "Episode Director (eps 17, 21)",
          node: {
            id: 107164,
            name: {
              userPreferred: "Takuya Nonaka",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/n107164-onNH0bY3UjN5.png",
            },
          },
        },
        {
          id: 333112,
          role: "Episode Director (ep 19)",
          node: {
            id: 120896,
            name: {
              userPreferred: "Toshiyuki Shirai",
            },
            language: "Japanese",
            image: {
              large:
                "https://s4.anilist.co/file/anilistcdn/staff/large/n120896-LgjPVWmyJPaO.png",
            },
          },
        },
      ],
    },
    studios: {
      edges: [
        {
          isMain: true,
          node: {
            id: 43,
            name: "ufotable",
          },
        },
        {
          isMain: false,
          node: {
            id: 17,
            name: "Aniplex",
          },
        },
        {
          isMain: false,
          node: {
            id: 6570,
            name: "Shueisha",
          },
        },
      ],
    },
    reviewPreview: {
      pageInfo: {
        total: 500,
      },
      nodes: [
        {
          id: 6054,
          summary:
            "A Mediocre Story with Nothing New that Would be Glossed if Ufotable with their Unlimited Budget Works didn't Touch it",
          rating: 978,
          ratingAmount: 1522,
          user: {
            id: 39336,
            name: "KayiOu",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b39336-asraDOOWp2WT.png",
            },
          },
        },
        {
          id: 5206,
          summary:
            "The weak have no rights or choices. Their only fate is to be relentlessly crushed by the strong.",
          rating: 252,
          ratingAmount: 455,
          user: {
            id: 109697,
            name: "Scientiiaa",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b109697-ZAvRDxPqjHz6.jpg",
            },
          },
        },
      ],
    },
    recommendations: {
      pageInfo: {
        total: 500,
      },
      nodes: [
        {
          id: 45037,
          rating: 2298,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 113415,
            title: {
              userPreferred: "Jujutsu Kaisen",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-bbBWj4pEFseh.jpg",
            },
          },
          user: {
            id: 516348,
            name: "highfuelreal",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b516348-41YbjZMAK3HD.jpg",
            },
          },
        },
        {
          id: 1763,
          rating: 1589,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 101347,
            title: {
              userPreferred: "Dororo",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n101347-tHurKfTlhtFl.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx101347-2J2p8qJpxpfZ.jpg",
            },
          },
          user: {
            id: 3,
            name: "Removed",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/3.jpg",
            },
          },
        },
        {
          id: 4675,
          rating: 345,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 104276,
            title: {
              userPreferred: "Boku no Hero Academia 4",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104276-PQO1pcNzzWT0.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104276-SnEowMvesWIE.png",
            },
          },
          user: {
            id: 228214,
            name: "alenawhim",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b228214-QLbxXJmSqDE5.png",
            },
          },
        },
        {
          id: 8316,
          rating: 306,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 269,
            title: {
              userPreferred: "BLEACH",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/269-08ar2HJOUAuL.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
            },
          },
          user: {
            id: 165010,
            name: "Fredobert",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b165010-FWr5YqGbgEo2.png",
            },
          },
        },
        {
          id: 114069,
          rating: 276,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 142329,
            title: {
              userPreferred: "Kimetsu no Yaiba: Yuukaku-hen",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142329-i413SzLmToZN.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142329-kET1PIXJv2eW.jpg",
            },
          },
          user: {
            id: 5630988,
            name: "IsmailZ",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b5630988-g8WogLwg1HBB.png",
            },
          },
        },
        {
          id: 5540,
          rating: 191,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 97940,
            title: {
              userPreferred: "Black Clover",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97940-1URQdQ4U1a0b.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97940-bPydLjny8PUw.png",
            },
          },
          user: {
            id: 195601,
            name: "hazz",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b195601-JraiK203pI0B.jpg",
            },
          },
        },
        {
          id: 16569,
          rating: 173,
          userRating: "NO_RATING",
          mediaRecommendation: {
            id: 5114,
            title: {
              userPreferred: "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
            },
            format: "TV",
            type: "ANIME",
            status: "FINISHED",
            bannerImage:
              "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
            coverImage: {
              large:
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-KJTQz9AIm6Wk.jpg",
            },
          },
          user: {
            id: 189959,
            name: "faygocupcakes",
            avatar: {
              large:
                "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b189959-JzTen0yNFtzW.jpg",
            },
          },
        },
      ],
    },
    externalLinks: [
      {
        id: 5814,
        site: "Twitter",
        url: "https://twitter.com/kimetsu_off",
        type: "SOCIAL",
        language: "Japanese",
        color: "#1DA1F2",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/17-WaCuJNdk2K07.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 9276,
        site: "Funimation",
        url: "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/",
        type: "STREAMING",
        language: null,
        color: "#5B0BB5",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/8-I96T2wQCpURN.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 9277,
        site: "Crunchyroll",
        url: "https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba",
        type: "STREAMING",
        language: null,
        color: "#F88B24",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/5-AWN2pVlluCOO.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 9303,
        site: "Hulu",
        url: "https://www.hulu.com/demon-slayer-kimetsu-no-yaiba",
        type: "STREAMING",
        language: null,
        color: "#1CE783",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/7-rM06PQyWONGC.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 10046,
        site: "VRV",
        url: "https://vrv.co/series/GY5P48XEY/Demon-Slayer-Kimetsu-no-Yaiba",
        type: "STREAMING",
        language: null,
        color: "#F8DB09",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/24-xJWczRhvO5lt.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 15243,
        site: "Twitter",
        url: "https://twitter.com/DemonSlayerUSA",
        type: "SOCIAL",
        language: "English",
        color: "#1DA1F2",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/17-WaCuJNdk2K07.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 21673,
        site: "Netflix",
        url: "https://www.netflix.com/title/81091393",
        type: "STREAMING",
        language: null,
        color: "#E50914",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/10-rVGPom8RCiwH.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 28564,
        site: "Official Site",
        url: "https://kimetsu.com/anime/risshihen/",
        type: "INFO",
        language: "Japanese",
        color: null,
        icon: null,
        notes: null,
        isDisabled: false,
      },
      {
        id: 45307,
        site: "Twitter",
        url: "https://twitter.com/kimetsu_fr",
        type: "SOCIAL",
        language: "French",
        color: "#1DA1F2",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/17-WaCuJNdk2K07.png",
        notes: null,
        isDisabled: false,
      },
      {
        id: 45972,
        site: "Wakanim",
        url: "https://www.wakanim.tv/sc/v2/catalogue/show/479/demon-slayer-kimetsu-no-yaiba/season/833/season-1---cour-1-sub",
        type: "STREAMING",
        language: null,
        color: "#E3474B",
        icon: "https://s4.anilist.co/file/anilistcdn/link/icon/26-mlteKd1HzkLH.png",
        notes: null,
        isDisabled: false,
      },
    ],
    streamingEpisodes: [
      {
        site: "Crunchyroll",
        title: "Episode 11 - No Matter How Many Lives",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire4-tmb/4ad7006be1e71909f942ef870410db581644738682_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-11-no-matter-how-many-lives-821980",
      },
      {
        site: "Crunchyroll",
        title: "Episode 10 - Never Give Up",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire4-tmb/814629ce53da0ff976edc1ae12c4d9cc1644139968_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-10-never-give-up-821979",
      },
      {
        site: "Crunchyroll",
        title: "Episode 9 - Defeating an Upper Rank Demon",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire4-tmb/b06c24fdecd752499d9506c00e992a181643531726_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-9-defeating-an-upper-rank-demon-821978",
      },
      {
        site: "Crunchyroll",
        title: "Episode 8 - Gathering",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire2-tmb/054f59588609c371cea7b934cc855bac1642929790_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-8-gathering-821977",
      },
      {
        site: "Crunchyroll",
        title: "Episode 7 - Transformation",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire4-tmb/1c0ebdab65afb0056682baf02bfb3f881642348025_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-7-transformation-821976",
      },
      {
        site: "Crunchyroll",
        title: "Episode 6 - Layered Memories",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire1-tmb/c495da94c1244d459e9271db88f6e2561641719606_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-6-layered-memories-821975",
      },
      {
        site: "Crunchyroll",
        title: "Episode 5 - Things Are Gonna Get Real Flashy!!",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire2-tmb/e8ba0acd3c7354ccf40597ba70c37aea1641092669_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-5-things-are-gonna-get-real-flashy-821974",
      },
      {
        site: "Crunchyroll",
        title: "Episode 4 - Tonight",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire3-tmb/072c9c3dfba4449707b7d842a8254e561640242946_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-4-tonight-821973",
      },
      {
        site: "Crunchyroll",
        title: "Episode 3 - What Are You?",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire4-tmb/a185fe104556794d24af2164602f23d31639907206_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-3-what-are-you-821972",
      },
      {
        site: "Crunchyroll",
        title: "Episode 2 - Infiltrating the Entertainment District",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire2-tmb/652bd3f5f6d0df599b9024d00be41b8e1639320159_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-2-infiltrating-the-entertainment-district-821971",
      },
      {
        site: "Crunchyroll",
        title: "Episode 1 - Sound Hashira Tengen Uzui",
        thumbnail:
          "https://img1.ak.crunchyroll.com/i/spire4-tmb/e8bbd20dddaf573807c76ada638f582e1638697442_full.jpg",
        url: "http://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba/episode-1-sound-hashira-tengen-uzui-821970",
      },
    ],
    trailer: {
      id: "6vMuWuWlW4I",
      site: "youtube",
    },
    rankings: [
      {
        id: 78,
        rank: 78,
        type: "RATED",
        format: "TV",
        year: null,
        season: null,
        allTime: true,
        context: "highest rated all time",
      },
      {
        id: 502,
        rank: 2,
        type: "POPULAR",
        format: "TV",
        year: null,
        season: null,
        allTime: true,
        context: "most popular all time",
      },
      {
        id: 8884,
        rank: 6,
        type: "RATED",
        format: "TV",
        year: 2019,
        season: null,
        allTime: false,
        context: "highest rated",
      },
      {
        id: 8979,
        rank: 1,
        type: "POPULAR",
        format: "TV",
        year: 2019,
        season: null,
        allTime: false,
        context: "most popular",
      },
      {
        id: 9140,
        rank: 2,
        type: "RATED",
        format: "TV",
        year: 2019,
        season: "SPRING",
        allTime: false,
        context: "highest rated",
      },
      {
        id: 9169,
        rank: 1,
        type: "POPULAR",
        format: "TV",
        year: 2019,
        season: "SPRING",
        allTime: false,
        context: "most popular",
      },
    ],
    tags: [
      {
        id: 15,
        name: "Demons",
        description: "Prominently features malevolent otherworldly creatures.",
        rank: 96,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 56,
        name: "Shounen",
        description: "Target demographic is teenage and young adult males.",
        rank: 92,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 43,
        name: "Swordplay",
        description: "Prominently features the use of swords in combat.",
        rank: 88,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 1228,
        name: "Primarily Teen Cast",
        description: "Main cast is mostly composed of teen characters.",
        rank: 83,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: 716620,
      },
      {
        id: 82,
        name: "Male Protagonist",
        description: "Main character is male.",
        rank: 82,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 85,
        name: "Tragedy",
        description: "Centers around tragic events and unhappy endings.",
        rank: 80,
        isMediaSpoiler: false,
        isGeneralSpoiler: true,
        userId: null,
      },
      {
        id: 259,
        name: "Monster Girl",
        description:
          "Prominently features a female character who is part-monster.",
        rank: 76,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 1310,
        name: "Travel",
        description:
          "Centers around character(s) moving between places a significant distance apart.",
        rank: 75,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: 493630,
      },
      {
        id: 252,
        name: "Revenge",
        description:
          "Prominently features a character who aims to exact punishment in a resentful or vindictive manner.",
        rank: 73,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 90,
        name: "CGI",
        description:
          "Prominently features scenes created with computer-generated imagery.",
        rank: 69,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 94,
        name: "Gore",
        description: "Prominently features graphic bloodshed and violence.",
        rank: 68,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 1382,
        name: "Orphan",
        description: "Prominently features a character that is an orphan.",
        rank: 66,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: 139213,
      },
      {
        id: 88,
        name: "Primarily Male Cast",
        description: "Main cast is mostly composed of male characters.",
        rank: 65,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 208,
        name: "Mythology",
        description:
          "Prominently features mythological elements, especially those from religious or cultural tradition.",
        rank: 64,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 83,
        name: "Slapstick",
        description:
          "Prominently features comedy based on deliberately clumsy actions or embarrassing events.",
        rank: 64,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 683,
        name: "Rotoscoping",
        description:
          "Animation technique that animators use to trace over motion picture footage, frame by frame, to produce realistic action.",
        rank: 63,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 102,
        name: "Coming of Age",
        description:
          "Centers around a character's transition from childhood to adulthood.",
        rank: 63,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 250,
        name: "Rural",
        description: "Partly or completely set in the countryside.",
        rank: 61,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 66,
        name: "Super Power",
        description:
          "Prominently features characters with special abilities that allow them to do what would normally be physically or logically impossible.",
        rank: 60,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 25,
        name: "Historical",
        description:
          "Partly or completely set during a real period of world history.",
        rank: 59,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 639,
        name: "Body Horror",
        description:
          "Features characters who undergo horrific transformations or disfigurement, often to their own detriment.",
        rank: 55,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 324,
        name: "Chibi",
        description:
          'Features "super deformed" character designs with smaller, rounder proportions and a cute look.',
        rank: 49,
        isMediaSpoiler: false,
        isGeneralSpoiler: false,
        userId: null,
      },
      {
        id: 153,
        name: "Time Skip",
        description: "Features a gap in time used to advance the story.",
        rank: 43,
        isMediaSpoiler: false,
        isGeneralSpoiler: true,
        userId: null,
      },
    ],
    mediaListEntry: null,
    stats: {
      statusDistribution: [
        {
          status: "CURRENT",
          amount: 48280,
        },
        {
          status: "PLANNING",
          amount: 53656,
        },
        {
          status: "COMPLETED",
          amount: 480149,
        },
        {
          status: "DROPPED",
          amount: 8562,
        },
        {
          status: "PAUSED",
          amount: 11740,
        },
      ],
      scoreDistribution: [
        {
          score: 10,
          amount: 1467,
        },
        {
          score: 20,
          amount: 491,
        },
        {
          score: 30,
          amount: 1152,
        },
        {
          score: 40,
          amount: 2045,
        },
        {
          score: 50,
          amount: 5893,
        },
        {
          score: 60,
          amount: 11299,
        },
        {
          score: 70,
          amount: 34516,
        },
        {
          score: 80,
          amount: 80539,
        },
        {
          score: 90,
          amount: 114791,
        },
        {
          score: 100,
          amount: 90506,
        },
      ],
    },
  },
}
export const getAnimeById = async (id: number) => {
  // return data as any as AnimeDetailQuery
  return await fetchGql(ANIME_DETAIL, {
    id,
    type: "ANIME" as MediaType,
    isAdult: false,
  })
}

export const getAnimeByIdForLayout = async (id: number) => {
  // return data as any as AnimeDetailQuery
  return await fetchGql(
    ANIME_DETAIL_FOR_LAYOUT,
    {
      id,
      type: "ANIME" as MediaType,
      isAdult: false,
    },
    {
      cache: "force-cache",
    }
  )
}

export const getCharactersByAnimeId = async (id: number, page: number) => {
  return await fetchGql(ANIME_CHARACTERS, {
    id,
    page,
  })
}

export const getAnimeReviewsByAnimeId = async (id: number, page: number) =>
  await fetchGql(ANIME_REVIEWS, { id, page })

export const getAnimeThreadAnimeId = async (
  id: number,
  page: number,
  perPage: number
) => {
  return await fetchGql(ANIME_THREAD, {
    id,
    page,
    perPage,
  })
}

export const getStaffByAnimeId = async (
  id: number,
  page: number,
  perPage: number
) => {
  return await fetchGql(STAFF, {
    id,
    page,
    perPage,
  })
}

export const getAnimeStatsById = async (id: number) => {
  return await fetchGql(ANIME_STATS, { id })
}
