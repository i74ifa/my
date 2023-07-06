<script setup>
import { onMounted, reactive, ref } from "vue";
import CardProject from "../components/CardProject.vue";
import Modal from "../components/Modal.vue";
import { useRoute } from "vue-router";
const data = {
  ar: [
    {
      title: "متجر الكتاب",
      description: "متجر لمعرض الكتاب في حضرموت",
      technologies: ["laravel", "Vue.js", "Tailwind CSS", "MySQL"],
      img: "bookstore/7.jpg",
      images: [],
      content: `<div class="mb-4"><img src="/projects/bookstore/7.jpg" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/1.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/2.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/3.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/4.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/5.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/6.png" alt="" /></div><p>لم يكتمل بعد...</p><p>التقنيات المستخدمة</p><ul><li>PHP - Laravel</li><li>Vue.js</li><li>Tailwind Css</li><li>MySQL</li></ul>`,
    },
    {
      title: "منصة عمل متاجر الكترونية",
      description: "لتسهيل عمل متجر الكتروني بضغطة زر وبدون برمجة",
      img: "bassait/bassait-06.webp",
      images: [
        {
          path: "bassait/bassait-03.webp",
          alt: "صفحة انشاء متجر جديد يطلب منك اسمك ورقم الهاتف",
        },
        {
          path: "bassait/bassait-04.webp",
          alt: "الصفحة بعد اكمال التحقق من البريد الالكتروني سوف يتم توجيهك الى صفحة البدء لاول مره والتي فيها انشاء الاعدادات الاولية مثل معلومات تسجيل الدخول للادمن مع تحديد عملة المتجر الافتراضية",
        },
        {
          path: "bassait/bassait-06.webp",
          alt: "لوحة التحكم",
        },
        {
          path: "bassait/bassait-15.webp",
          alt: "هنا صفحة المنتجات واضافة تفاصيل للمنتج",
        },
        {
          path: "bassait/bassait-07.webp",
          alt: "صفحة تخصيص تصميم المتجر مثل المكونات (components) والوان المتجر والخطوطي وغيرها...",
        },
        {
          path: "bassait/bassait-12.webp",
          alt: "صفحة العملاء",
        },
        {
          path: "bassait/bassait-13.webp",
          alt: "صفحة لاضافة صفحة جديدة للمتجر مثل صفحة الشروط وتدوينات وشروحات الخ...",
        },
        {
          path: "bassait/bassait-14.webp",
          alt: "صفحة التقارير والمراجعات",
        },
        {
          path: "bassait/bassait-01.webp",
          alt: "صفحة اعدادات المتجر مثل المعلومات الاساسية, خيارات المنتجات, الضريبة الخ...",
        },
      ],
      technologies: ["laravel", "Vue.js", "React.js", "Tailwind CSS", "MySQL"],
      content: `<div></div>`,
    },
  ],
  en: [
    {
      title: "Bookstore",
      description: "Bookstore for the Hadramout Book Fair",
      technologies: ["laravel", "Vue.js", "Tailwind CSS", "MySQL"],
      img: "bookstore/7.jpg",
      images: [],
      content: `<div class="mb-4"><img src="/projects/bookstore/7.jpg" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/1.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/2.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/3.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/4.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/5.png" alt="" /></div><div class="mb-4"><img src="/projects/bookstore/6.png" alt="" /></div><p>Not yet completed...</p><p>Used Technologies</p><ul><li>PHP - Laravel</li><li>Vue.js</li><li>Tailwind CSS</li><li>MySQL</li></ul>`,
    },
    {
      title: "E-commerce Store Platform",
      description:
        "To facilitate the creation of an online store with a click of a button and without programming",
      img: "bassait/bassait-06.webp",
      images: [
        {
          path: "bassait/bassait-03.webp",
          alt: "New store creation page asking for your name and phone number",
        },
        {
          path: "bassait/bassait-04.webp",
          alt: "The page after completing email verification will redirect you to the initial start page where you can set up the initial settings such as admin login information and default store currency",
        },
        {
          path: "bassait/bassait-06.webp",
          alt: "Control panel",
        },
        {
          path: "bassait/bassait-15.webp",
          alt: "Here is the products page and adding details to the product",
        },
        {
          path: "bassait/bassait-07.webp",
          alt: "Customizing the store design page, such as components, store colors, fonts, etc...",
        },
        {
          path: "bassait/bassait-12.webp",
          alt: "Customers page",
        },
        {
          path: "bassait/bassait-13.webp",
          alt: "Page for adding a new page to the store, such as terms page, blog posts, tutorials, etc...",
        },
        {
          path: "bassait/bassait-14.webp",
          alt: "Reports and reviews page",
        },
        {
          path: "bassait/bassait-01.webp",
          alt: "Store settings page, such as basic information, product options, tax, etc...",
        },
      ],
      technologies: ["laravel", "Vue.js", "React.js", "Tailwind CSS", "MySQL"],
      content: `<div></div>`,
    },
  ],
};

const modalKey = ref(0);
const isOpenModal = ref(false);
const content = ref("");
const project = ref("");
let projects = ref([]);

const openModal = (key) => {
  const projectRef = projects.value[key];
  console.log(projects.value[key]);
  if (!projectRef) {
    return;
  }
  content.value = projectRef.content;
  console.log(projectRef);
  project.value = projectRef;
  console.log(project.value);
  modalKey.value++;
  isOpenModal.value = true;
};

onMounted(() => {
  const lang = useRoute().params.lang || window.locale || "en";
  projects.value = lang == "en" ? data.en : data.ar;
});
</script>

<template>
  <div class="px-5 lg:px-0">
    <Modal
      v-model="isOpenModal"
      :key="modalKey"
      :content="content"
      :project="project"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 max-w-screen-lg gap-5 mb-4">
      <card-project
        :data="project"
        v-for="(project, key) in projects"
        :key="project.title"
        :cardKey="key"
        @openModal="openModal"
      />
    </div>
  </div>
</template>
