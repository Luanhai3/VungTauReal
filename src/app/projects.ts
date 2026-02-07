export type Project = {
	id: string;
	name: string;
	category: string;
	address: string;
	mapQuery: string;
	totalArea: string;
	totalProducts: string;
	propertyTypes: string;
	legal: string;
	developer: string;
	contractor: string;
	image: string;
  
	floors?: string;
	bank?: string;
  
	introduction?: string;
	highlights?: string[];
  };
  
  export const projects: Project[] = [

  {
    id: '1',
    name: 'Blanca City Vũng Tàu',
	category:"Căn hộ",
    address: 'Đường 3 Tháng 2, P. Phước Thắng, TP. Hồ Chí Minh',
	mapQuery: "Blanca City Vung Tau 3/2 Phuoc Thang Vung Tau",
    totalArea: '96,6 ha',
    totalProducts: '11.248 căn',
    propertyTypes: 'Nhà phố, Song lập, Đơn lập, Căn hộ',
    legal: 'Đất ở đô thị và thương mại dịch vụ',
    developer: 'Sun Group',
    contractor: 'Tân Minh Nhân',
    image: '/images/blanca-city.jpg',
	introduction: `
Blanca City Vũng Tàu là khu đô thị kết hợp với dịch vụ du lịch cao cấp trên đường 3 Tháng 2, TP Vũng Tàu rộng hơn 96 ha, tổng vốn đầu tư gần 35.000 tỷ đồng.

Khu đô thị Blanca City Vũng Tàu đã được UBND TP Vũng Tàu phê duyệt quy hoạch chi tiết 1/500, trong đó đất nhà ở, công trình dịch vụ – công cộng… hơn 40 ha; đất dịch vụ du lịch hơn 35 ha và 19,5 ha là đất cây xanh, bãi đỗ xe, đường giao thông.

Khu đô thị Blanca City Vũng Tàu gồm tổ hợp các công trình nhà ở liền kề, biệt thự, chung cư, nhà ở xã hội; các công trình thương mại, dịch vụ thấp và cao tầng; khách sạn; công viên nước…đáp ứng quy mô dân số khoảng 13.000 người và 11.000 khách du lịch.

    `,

    highlights: [
		"Công viên nước Sun World quy mô gần 19ha, bao gồm 21 trò chơi nước, là tâm điểm giải trí lớn nhất hệ thống Sun World.",
		"Thiết kế lấy cảm hứng từ thương cảng thế kỷ XIII, kết hợp phong cách tối giản, tinh tế.",
		"Tiện ích: Hồ bơi vô cực (infinity) hướng biển, beach club, skybar, quảng trường biển.",
		"Blanca City được đánh giá cao nhờ vị trí chiến lược, kết nối thuận tiện với cao tốc Biên Hòa - Vũng Tàu và sân bay Long Thành."
	  ],
	  
  },
  {
    id: '2',
    name: 'CSJ Bioss Condotel',
	category: "Căn hộ",
    address: 'Số 169 Thùy Vân, Phường Tam Thắng, Thành phố Hồ Chí Minh',
	mapQuery: "CSJ Bioss Condotel 169 Thuy Van Tam Thang Vung Tau",
    totalArea: '11.014 m²',
    floors: '31 tầng và 2 tầng hầm',
    totalProducts: '315 sản phẩm',
    propertyTypes: 'Căn hộ du lịch và Căn hộ khách sạn',
    legal: 'Đất thương mại dịch vụ',
    developer: 'DIC Corp',
    contractor: 'DIC 4',
    bank: 'BIDV',
    image: '/images/CSJ.jpg',
	introduction: `
CSJ Bioss Condotel (thuộc khu phức hợp Cap Saint Jacques) là dự án căn hộ nghỉ dưỡng 5 sao cao cấp do DIC Corp phát triển tại 169 Thùy Vân, TP. Vũng Tàu. Đây là mảnh ghép giai đoạn 3 quan trọng, mang đến 315 căn hộ từ studio đến 2-3 phòng ngủ, sở hữu view biển trực diện, tiện ích sang trọng và vị trí trung tâm sầm uất.
    `,

	highlights: [
		"Vị trí đắc địa: Nằm tại 169 Thùy Vân, phường Thắng Tam, đối diện bãi biển Bãi Sau, trung tâm du lịch sầm uất nhất Vũng Tàu, dễ dàng tiếp cận các khu vực giải trí, ẩm thực.",
		"Chủ đầu tư uy tín: DIC Group - tập đoàn uy tín trong lĩnh vực bất động sản nghỉ dưỡng tại Vũng Tàu.",
		"Quy mô và sản phẩm: Là giai đoạn 3 của khu phức hợp, bao gồm 315 căn hộ khách sạn tiêu chuẩn 5 sao, đa dạng diện tích.",
		"Tiện ích tích hợp: Cư dân và du khách được thừa hưởng hệ sinh thái tiện ích của toàn bộ khu phức hợp CSJ bao gồm trung tâm hội nghị, hồ bơi, nhà hàng, trung tâm thương mại và dịch vụ quản lý chuẩn 5 sao.",
		"Tiềm năng đầu tư: Là một phần của tổ hợp nghỉ dưỡng hoàn chỉnh, CSJ Bioss hứa hẹn mang lại khả năng cho thuê và tăng giá cao, phù hợp cho nhà đầu tư tìm kiếm tài sản biển."
	  ],
  },
  {
	id: '3',
	name: 'Vung Tau Centre Point',
	category: "Căn hộ",
	address: 'Đường 2 tháng 9, Phường Tam Thắng, TP. Vũng Tàu',
	mapQuery: "Vung Tau Centre Point 2/9 Tam Thang Vung Tau",
	totalArea: '7.428 m²',
	floors: '25 tầng và 2 tầng hầm',
	totalProducts: '595 sản phẩm',
	propertyTypes: 'Căn hộ thương mại cao cấp',
	legal: 'Sổ hồng lâu dài',
	developer: 'DIC Holdings',
	contractor: 'DIC 4',
	bank: 'MB Bank',
	image: '/images/VungTauCentrePoint.jpg',
  
	introduction: "Vũng Tàu Centre Point là dự án căn hộ cao cấp và shophouse do DIC Holdings làm chủ đầu tư, tọa lạc tại ngã tư đường 2/9 và Nguyễn Hữu Cảnh, phường Nguyễn An Ninh, TP. Vũng Tàu. Dự án gồm 2 block cao 25 tầng với 595 căn hộ, shophouse và duplex, nằm trong Khu đô thị Chí Linh. Sở hữu vị trí đắc địa gần biển, dự án cung cấp tiện ích hiện đại như hồ bơi, trung tâm thương mại và là cơ hội đầu tư, an cư lâu dài tại TP. Vũng Tàu.",
  
	highlights: [
	  "Vị trí đắc địa: Nằm tại tâm điểm giao thương sầm uất, kết nối dễ dàng đến các khu vực trung tâm và cách biển khoảng 700m.",
	  "Tiện ích nội khu đồng bộ: Tích hợp đầy đủ các tiện ích đẳng cấp, mang lại cuộc sống hiện đại và thuận tiện cho cư dân.",
	  "Thiết kế hiện đại: Mật độ khối tháp thấp (40%), căn hộ được thiết kế tối ưu công năng, đón ánh sáng tự nhiên.",
	  "Vũng Tàu Centre Point được đánh giá là một trong những dự án căn hộ đáng sống, mang lại không gian nghỉ dưỡng và tiềm năng sinh lời bền vững tại trung tâm thành phố biển Vũng Tàu."
	]
  },
  
  {
  id: '4',
  name: 'Sunshine Bay Retreat',
  category: "Khu đô thị",
  address: 'Đường 3/2, Phường Phước Thắng, TP. Vũng Tàu',
  mapQuery: "Sunshine Bay Retreat 3/2 Phuoc Thang Vung Tau",
  totalArea: '20 ha',
  floors: '—',
  totalProducts: 'Gần 6000 căn hộ, 91 biệt thự Eden Villas',
  propertyTypes: 'Căn hộ Horizon, căn hộ Eden, Eden Villas',
  legal: 'Đất thương mại dịch vụ',
  developer: 'Sunshine Group',
  contractor: 'SCG',
  bank: 'Kien Long Bank',
  image: '/images/SunshineBay.jpg',

  introduction: "Sunshine Bay Retreat Vũng Tàu là tổ hợp nghỉ dưỡng và thương mại 5 sao cao cấp do Tập đoàn Sunshine phát triển, nằm trên đường 3/2, P. Phước Thắng, TP. Vũng Tàu với quy mô khoảng 20ha và 320m bờ biển. Dự án bao gồm condotel, biệt thự và shophouse với kiến trúc xanh, tiện ích wellness hiện đại, hướng tới không gian nghỉ dưỡng 'Retreat' sang trọng.",

  highlights: [
    "Vị trí chiến lược: Nằm trên trục đường 3/2, kết nối dễ dàng vào trung tâm Vũng Tàu, Bãi Sau và thuận tiện di chuyển từ TP.HCM.",
    "Tiện ích Wellness 5 sao: Quy hoạch theo triết lý Wellness-Centric với hồ bơi vô cực, spa, yoga, lounge ven biển và công nghệ 4.0.",
    "Thiết kế độc đáo: Ban công kính tràn viền, tối đa tầm nhìn hướng biển, kết hợp cảnh quan mặt nước và không gian xanh.",
    "Tiềm năng đầu tư: Quy mô lớn, vị trí du lịch trọng điểm, giá trị khai thác lưu trú và tăng giá cao trong tương lai."
  ]
},
{
	id: '5',
	name: 'Five Star Odyssey',
	category: "Căn hộ",
	address: '165 đường Thùy Vân, P. Thắng Tam, TP. Vũng Tàu',
	mapQuery: "Five Star Odyssey 165 Thuy Van Vung Tau",
	totalArea: '8.200 m²',
	floors: '50 tầng nổi, 4 tầng hầm',
	totalProducts: '436 phòng khách sạn, 1019 căn hộ du lịch, 12 penthouse',
	propertyTypes: 'Khách sạn, căn hộ du lịch',
	legal: 'Sở hữu 50 năm',
	developer: 'Green World (thành viên Five Star Group)',
	contractor: '—',
	bank: 'Quản lý vận hành: Movenpick',
	image: '/images/FiveStar.jpg',
  
	introduction: "Five Star Odyssey (165 Thùy Vân, Vũng Tàu) là tổ hợp căn hộ du lịch và khách sạn 5 sao cao 50 tầng do Tập đoàn Quốc tế Năm Sao (Five Star Group) phát triển. Với vị trí đắc địa tại Bãi Sau, tổng vốn đầu tư 4.000 tỷ đồng, dự án cung ứng 1.019 căn hộ, 436 phòng khách sạn, 12 penthouse, nổi bật với thiết kế sóng biển và tiện ích sky view, hứa hẹn là biểu tượng mới tại Vũng Tàu.",
  
	highlights: [
	  "Vị trí tọa độ vàng: Nằm trên mặt tiền đường Thùy Vân, trung tâm Bãi Sau, khu vực sầm uất nhất Vũng Tàu.",
	  "Kiến trúc biểu tượng: Dự án được vinh danh là Kiến trúc căn hộ - Khách sạn Luxury đẹp nhất Châu Á- Thái Bình Dương 2025",
	  "Kết nối giao thông: Dễ dàng tiếp cận các điểm du lịch, cách sân bay quốc tế Long Thành khoảng 40 phút di chuyển.",
	  "Tiềm năng đầu tư: Mô hình Integrated Resort 4.0 tích hợp đa năng, mang lại cơ hội đầu tư cao cấp, bền vững",
	  "Thời gian bàn giao: Dự kiến năm 2027."
	]
  },
  
  {
	id: '6',
	name: 'Five Star Poseidon',
	category: "Căn hộ",
	address: 'Số 57 – 59 Thùy Vân, Phường 2, TP. Vũng Tàu',
	mapQuery: "Five Star Poseidon Thuy Van Vung Tau",
	totalArea: '1,7 ha',
	floors: '43 – 46 tầng + 3 tầng hầm',
	totalProducts: '1.056 căn hộ, 4 penthouse, 21 duplex',
	propertyTypes: 'Căn hộ nghỉ dưỡng, Khách sạn 5 sao',
	legal: 'Sở hữu condotel 50 năm theo pháp luật VN',
	developer: 'Five Star Group & Agritour',
	contractor: 'Newtecons & SOL E&C',
	bank: 'Hợp tác phát triển & bảo lãnh tài chính',
	image: '/images/FiveStar2.jpg',
  
	introduction: "Five Star Poseidon Vũng Tàu là tổ hợp căn hộ du lịch và khách sạn 5 sao cao cấp do Five Star Group đầu tư tại số 57-59 Thùy Vân, Bãi Sau. Dự án gồm tháp đôi cao đến 46 tầng, sở hữu tầm nhìn biển trực diện, kiến trúc hoàng gia sang trọng và dự kiến ra mắt năm 2026.",
  
	highlights: [
	  "Vị trí đắc địa: Nằm trên cung đường biển Thùy Vân, đối diện Bãi Sau, trung tâm du lịch sôi động nhất Vũng Tàu.",
	  "Quy mô biểu tượng: Tổng diện tích sàn xây dựng khoảng 170.000 m² với 3 tầng hầm và đến 46 tầng nổi.",
	  "Sản phẩm đa dạng: Hơn 1.000 căn condotel, 457 phòng khách sạn 5 sao, 4 penthouse và 21 duplex cao cấp.",
	  "Tiện ích 5 sao: Hồ Mây trên cao hơn 100m, sky bar, công viên nước trên cao, trung tâm hội nghị hơn 1.000 khách.",
	  "Tầm nhìn độc đáo: 100% căn hộ hướng biển hoặc trung tâm thành phố, thiết kế thông thoáng, đón gió biển.",
	  "Chủ đầu tư uy tín: Phát triển bởi Five Star Group, đơn vị giàu kinh nghiệm trong bất động sản nghỉ dưỡng."
	]
  },
  
];