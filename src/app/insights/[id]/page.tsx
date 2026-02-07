'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Article = {
  title: string;
  category: string;
  date: string;
  image: string;
  body: string[];
  gallery?: string[];
};

const newsArticles: Record<string, Article> = {
 '1': {
  title: 'Cận cảnh 38 km cao tốc Biên Hòa – Vũng Tàu sắp thông xe',
  category: 'Hạ tầng',
  date: '22/01/2026',
  image: '/images/new1-1.jpg',

  gallery: [
    '/images/new1-1.jpg',
    '/images/new1-2.jpg',
    '/images/new1-3.jpg',
  ],

  body: [
    'Dự án cao tốc Biên Hòa – Vũng Tàu, đặc biệt đoạn tuyến gần 38 km qua Đồng Nai, đang được đẩy nhanh tiến độ để thông xe kỹ thuật trước Tết Nguyên đán 2026.',
    'Hầu hết tuyến chính đã được thảm nhựa, lắp đặt hộ lan, dải phân cách và hoàn thiện các hạng mục an toàn giao thông quan trọng, sẵn sàng cho giai đoạn vận hành thử nghiệm.',
    'Dự án thành phần 2 (dài 18,2 km) đã đạt hơn 80% giá trị xây lắp, tập trung hoàn thiện mặt đường, cầu vượt và hệ thống biển báo giao thông.',
    'Các nút giao quan trọng như T1, T2 và khu vực nút giao Tân Hiệp đã cơ bản hoàn thành, giúp kết nối đồng bộ và giảm tải đáng kể cho Quốc lộ 51 hiện hữu.',
    'Đoạn 19,5 km qua TP. Bà Rịa (dự án thành phần 3) cũng đang hoàn tất thủ tục để thông xe đồng bộ, tạo sự liền mạch từ Đồng Nai đến Bà Rịa – Vũng Tàu.',
    'Mục tiêu của dự án là thông xe trước Tết Bính Ngọ 2026 nhằm phục vụ nhu cầu đi lại tăng cao dịp lễ, đồng thời giải quyết tình trạng ùn tắc kéo dài trên Quốc lộ 51.',
    'Với tổng mức đầu tư khoảng 17.800 tỷ đồng, cao tốc Biên Hòa – Vũng Tàu là dự án hạ tầng trọng điểm quốc gia, giúp rút ngắn đáng kể thời gian di chuyển giữa TP.HCM, Đồng Nai và Vũng Tàu.',
    'Song song đó, trục trung tâm đô thị Biên Hòa dài 5,4 km, tổng vốn hơn 1.500 tỷ đồng, cũng đang được hoàn thiện, góp phần tăng cường kết nối giao thông từ TP.HCM vào trung tâm tỉnh Đồng Nai.'
  ],
},


 '2': {
  title: 'TP HCM tính phát triển TOD kết nối Bình Dương – Bà Rịa – Vũng Tàu',
  category: 'Giao thông',
  date: '28/01/2026',
  image: '/images/new2-1.jpg',
  body: [
    'TP.HCM đang lập quy hoạch tổng thể và các quy hoạch phân khu theo định hướng phát triển đô thị gắn với giao thông công cộng (TOD), mở rộng kết nối liên vùng đến Bình Dương và Bà Rịa – Vũng Tàu.',

    'Tầm nhìn quy hoạch hướng tới mô hình đô thị đa trung tâm, liên kết các đô thị vệ tinh và vùng kinh tế trọng điểm Đông Nam Bộ thông qua hệ thống giao thông công cộng hiện đại và đồng bộ.',

    'Thành phố đặt mục tiêu phát triển mạng lưới đường sắt và metro lên đến 700km, tập trung vào các trục giao thông chiến lược, đặc biệt là hành lang logistics Cái Mép – Thị Vải.',

    'Các dự án hạ tầng chính bao gồm kéo dài tuyến Metro số 1 (Suối Tiên – Bình Dương), triển khai Metro số 2, số 6, cùng các tuyến đường sắt kết nối Thủ Thiêm – Long Thành và Bến Thành – Cần Giờ.',

    'Mục tiêu giai đoạn 2030–2045 là hoàn thiện mạng lưới metro và đường sắt liên vùng, giúp giảm áp lực giao thông nội đô và thúc đẩy phát triển đô thị, công nghiệp, cảng biển một cách đồng bộ.',

    'Trục TP.HCM – Bà Rịa – Vũng Tàu, đặc biệt khu vực cảng Cái Mép – Thị Vải, được quy hoạch trở thành hành lang TOD – logistics chiến lược, tạo động lực tăng trưởng kinh tế cho toàn vùng.',

    'Việc phát triển TOD liên vùng đòi hỏi sự gắn kết chặt chẽ giữa các ga metro, ga đường sắt cao tốc với không gian đô thị xung quanh, nhằm tối ưu hiệu quả sử dụng đất và thúc đẩy thị trường bất động sản phát triển bền vững.'
  ],
},

  '3': {
  title: 'Thị trường TP.HCM: Đất nền lặng sóng, căn hộ bật phá',
  category: 'Thị trường',
  date: '20/01/2026',
  image: '/images/new3-1.jpg',
  body: [
    'Sau giai đoạn trầm lắng kéo dài, thị trường bất động sản TP.HCM và vùng phụ cận trong năm 2025 đã ghi nhận sự cải thiện rõ rệt về nguồn cung và sức cầu ở một số phân khúc chủ đạo.',

    'Phân khúc đất nền vẫn duy trì trạng thái “lặng sóng” do nguồn cung hạn chế và tâm lý thận trọng của nhà đầu tư. Nguồn cung sơ cấp chỉ tăng nhẹ 2% so với năm 2024 và phần lớn đến từ các dự án đã mở bán trước đó.',

    'Mặc dù sức cầu thị trường tăng khoảng 69% so với năm trước, giao dịch chủ yếu tập trung tại các dự án đã hoàn thiện hạ tầng, pháp lý rõ ràng và được phát triển bởi các chủ đầu tư có năng lực tài chính mạnh.',

    'Khu vực Tây Ninh đóng vai trò dẫn dắt nguồn cung mới với tỷ trọng nguồn cung và lượng tiêu thụ lần lượt đạt 38% và 53%. Mặt bằng giá sơ cấp tăng trung bình 6% trong khi giá thứ cấp phổ biến tăng từ 12% đến 15%.',

    'Trái ngược với đất nền, phân khúc căn hộ ghi nhận sự bứt phá mạnh mẽ. Nguồn cung sơ cấp tăng tới 73% so với năm 2024, phản ánh xu hướng dịch chuyển dòng tiền sang sản phẩm đáp ứng nhu cầu ở thực và cho thuê.',

    'TP.HCM tiếp tục giữ vị trí dẫn đầu khi chiếm tới 87% tổng nguồn cung căn hộ sơ cấp toàn thị trường, nhờ lợi thế về hạ tầng, tiện ích và nhu cầu nhà ở thực tế cao.',

    'Xu hướng lựa chọn căn hộ tại các khu vực ven đô và vùng giáp ranh ngày càng rõ nét, đặc biệt tại những nơi hạ tầng giao thông liên vùng đang dần hoàn thiện, tạo động lực tăng giá và thanh khoản cho thị trường.'
  ],
},

  '4': {
  title: 'Cầu đường nối Vũng Tàu – Cần Giờ có hầm vượt biển',
  category: 'Hạ tầng',
  date: '05/02/2026',

  image: '/images/new4-2.jpg',
   gallery: [
    '/images/new4-1.jpg',
    '/images/new4-2.jpg',
    '/images/new4-3.jpg',
  ],
  body: [
    'Dự án cầu đường vượt biển Cần Giờ – Vũng Tàu được kỳ vọng trở thành tuyến giao thông chiến lược, mở ra không gian phát triển mới cho du lịch và bất động sản ven biển khu vực phía Nam.',

    'Tuyến có tổng chiều dài hơn 14km, thiết kế 6 làn xe với vận tốc 80km/h. Trong đó, phần cầu đường khoảng 11km và hầm vượt biển dài 3,1km bao gồm hầm dìm, hầm kín và hầm hở.',

    'Điểm đặc biệt của dự án là phần chuyển tiếp từ cầu xuống hầm được xây dựng bằng hai đảo nhân tạo, thể hiện quy mô kỹ thuật và mức độ đầu tư lớn hiếm có tại Việt Nam.',

    'Theo phương án được đề xuất, tuyến đường có điểm đầu tại đường Biển Đông 2, khu đô thị lấn biển Cần Giờ và điểm cuối tại giao cắt đường quy hoạch Mai Sao – Bến Đình với đường 30/4, phường Tam Thắng, TP. Vũng Tàu.',

    'Giải pháp hầm vượt biển giúp rút ngắn quãng đường kết nối giữa trung tâm TP.HCM và Vũng Tàu, đồng thời giảm ảnh hưởng đến luồng hàng hải và không tác động đến quy hoạch sân bay Gò Găng.',

    'Dự án không chỉ giải quyết bài toán hạ tầng giao thông sau sáp nhập TP.HCM mở rộng mà còn mang tính biểu tượng về năng lực làm chủ các công trình hạ tầng có hàm lượng khoa học và công nghệ cao.',

    'Tổng mức đầu tư dự kiến lên tới 104.410 tỷ đồng, do nhà đầu tư huy động 100%. Dự án dự kiến khởi công trong năm 2026 và hoàn thành, đưa vào vận hành năm 2029.',

    'Cùng với tuyến đường sắt Bến Thành – Cần Giờ, cầu Cần Giờ và nhiều dự án hạ tầng khác, khu vực Cần Giờ đang chuyển mình mạnh mẽ từ vùng phụ thuộc phà sang trung tâm đô thị – du lịch quy mô lớn, dự kiến đón khoảng 40 triệu lượt khách mỗi năm.'
  ],
},

  '5': {
  title: 'Cách tra cứu thông tin bất động sản theo quy định mới 2026',
  category: 'Định hướng',
  date: '10/02/2026',
  image: '/images/new5-1.jpg',
  body: [
    'Từ ngày 01/01/2026, việc tra cứu thông tin bất động sản chuyển mạnh sang dữ liệu số hóa, sử dụng mã định danh và hệ thống liên thông, giảm phụ thuộc vào sổ giấy truyền thống.',
    
    'Người mua có thể tra cứu thông tin pháp lý, quy hoạch, mục đích sử dụng đất và tình trạng thế chấp thông qua nhiều kênh trực tuyến và trực tiếp, giúp tăng tính minh bạch và đưa ra quyết định đầu tư chính xác hơn.',

    'Các phương thức tra cứu trực tuyến phổ biến bao gồm: sử dụng tài khoản định danh điện tử VNeID trên Cổng Dịch vụ công Quốc gia hoặc cổng thông tin của Bộ Tài nguyên & Môi trường để tra cứu dữ liệu đất đai.',

    'Ngoài ra, người dân có thể truy cập website hoặc ứng dụng quy hoạch (GIS) của tỉnh/thành phố, nhập số thửa và số tờ bản đồ để xem thông tin quy hoạch, mục đích sử dụng đất và tình trạng khu vực.',

    'Mã QR được tích hợp trên Sổ đỏ/Sổ hồng cho phép kiểm tra nhanh tính xác thực của giấy tờ và các thông tin pháp lý liên quan chỉ bằng thao tác quét mã.',

    'Thông tin về thuế đất và nghĩa vụ tài chính cũng có thể tra cứu trực tuyến thông qua Cổng thông tin của Tổng cục Thuế.',

    'Trong trường hợp cần xác minh sâu hơn, người mua có thể tra cứu trực tiếp tại Văn phòng đăng ký đất đai hoặc chi nhánh địa phương bằng cách nộp phiếu yêu cầu cung cấp dữ liệu đất đai.',

    'Văn phòng công chứng đóng vai trò quan trọng trong việc kiểm tra tình trạng thế chấp, ngăn chặn giao dịch và quy hoạch trước khi ký hợp đồng mua bán.',

    'Người dân cũng có thể liên hệ bộ phận địa chính tại Ủy ban nhân dân cấp xã/huyện để xin trích lục thông tin đất đai khi cần thiết.',

    'Lưu ý quan trọng từ năm 2026 là thông tin thế chấp hoặc ngăn chặn giao dịch thường không thể hiện trên sổ giấy, do đó bắt buộc phải kiểm tra qua hệ thống đăng ký giao dịch bảo đảm trực tuyến tại dktructuyen.moj.gov.vn.',

    'Để đảm bảo an toàn pháp lý, người mua nên yêu cầu bên bán cung cấp văn bản xác nhận tình trạng pháp lý mới nhất của bất động sản trước khi tiến hành giao dịch.'
  ],
},

  '6': {
  title: 'Top dự án căn hộ Vũng Tàu đáng đầu tư năm 2026',
  category: 'Dự án',
  date: '07/02/2026',
  image:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  body: [
    'Năm 2026, thị trường căn hộ Vũng Tàu chứng kiến sự bùng nổ nguồn cung từ các đại dự án nghỉ dưỡng cùng hạ tầng giao thông đồng bộ, đặc biệt là cao tốc Biên Hòa – Vũng Tàu. Đây được xem là giai đoạn vàng cho nhà đầu tư đón đầu chu kỳ tăng trưởng mới của bất động sản biển.',

    'Dưới đây là các dự án tiêu biểu đáng đầu tư dựa trên tiềm năng bàn giao, khai thác dòng tiền và khả năng tăng giá trong giai đoạn 2026 – 2027.',

    '1. Tổ hợp nghỉ dưỡng The Maris Vũng Tàu: Đây là dự án trọng điểm có quy mô lớn nhất tại khu vực Chí Linh – Cửa Lấp. Tháp Alaric dự kiến bàn giao vào Quý 1/2026, phù hợp cho nhà đầu tư muốn khai thác dòng tiền ngay. Hai tháp Polaris và Atlantic đang trong quá trình xây dựng và dự kiến hoàn thiện vào năm 2026 – 2027. Dự án tọa lạc trên trục đường 3/2, sở hữu bãi biển riêng và hệ tiện ích 5 sao chuẩn quốc tế.',

    '2. Dự án Sunshine Bay Retreat (khu vực Mũi Nghinh Phong): Đây là siêu dự án mang tính biểu tượng mới của thành phố khi sở hữu vị trí tại “trục di sản” ven biển. Dự án nổi bật với tầm nhìn panorama 360 độ hướng biển, thiết kế kiến trúc độc đáo cùng các trụ điêu khắc nghệ thuật. Phù hợp với phân khúc cao cấp, định hướng trở thành điểm đến nghỉ dưỡng thượng lưu.',

    '3. Vung Tau Centre Point: Dự án căn hộ sở hữu lâu dài hiếm hoi nằm ngay nút giao thương mại sầm uất Nguyễn An Ninh và đường 2/9. Vị trí trung tâm giúp dự án phù hợp cho cả nhu cầu ở thực lẫn cho thuê chuyên gia nhờ gần khu công nghiệp và cảng biển lớn. Pháp lý minh bạch và tiến độ thi công ổn định giúp dự án được đánh giá cao trong giai đoạn bàn giao 2025 – 2026.',

    '4. Blanca City (Sun Group Vũng Tàu): Dự án được kỳ vọng thay đổi diện mạo du lịch khu vực Bãi Sau với phong cách kiến trúc đặc trưng của Sun Group. Dòng căn hộ nghỉ dưỡng Beacon Blanca City được dự báo sẽ thiết lập mặt bằng giá mới nhờ uy tín chủ đầu tư và khả năng vận hành du lịch chuyên nghiệp.',

    'Lưu ý quan trọng cho nhà đầu tư năm 2026: Giá căn hộ tại Bà Rịa – Vũng Tàu đã ghi nhận mức tăng gần 50% so với cùng kỳ năm trước, dao động từ 38 đến 127 triệu đồng/m² tùy phân khúc. Nguồn cung trong năm 2026 sẽ tăng mạnh, do đó nhà đầu tư nên ưu tiên các dự án có pháp lý sở hữu lâu dài hoặc dự án gần biển có khả năng khai thác cho thuê cao. Thực tế cho thấy căn hộ view biển thường mang lại lợi nhuận cho thuê cao hơn từ 20% đến 30% so với căn hộ nội khu.',
  ],
},

};

export default function NewsDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const post = newsArticles[id as string];

  if (!post) {
    return (
      <div className="pt-32 text-center">
        <p>Không tìm thấy bài viết.</p>
        <Link href="/news">← Tất cả Tin tức</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="max-w-[900px] mx-auto px-6 md:px-10 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <button
            onClick={() => router.back()}
            className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900"
          >
            ← Quay lại
          </button>
        </motion.div>

        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
          {post.category} · {post.date}
        </p>

        <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-10">
          {post.title}
        </h1>

        <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-16">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        {post.gallery && (
  <div className="grid md:grid-cols-3 gap-4 mb-16">
    {post.gallery.map((img, i) => (
      <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>
    ))}
  </div>
)}


        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/insights"
            className="font-medium tracking-widest uppercase text-sm border-b-2 border-neutral-900 pb-2"
          >
            ← Tất cả Tin tức
          </Link>
        </div>
      </article>
    </div>
  );
}
