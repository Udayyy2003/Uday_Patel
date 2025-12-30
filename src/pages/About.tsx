import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Blockchain", level: "Intermediate" },
    { name: "AI", level: "Intermediate" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm a Computer Science student passionate about creating innovative solutions through programming and technology.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.15)" }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="relative w-99% h-96 rounded-lg mb-8 overflow-hidden bg-black/30">
                  <img
                    // src="/uploads/uday2.jpeg"
                    src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAPDw8QDw8PDw8NDw8NDw0PFREWFhURFRUYHSggGBolGxUWITEhJSkrLi4uFyAzRDMsNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS8tLS0tLS0tLS0rLS8tKy0tLi0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAD0QAAICAQIDBQQHBgUFAAAAAAABAhEDBCESMVEFIkFhcRMygcEGI1KRobHhFTNCctHwFCRTYoI0Q5Kisv/EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAxEQACAgECBAMHBQEBAQEAAAAAAQIRAxIhBDFBURNhcQUigZGxwfAUIzKh0eEzQhX/2gAMAwEAAhEDEQA/APioFANAkgAAAAADUAAAAAGmAaABRlgAAaFjNSFbAfSLqAGgsAUbBugGoWwBI1sKHoSwFoawDSFgZpN1ALI1AKxkAptgbQWIWjbAAAw0DAAGaBgAAAACQAMAAAAAAAA0wAADQAAA0wDQAKMsY1GWBSKJyY2PJCpioEgsaRqRjYUFBYUbVBY6NowSQqRrZJxH0C2HCZpNsgTcbHUqAVxGUgMUTdQCtUzVyAxoAMo2xCjAYaAABhoGAAAAAAAAABoAYADGAAAaYAAA1GDGSFbAZRMbA2hbGkUihJMbQzRg0jUtgNeh7My5U5xUY406ebNOGHEnf2pNJvyVsbHjlLdLbv0FlJJ0+Z08H0WyZrWn1Gi1WRc8GHO45X491ZIxUtujNeO+TT9DdS6pr1ONqdPPHKWPJCWPJB1KE04yi+jTFaNIUNWwthFGRQNk3EpRlioxoLKmiLQ4mK0ahCDAIOAUFgFBYCND2IU2wBmgKAGGgAAAAAAAAAAaYBoAaZYzaMAZIywGURWwodREcgoZIyxmmEoopHkKyVGgbtFpYpe1ze4vdi7+s9a34fzOrBghp8TLtH6/8+pz5ckm9GPn9P8Apn7U7SlnauowhtjxxpRgvgedxfFvNKltFckdnD8OsK8+rMSbVNbNbprZp9TjUmnaOhq9j1PZGf8AaP8AldTkS1EY1o9TNN5JNf8AYySXvR8Ve6338D0uHyeMtEv5dPM5M0fD95cupxdZo8mGc8WWLhkg+GUX4dGn4pqnZSmtmJae6KkgSCyxRKUJZGSMa2NTKnEk4j2HCY47BZXROh7ChGhlIQJA2FG0ZYEmiiAQYQoyAw0DAAw0AAAAAQAaAGmAADGFA1GAPFCyY0ViiTZNIqkKJoxoB8JukLHFDRRjLMULaT2V7vovH8B4R1SSfIxulaJ9qalyfDySrZWly2XwE9o8S2/DWyQ3C4UlqZgR5Z2gAEoSaaabTTTTTpprk0zYycXaMaTVM9Z9INR/i9Ph1bX1sFHFlklw8afFV9WpJr/ke/k05MUcsevM8nHqhklil8Dz8UQiirLuErQlkXEWjUyCgKo7jNjlE1x2MTKJRIuJSxOIriMmQonRo6G0gQINFE9gEaHTExGhkwFGAAAw0DAAAAYwDQADANMsY1GWBqRjYFYk5EolIoRliRRIWxMKAaNQMnFDpCtk47W65IeNRuT6Gc9jDJ2eLOTlJtnoRVKhGGgADBgdbsfP9VqcL5ShxpecWnf3qJ7Hs+erFkxPorR5/FxrJCa9GVwiUiibZdGJZE2yLiLRthGIJA2KcAaBMzyiQa3LJilExoEyPCLpGsi0Y0FldEdI9kRGh0wJNFEAjQyEKMBgACNAAA0wDQADBoaJjAcQDY7gwHQhZFF4omyaQ6FCgoBo1IwnEdGMWr2SXW/wolxDpJdxsKu2YjyTvA0AAB0AGrs2VT9YTi/jBnd7Pb8X4P6HNxa/b+K+pvUD00jz2yyOMdREchuGxtbAmRjAxI1sU47mNbmpmaaItFUQYgwqA2yEkK0aitok0UshJE2jUyJGRWLARjoRNjoDAADQAwDQAYUAoBjRMfIDWYgHiLIdFCdluNF4IRk6HoUVGUBKMTUjLJwW465ivkGuW0PVr8P0J8Uto/Efh3u0c88c9AAADUAWDA19mfvI+kv/AJZ2+z3+8vRnNxf/AJs7GLEe1GJ5Mpl6xj0TcgliMcQUyEsRjQymU5YUxGtykXaMuaO5GaLRZXwiUPYqCgK2KMiDRNocrkiTQyK2RkisWBMdAI0MhCjAYaBpgGgMZCsDUYAyW4rYBW5oIeJORJIquYhdAvEmydDmDigSMbJxiOkK2Txw3NjHcWT2Ja7H3L6NP5fMXio/t323N4eX7ldzkyR42SOlnpwdoEIMIAAAN3Y2JyyryUm/ur5noezoN5LOLjp6cdHpIYj3aPDcyTxhRmomsRtC6ivUYL25GSiPCdGTLhZJxLxmijLiElEpGZTDGIolHIqmhGOitoShylkihCSEaGRXJEZIeJEi0VTAVoYQgwCjAaYBoDGiKwHQrAdCMBXzNXIB4iyJosiZbFlYiMsgyiYrLlEokTscVRtUZZPHGzUrMbonqYXCf8rf3bmZot45LyMxSqa9TjVZ5O040envFkaOVqi1hQAMaMW3SMbo9J2BonFq178G68VT/VH0nCcM8UFfU8Hj86ktujO89PsddHleJuNaYKB5Cf8AhaChPFshm0/MGhoZDLk01KxXEusm5iz4yckdEJGZQJpFtRnnjJuJZSKMsaROS2KRe5lRz9SoSQNGoqkiUkOmQaJNUOmIkyiYiRQBTQNADQGMhWAyFYFEIAdTAN6g3sTRZEy1FUIWRQ6FZdF0VRNkuHc2rZnJGnHjotGD7EZSM+u1SUXFLmqbbOfismmDj3L4MNyTZykzxoS0s9OSsllXTxpr0ZXNBc1+ITHKtmRjGyWPE5+g8pqJdgS4lSut+rl5HZw6islRV/chlb022el7AWWOR5MiVOHDGLe8U3fhy5I93h8WaUnLLt2PE4145QUIPqenw5IyXJr8UdEsTXI8aUZJ0jVDTXyjL/wl/QRqjPDyvdRY44rdbGEZNxW+wZNP5AZHIZdRplQFoZNzja7DuJJHo4Z7GHNjpE2jpjK2ZpxEaKpmTUxI5EXxsxuJzUdFiaA0pmRkOiuTIydlIiJSKIROh7AUYAADQGMhWBSKEbAZCsAXMxjQ6Qtk4IpFbistii1CWXY4lIonJnU0umglF5E3xZPZtO0ounT+/Y9DFhgknNc3XocmXJJ2oPkrOp7KMeSS9EegoxjyRw6pPmc/Uyu+qdP5HPN8zrxrkzg67meDxx6nDmU8xo7EyyXKPp82dO0lC+33ZHdXXcTi/gUlCVUuQqa6mns5Pitem9+J08DBqWpEuIkmqZ6TRyv08fM+hxs8bKqO9o8m93XTyHktjgqmdvR6lOlfelafLkvE5ZwZ14si+LMPaXaTnl4YRi4YVSS29pma8fGoppv4Bii91+fn+jZnGSV/L8/NizsrW8S4MrTklfEq5dHQ2SFbo8biOFd6sS+Bp1mJV/TxJJnNik7o4mswjHo4pnJ1UCckd2NmLNDkTaOmMjFqIkZo6IMxTOZnQiDRlDIqkiUlY6KWjmktyqYhJDoBLHETHAAAAGPEVgWiiUgoahbAVLcZ8iUSsSbLIoqkIzRGOxZLYm2atCotyi21PgvHVLvf2jo4fRKTg3UqtEsupRUktr3JYNSnF25bfvYPeUWv40/Hf7n5G48ylHm/NdV5r4/J+QTxNS2+D7+X5zOhl1yUIze+zuvJb0ehLiIxxqbOOOBubijPlyKUrXKUF+D/AFEbUpWuqKxi4xp9Gc/Vaa+RxZ8Gs6ceSjFLTyXgebLhZo6llQpR7qfRtfMnLE/DTXRsdTWp+dCvb++Q+pqCti0nLY6GiVKz1OGSUbOTM9zs6WVI9PG9jz8itnSx6ii1o5HjJLXVxO/4af8ALzf5IV0asbr1LOzskVBZMsoQU/8AUlXE5O33VvJb1XiQ1XFN/llnCptR6fYu7b+lCwQ9jp7eSWybSTt9IraK8jmzyWKr3k+SL4IPJy2j1b+xt7CzyyaeEcm+SKSb27y6lnFpJv4+p4PG44wzuUOTLdXhAnjmcPV4xWejikc/Iq9CbOuLObne5zye52QWxlnEk0WTKZImyiKGQZRFcic2OkQIsogJFBCDgAAAAhkKxl4sk0MfoICBbgyxFUKWRKxEZojyLLkSfMh2hi+sko7ONKPhtSJ8Zh1ZWo7NcvkU4fJWNOXXmQxajvL2m0lyyV3vSf2kRx8Q9aWZVLv9n3XQpPEtNw5dv87GibqEofZlcfHuyi6o7pe7ilj7cvRo50rmpd/qinR590vgT4XPbSHzY9mboy/A70zmaJZIo2UUzIs58o+8jha3aOlPkZ5q+HzZw5U24JdTog6s6GkVvyR6uBHHk5HYw4j0oxPPlMudRVtj8tye8tjmPPcMkm/fnHGn+b+44XluEn3dHcsdSiuysMurr/MS5RuGlg+W23tK/LzI5M6S8aXJbRXfzNhhb/Zj13k/sPsjs2eR+2yXcvdTq2n40zeD4acn42XmzOK4mEF4cOSPb6bF7FRfjFK66Pmj0Je9seJnhri0+bN2rW1re1z6o50eZj57nn+0I/mEj1MDOfqFaEfI6oPc5WaBzyR3QkZZkmWRnkRZUokiTRRMpmQlzKIixJDxAiVQiY4AAAAIZCsZVE2Mp0JjQ0UYTRVbIUsgikRWaE6XoVuo2Sq2Z8eqvhWSLlSpSj76XTzOTDxbdLKr7Nc/+nVkwVbg68uh0Y6eGVbVLbZpcM0eu8GLiIb7/U4PFnil2+hkyYnDihLdpXB/ajzr4f1OJ45Y04S3aWz7rn/R0qcZtSXx9TDCVNPozzcM3FpnVkjaZvx5ufmezDLZwygXLMW8TYTQVPfj8kn+ZB7uXp/pRbUZ4reHpJ/E5tNzj6P7Fr91/A6eHhi0unM9WGmLSOGdyVm6GqXI6VkXI5niZXq8rkqQmVtqkPiik7ZzdRFfVYrpW5zfRO/kednS9zFddX+eh24797J8F+eop5Flksku5jx8Kimk4KK5JK9/uIylHNJZX7sY8u1L87Dxi8UXBbyfPudifaOWCUpyhplVr2eNZM0l1vkvvPRllyJapVBelv8Aw89YIS92Kc/V0ka9L2kox48mTIov3fbxhFz80lvXmXxZoqGqT+aSObLwzlLTBK/K9vU9D2PrY5sT4WnwOtnfdfL5oWTi3qi7TPJ4vBLFk3VWZ9dAUphkcjUuthWzvx7nNzIgzriYcpGR0xKJIk0VTM8iLKoqkiMkOmVnO+ZZcgFGERKAaAAAIZCsZRMRoEPGQkkSK2ISG6GF2ItAnIsy+6/Shsv8GjIfyRo0C2SrfdqTvhq+p18ItMFHqSzu5Nl7wqD77yNPlKCkow811LuGh+82/ToSU3Ne7Xo+pTq73jJ3OPehL/UiyOa6cZPdbp90Vx87XJ8/JnIPn1sz02ThN/odUM1bEXjNXsprfhbj1jU0vjHkd1Tju1t8/oc+qL2v7fUnp93kX+z+/wAxsb9+cfIya92L8yvD4vpH85UTxve+y+rHlyrzJxy730/Essm9k3Haitapkv1DH8NGrT6y2k292dOLiVJ0yM8NK0ZpZlKbk48bbajFul5X5HHkyqWTVp1N7JF4wahV0adLODdqMs+a9ko92HkrtL1K4pY29VPJPyWy9OnxJZFJKr0R9efr/htj/iGpXFt77bcW/wDvlz9Edi/USi7Xw6/N/RHO/ATVP89F9ynV9k5JycpZIKLd9/JcoWle3SyWXgss8jbarzfIeHF44xpRd+S5nofo3hhinGOOSkpKUZNO7dXb+47Y4YY8aUTyePnLLBykqrc62tMODEcLV8ycj0sXIwZmSkdUDFmIyOiJnsmVM02c8iyK5yJykMkVHO2WSAmOIiUAAA0AGQrGPEVgNHmLIaKpk2SspewpdiLQEkWZpd34r8zcskopvujMatl2nyRaUVmyRbvuxhxJ7l8OTHJKMcjXkkJkjNO3BetmqUp41ayuS8U4e0S8muaOuTnjW07Xpfzo50o5HvGn60VZcsZxSSXjw8LuPLvRXin40yUskMsaS9K5ea9etFYwlCVt+t/n9nLx475ur6czxsXDubuex3zy6VUTs9lxx4u895PrTaXRHucHhxYFq5t9zzOKnky7dDsrXRriaSSXNpcj0vEilqex53gyukc/Hm9vNyx4cUY8nlyRTcl0UfE4cc1nk5Y4pLlqfX0R1yh4ENM5Nvsvuw1Gk0+8XJ4ZOk/q0ove9ldI2eDDyvS2EM2bmlqXqUy7Cv8Ad5YOLqnO0315Im/Z7f8AGWw645L+UXZCf0eml+8x/wDt/Qm/Zsu6GXtCLf8AFj/YDVfXQTfWLr4Oxv8A85qnqQfr0791kn2RjxyrJkmnK0nUYxb6KW9WauAxY370nv6L4B+snkjcIrb85Fspxxp+ynKKh72KUITUfVJJtee5Z1ii/DdJc1X4/iTSeR/uK75O39eXwKZ4cGdOWOXs5rnwt8PrwveiejDxEdeOVPy/wfXmwvTNal58zm6jA4vgy8nvDIra/U8/LjcX4ebl0kdkMlrVj+KO59Aox9pml4wxpR/5Spv1pfizfZzuUkuS/wC7nne221jgu73+B6XW5Nz1WeLhjscjU77iSO/Hsc3K7Is64mLKyMjoiZmyFliiZKRRFUiEmUSIHO+ZZAYMIkigAYBoAMmZQzbMAaLFaAomI0STKpky7Ey0Cch6l934oXin+38RsH8x6eacWuNYt9+fFNDYMkJY3FS8Pv3ZuSMlK9Or7GrTvTxSlabvfiuLS68n+FHThlwkY6k7fndkcizydV8jbDRwypySyR2ulXFKuTp/mztXDwyrWk19/wA6X9DleaWP3XT/AD85HOnoJp0nDbwcoRl6VfM4ZcLlUtmv6T+R1LPCt7+TozzlKMu8pKvBqmRnklCXv7FVFSXu7k8upeRcMVVK2rvZBl4iXEQcIKv8CGJYpapG3svLJJJxfD1XgehwUpRgo1scnExTbd7nQzYpTjw2pLwTe6O2cdca5nLCShK+RzcWXJhbhJvhb63KEvB0cEJ5MEtMt4/2jslCGWOpc/6Zo/aUk+Ge3rykup0fq6emWxH9MmriVZdSknGUlwS3g1Jdxk8meMVU5bPk75FI4ndxW/XzKYa9OLxZZcUeSkk3Xmc0eNg08WWVruij4Zp+JBUyl5Xyv6yHuT+3H7L+RB5JXov31yfddmVUI1qr3XzXZ9ylZ3GXHDuv+KPh57dGc3juMvFxqn1Rbw1KOiW/Zj1GZtVdxfein/C+hvEZpSjV3F7ry8jMeNJ9mtmek+gcP+pn5Yo/HvP5I6fZa3nL0PH9uv8A84+v2O7qHdnrHk49jlauVInJ7HbiVs5WbIc8pHdGJRkZNlImaZKRZFM2RkURRM55lYkTnZdAKbQiY4GgBpgGgAGAajGhlIiSGiqZNotxsvBkpInm91hxCvGzcW00ZTzDuLtNJJ8T5LfrbOzhpRjLxJ9CGZNrTHqWS1OTI64mr502kl5+RZ8Vn4iemLqySw48Ubas14p44rhjjWWfi5cm+r8j0IPFBaIQ1y8/qzlkpyeqUtK8g12TjVZc0bXu48auMH0bE4qUckazZEn2X+m4IuDvHD4vqc3Dk4XdXXm0mePiyvFPVVnoThrjXIMuonLm36LZL0RmTisuR7y+WwQwwjyRFSfUWOaceTHcIvoWz1DkkpJOtlL+JLpZeXFynHTNJ1yfUisCjK4uvLoShnUlwZLpe7Nbyh/VeRTHxMZx0ZuXR9V/ossLi9WP5dxZMUo8mpRfjF2n8PAyWPLiVweqL7cgU4T2kqZS5HPPJq5qi0Y1yYWGt7b8g0oG7Nc7dmaa2CwUlpoGndntfodj4dPOX28sn8IxS/Oz2fZsaxN93/w+b9sS1cRFdl9TbqMlI9Bs5IRs42tk5Wc89zvxJIwPYhyOpFEpWTbKpFUxJDIzyISsqiqRCbKxEc7LIQowCDAAAMYAAAABqMGMmY0BZMk0Tgy0GSaLeaKS3i0KnTszHlHeA1mEozatLa+ZSGWUFUdhXBSdsimKnLuFR7DjG/FL1GjjT/8ApL1McmujYmJJJPZ2MrAWjRBRozLADQBGptcjGk+YGubfMXSugGDAADSfJbvwS5tmrsY66n0XQ6f2GHHi8YxXF/M95fi2fU4Mfh41HsfGZ8njZpT7v+jJqcg7ZXHE5WpyEJSO7HEwZHZztnVFUVNiNj0VTkTlIdIolIjKRRIqOeRWIMiyyEIaAowAAGmAAAAAaAGmMZSLEkhxLwe5KRbZeyVFM+Z5+aNSOzG7iIkOAAAABoAAABgAaAGAYaKwALCwGbYHZ+i/ZOLV5J48mSeNxhxx4FG5U0nu/VHXweCOeTjJ0eZ7T4zJwuNThFPenZ6rS/RfTaeSyJ5Mko7x9o41F9aSW57GHgMWKWpbvzPAy+1+Izx0NKKfYlqs27OxsTHDY5GrzkZSO7FjOZmynPKR2wiZ5SJNlEiqTEbHSKpsnJjoqbINlCBGT3KxQiLZVAYaApoAAGgAGAAAaAGoANsWhorCROSJqRdSJNA1Ys4a0NGWllctjjnFxdM6YyTVoViGhZtgFhYBYAFgAAAUADABUAAwAYAb+w9W8OfFNfa4X/LJcPzv4HTweTw80X8PmcnHYVm4eUfK/lue3z66/E+n1HykMFHI1OpuyUpndjx0c7NlOeUjrjAyyZJsukUuRNseipyJtj0VzkTlIdIhZJyHURMhJ2yyQhGMgFNAw0AADUAAAAAAYBqADTBjJi0AykY4jTKQmTlEjN7kMruRbGqiRJDgADQAM0AAANMAAAAADQBgAIAsy63Cr2PQrV7eqT/A+kWW1Z4LxbmfJnsm52UUDNPKSciyiUyyE3IookOInqGojxC6jaINkZSKKIhGx0hMmyiAU0DAP//Z"
                    alt="Profile"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="Who am I?" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm <motion.span
                    className="text-brand-purple font-semibold"
                    whileHover={{ color: "#8B5CF6" }}
                  >Uday Patel</motion.span>, a Computer Science student specializing in  AI & Machine Learning at K N University, Ahmedabad.
                </p>
                <p>
                  My journey in programming began with an interest in solving complex problems. This led me to explore various programming languages and technologies, with a focus on web development and artificial intelligence.
                </p>
                <p>
                  I'm passionate about building web applications and software that is not only functional but also intuitive and user-friendly. I believe in continuous learning and staying updated with the latest technologies.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, solving algorithmic problems, contributing to open-source projects and playing video games.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                These are the technologies and programming languages I've worked with and continue to develop expertise in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                    y: -5
                  }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <motion.h3
                    className="font-semibold mb-2"
                    whileHover={{ color: "#9b87f5" }}
                  >{skill.name}</motion.h3>
                  <span className={`text-xs py-1 px-3 rounded-full ${skill.level === 'Advanced' ? 'bg-brand-purple/20 text-brand-purple' :
                      skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                    }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={User} title="Personal Interests">
                <ul className="space-y-2 text-muted-foreground">
                  {["Exploring new technologies", "Solving algorithmic challenges",
                    "Open-source contributions", "Web development projects"].map((interest, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <Heart className="h-4 w-4 text-brand-purple mr-2" />
                        {interest}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>

              <InfoCard icon={Code} title="Coding Philosophy">
                <ul className="space-y-2 text-muted-foreground">
                  {["Clean and maintainable code", "Focus on user experience",
                    "Continuous learning and improvement", "Building with scalability in mind"].map((philosophy, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                        {philosophy}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>

              <InfoCard icon={GraduationCap} title="Education Journey">
                <ul className="space-y-2 text-muted-foreground">
                  {["Computer Science fundamentals",
                  "Self-taught web development",
                    "Machine learning and AI", "Data structures and algorithms", ].map((journey, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                        {journey}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>

              <InfoCard icon={BookOpen} title="Future Goals">
                <ul className="space-y-2 text-muted-foreground">
                  {["Mastering advanced AI techniques", "Building impactful web applications",
                    "Contributing to open-source projects"].map((goal, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                        {goal}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
