import API from './API'

export const ajukanSurat = (payload) => {
  return API.post('/v1/pengajuan-surat', payload)
}
