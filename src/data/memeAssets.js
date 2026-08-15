export const MEME_ASSETS = {
  incorrect: [
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/football.mp4',
      image: '',
    },
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/bass_drop_+_vine_boom_mp3_66885.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/shocked-face-shocked-meme.jpg',
    },
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/lobotomy_sound_effect_download_mp3_64403.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/patrick-drooling-patrick-star.jpg',
    },
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/plankton_aughhhhh_funny_meme_sound_effect_mp3_67202.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/ugly-plankton-meme-ugly-plankton.jpg'
    },
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/ishowspeed_say_wallahi_sound_effect_mp3_67822.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/speedddd.jpg'
    },
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/fahh_long_sound_effect_mp3_68436.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/robot.jpg'
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/oh_my_god_bruh_oh_hell_nah_man_wtf_bro_h264_66596.mp4'
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/oh_my_god_bruh_oh_hell_nah_man_wtf_bro_h264_66596.mp4'
    }
  ],
  correct: [
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/omg_its_albert_einstein_sound_effect_mp3_67493.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/einstein-nikola-tesla.jpg'
    },
    {
      type: 'audio',
      audio: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/audio/correct2.mp3',
      image: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Png/emoji.jpg'
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/noice_h264_69089.mp4',
      image: ''
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/tuff.mp4',
      image: ''
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/oh_my_gah_h264_64721.mp4',
      image: '',
    
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/woooo_yeah_baby_h264_65023.mp4',
      image: '',
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/oh_my_god_wow_african_guy.mp4',
      image: '',
    },
    {
      type: 'video',
      video: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/Mp4/brain.mp4',
      image: '',
    }
  ]
};

export function getRandomMeme(isCorrect) {
  const pool = isCorrect ? MEME_ASSETS.correct : MEME_ASSETS.incorrect;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}