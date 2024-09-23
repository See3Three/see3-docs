<script setup>
const tableData = [
  {
    feature: 'Privacy-Preserving',
    see3: "Yes",
    aiDetection: "Yes",
    c2pa: "No",
    watermarking: "No"
  },
  {
    feature: 'Regulatory Compliant',
    see3: "Yes",
    aiDetection: 'Under Some Conditions',
    c2pa: 'Not When It Tracks Users',
    watermarking: "Doesn't Support Moderation"
  },
  {
    feature: 'Invisible to Users',
    see3: "Yes",
    aiDetection: 'Requires User Judgement',
    c2pa: 'Lacks Central Trust System',
    watermarking: 'A Little Better Than Detection Models'
  },
  {
    feature: 'Easy to Implement',
    see3: "Yes",
    aiDetection: "Yes",
    c2pa: 'Bad Tools',
    watermarking: 'So-So'
  },
  {
    feature: "Can't Be Faked",
    see3: "Yes",
    aiDetection: "No",
    c2pa: "Yes",
    watermarking: 'Harder to Fake'
  },
  {
    feature: 'Survives Harmless Edits',
    see3: 'Mostly',
    aiDetection: "Yes",
    c2pa: "No",
    watermarking: 'Mostly'
  },
  {
    feature: 'Supports Image Editors',
    see3: "Yes",
    aiDetection: "No",
    c2pa: "Yes",
    watermarking: "No"
  },
  {
    feature: 'Records Of Provenance Data',
    see3: "Yes",
    aiDetection: "No",
    c2pa: "Yes",
    watermarking: 'Possible'
  }
]


import { useData } from 'vitepress'
const { isDark } = useData()

const getCellClass = (value) => {
  if (value === "Yes") return isDark.value ? 'bg-green-800' : 'bg-green-100'
  if (value === "No") return isDark.value ? 'bg-red-800' : 'bg-red-100'
  return isDark.value ? 'bg-yellow-800' : 'bg-yellow-100'
}
</script>

# See3 Is A Solution To Malicious Deepfakes

See3 proves that your pictures are real when you take them, so that anyone viewing your pictures can be sure they aren't deepfakes. You can integrate See3 into any mobile application using our SDK, and it will work just like a normal camera app. 

It works by using the existing secure-hardware capabilities of your device to show that the image was taken on a real, non-cheating camera. It's discrete too: everything the viewer needs to confirm that an image is real is stored in the image's metadata.

You don't need to change how your software works, since See3 is practically invisible and doesn't leak identifiable information by default. See3 = Frustration Free.

## See3 Is Well-Supported

**See3 has mobile SDKs for Kotlin, Swift and React Native.**

It works smoothly on mobile devices. We also offer desktop and web SDKs for verifying See3 proofs. They support Rust, Python, Kotlin/Java and TypeScript (Node.js and Browser).

## Why See3?

### TL;DR

* It's the easiest tool to integrate.
* It's GDPR-complaint out-of-the-box, since it's privacy-preserving.
* You don't need to change your UI -- it can be integrated invisibly.
* It's lightweight, extensible and scalable.

### Comparison Table

<table class="table-auto w-full text-left border-collapse" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }">
  <thead>
    <tr>
      <th class="px-4 py-2 w-1/5" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }"></th>
      <th class="px-4 py-2 w-1/5" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }">See3</th>
      <th class="px-4 py-2 w-1/5" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }">AI Detection</th>
      <th class="px-4 py-2 w-1/5" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }">C2PA</th>
      <th class="px-4 py-2 w-1/5" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }">Watermarking</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in tableData" :key="row.feature">
      <td class="px-4 py-2" :class="{ 'border-gray-300': !isDark, 'border-gray-700': isDark }">{{ row.feature }}</td>
      <td :class="['px-4 py-2', getCellClass(row.see3), { 'border-gray-300': !isDark, 'border-gray-700': isDark }]">{{ row.see3 }}</td>
      <td :class="['px-4 py-2', getCellClass(row.aiDetection), { 'border-gray-300': !isDark, 'border-gray-700': isDark }]">{{ row.aiDetection }}</td>
      <td :class="['px-4 py-2', getCellClass(row.c2pa), { 'border-gray-300': !isDark, 'border-gray-700': isDark }]">{{ row.c2pa }}</td>
      <td :class="['px-4 py-2', getCellClass(row.watermarking), { 'border-gray-300': !isDark, 'border-gray-700': isDark }]">{{ row.watermarking }}</td>
    </tr>
  </tbody>
</table>

## Why Not Use C2PA?

We've explained why C2PA is a massive liability to anyone who wishes to integrate it through a series of blogs. The problem mostly comes down to its lack of privacy.

We summarize the key points in this introduction, [click here to skip to it.](./Motivation.md#see3-is-the-only-sound-approach)

The links to these blogs are as follows.

- [C2PA Is An American Surveillance Network, And The EU Will Ban It.](https://veracity-labs.medium.com/c2pa-is-an-american-surveillance-network-b523c5457cc3)

## What Does The Reference Implementation Include?

- **see3_rust**
- **see3_python**
- **see3_react_native**