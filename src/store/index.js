import create from 'zustand'

const useStore = create((set) => ({
  // shows user device GPU details
  devMode: false,
  setDevMode: () => set((state) => ({ devMode: !state.devMode })),

  // When selected, camera animates into position
  imageSelected: false,
  setImageSelected: () => set((state) => ({ imageSelected: !state.imageSelected })),

  // State keeps track when a hotspot is selected
  hotspotSelected: false,
  setHotspotSelected: () => set((state) => ({ hotspotSelected: !state.hotspotSelected })),

  // State holds clicked hospot data
  selectedHotspotData: false,
  setSelectedHotspotData: (data) =>
    set((state) => {
      return {
        selectedHotspotData: data
      }
    }),

  // Gallery Image position
  galleryImagePosition: 1,
  setGalleryImagePosition: (position) =>
    set((state) => {
      return { galleryImagePosition: position }
    }),

  // keeps track of gallery section (Look 1, 2, 3 ....)
  gallerySectionPosition: 1,
  setGallerySectionPosition: (position) =>
    set((state) => {
      return { gallerySectionPosition: position }
    }),

  // if device is mobile
  isMobile: false,
  setIsMobile: (mobile) => set((state) => ({ isMobile: mobile })),

  // User device height
  clientheight: 0,
  setClientHeight: (deviceHeight) =>
    set((state) => {
      return { clientheight: deviceHeight }
    })
}))

export default useStore
