import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

const assets = {
  "images/hero-main.png":
    "https://www.figma.com/api/mcp/asset/adf34b9f-5993-4eaf-84a3-80c5016f406b.png",
  "images/hero-vet.png":
    "https://www.figma.com/api/mcp/asset/7b89acd4-f799-4f53-9ce7-45843272a3aa.png",
  "images/hero-cat.png":
    "https://www.figma.com/api/mcp/asset/9c6a0199-77c3-4bf3-8676-189aa64eef85.png",
  "images/kitten.png":
    "https://www.figma.com/api/mcp/asset/45cb5895-e03d-4227-9403-ccd3a18ec8a2.png",
  "images/brown-dog.png":
    "https://www.figma.com/api/mcp/asset/b94a65bb-6f28-4c88-889d-8d1ec354d994.png",
  "images/rabbit.png":
    "https://www.figma.com/api/mcp/asset/b4d64201-fd04-494e-a00d-01bd0dd9949f.png",
  "images/basenji.png":
    "https://www.figma.com/api/mcp/asset/8bf40374-c399-483a-8c50-b0b2f176de7b.png",
  "images/husky.png":
    "https://www.figma.com/api/mcp/asset/84071b68-c111-4f47-8741-08755cb20f29.png",
  "images/cockatoo.png":
    "https://www.figma.com/api/mcp/asset/270f9d67-b2d6-43d4-9aff-72c95593256d.png",
  "images/red-cat.png":
    "https://www.figma.com/api/mcp/asset/e11dded2-a724-4954-a68a-d2ca6f6f1551.png",
  "images/doctor-john.png":
    "https://www.figma.com/api/mcp/asset/a923f203-7427-45c3-b29d-2033a4f633a0.png",
  "images/doctor-lilly.png":
    "https://www.figma.com/api/mcp/asset/7bfaf6c9-ee77-44aa-8b67-cccca1b89df7.png",
  "images/doctor-ilsa.png":
    "https://www.figma.com/api/mcp/asset/5f9a31e5-97d7-4487-8ebf-543a0e495892.png",
  "images/avatar-milla.png":
    "https://www.figma.com/api/mcp/asset/bb80ef8e-1ba9-47a9-a37c-e783dd017e05.png",
  "images/avatar-milly.png":
    "https://www.figma.com/api/mcp/asset/45b3aa9f-cf91-41c0-b813-387c61bda951.png",
  "images/avatar-andy.png":
    "https://www.figma.com/api/mcp/asset/fdf6f508-32f8-4d13-b69e-ac5363abb11f.png",
  "images/avatar-sahara.png":
    "https://www.figma.com/api/mcp/asset/abb02565-0f6f-4d37-8fe3-850000e16000.png",
  "images/product-dish.png":
    "https://www.figma.com/api/mcp/asset/b78bde81-88fa-4b16-a1c2-6f7de26ae1b2.png",
  "images/product-ball.png":
    "https://www.figma.com/api/mcp/asset/d9f1fc93-fdbc-4643-9649-bc080d3e0cca.png",
  "images/product-shovel.png":
    "https://www.figma.com/api/mcp/asset/6c6199d7-ce2a-4ba4-974f-dc71725a90e9.png",
  "images/gallery-1.png":
    "https://www.figma.com/api/mcp/asset/2b666f21-d370-4845-bbe6-ddcafc8fee70.png",
  "images/gallery-2.png":
    "https://www.figma.com/api/mcp/asset/01f56906-349a-4951-b6c7-76de84d4054e.png",
  "images/gallery-3.png":
    "https://www.figma.com/api/mcp/asset/8dc9259c-a2ef-4409-8dc8-c7b5778ca0bf.png",
  "images/gallery-4.png":
    "https://www.figma.com/api/mcp/asset/7d09744b-078c-40ad-805a-bf875fb7a118.png",
  "images/gallery-5.png":
    "https://www.figma.com/api/mcp/asset/8181c3b6-9e9e-439b-b9d4-ec307a5626d3.png",
  "images/gallery-6.png":
    "https://www.figma.com/api/mcp/asset/cf6ccd3a-954d-42cb-9092-f833ace44db7.png",
  "images/news-1.png":
    "https://www.figma.com/api/mcp/asset/b664ddf8-84f3-4f78-9900-0141b91fe310.png",
  "images/news-2.png":
    "https://www.figma.com/api/mcp/asset/c82d2d33-64c6-4921-8c7f-ce43beace96b.png",
  "images/cta-cats.png":
    "https://www.figma.com/api/mcp/asset/0f8baecd-7733-4205-9c08-714e8cf574d4.png",
  "images/footer-pets.png":
    "https://www.figma.com/api/mcp/asset/de2b46f9-6159-4cab-9ecf-82c39e79028d.png",
  "icons/logo-paw.svg":
    "https://www.figma.com/api/mcp/asset/3ee07e75-3084-405d-ad13-b2fb362a29d5.svg",
  "icons/logo-arabian.svg":
    "https://www.figma.com/api/mcp/asset/60fe0b22-173c-498a-a408-2a5455f3d872.svg",
  "icons/logo-paws.svg":
    "https://www.figma.com/api/mcp/asset/d13557ab-655b-4ec9-b86d-5ad0c7f42419.svg",
  "icons/logo-paw-footer.svg":
    "https://www.figma.com/api/mcp/asset/d05f5b94-cb2e-4137-a8e9-58b57f91e5de.svg",
  "icons/logo-arabian-footer.svg":
    "https://www.figma.com/api/mcp/asset/f77b57aa-8d5f-468b-85ba-2bd1b5129f38.svg",
  "icons/logo-paws-footer.svg":
    "https://www.figma.com/api/mcp/asset/7213510f-7879-44ee-b18e-6f11f1c776bc.svg",
  "icons/medical.svg":
    "https://www.figma.com/api/mcp/asset/4232bebd-a9aa-4763-8b2b-c9844726750e.svg",
  "icons/medical-white.svg":
    "https://www.figma.com/api/mcp/asset/a7bc4ce7-36cb-4b8b-8582-6a796498941e.svg",
  "icons/medical-hero.svg":
    "https://www.figma.com/api/mcp/asset/f3407751-448e-4d43-a79b-6a133d92bdbb.svg",
  "icons/medical-footer.svg":
    "https://www.figma.com/api/mcp/asset/c0df78cd-a0fe-4971-a16f-f46937a558a7.svg",
  "icons/medical-footer-dark.svg":
    "https://www.figma.com/api/mcp/asset/a2225c02-e5bc-4e0a-9a28-9a655e58c534.svg",
  "icons/arrow-circle.svg":
    "https://www.figma.com/api/mcp/asset/3dcb1409-faa2-4a8d-be3c-6571c2bde1d8.svg",
  "icons/arrow-out.svg":
    "https://www.figma.com/api/mcp/asset/06c2e87d-f187-4864-b98e-6e5f6a0eb3b7.svg",
  "icons/arrow-out-2.svg":
    "https://www.figma.com/api/mcp/asset/0afac3ff-9a19-4ceb-a593-86f66bb26b65.svg",
  "icons/quote.svg":
    "https://www.figma.com/api/mcp/asset/130ed766-88cd-4c7a-99c5-37c6a26258fa.svg",
  "icons/nav-dot.svg":
    "https://www.figma.com/api/mcp/asset/58f02cd3-b548-42de-825a-5f8af81c4007.svg",
  "icons/arrow-forward.svg":
    "https://www.figma.com/api/mcp/asset/d8c13544-2c5b-437e-901a-0111945d105a.svg",
  "icons/arrow-forward-1.svg":
    "https://www.figma.com/api/mcp/asset/858500ce-9b71-4757-84f1-871731dfd3f0.svg",
  "icons/arrow-forward-2.svg":
    "https://www.figma.com/api/mcp/asset/3a70904a-a91b-428b-8955-c45e4964737b.svg",
  "icons/social-instagram.svg":
    "https://www.figma.com/api/mcp/asset/b6076d3b-98cb-4f60-b7ee-4eeccb98fa69.svg",
  "icons/social-facebook.svg":
    "https://www.figma.com/api/mcp/asset/e83469b7-444c-4226-a118-dc7a969f9fd1.svg",
  "icons/social-youtube.svg":
    "https://www.figma.com/api/mcp/asset/f57e23b8-ae07-44b3-8da1-27b03ed8eb0c.svg",
  "icons/social-tiktok.svg":
    "https://www.figma.com/api/mcp/asset/9067ec79-e150-49ca-9ba6-3eb3e758c4bd.svg",
  "icons/social-x.svg":
    "https://www.figma.com/api/mcp/asset/0d2b3138-e709-4d13-a2aa-23e0961bca22.svg",
  "icons/news-arrow.svg":
    "https://www.figma.com/api/mcp/asset/91c25774-e138-4966-950d-76c74b92ad89.svg",
  "icons/news-arrow-2.svg":
    "https://www.figma.com/api/mcp/asset/3967d5a9-ecf6-40e5-ae28-9d81f2b92d1a.svg",
  "icons/news-arrow-3.svg":
    "https://www.figma.com/api/mcp/asset/d0fc853e-9ca0-41ed-b160-dbcde16b6d3e.svg",
  "icons/paw-mark.svg":
    "https://www.figma.com/api/mcp/asset/60b3813c-35e0-46c4-8fb8-465f836af9a1.svg",
  "icons/faq-arrow.svg":
    "https://www.figma.com/api/mcp/asset/8cf19c69-8d0a-4729-b8d1-607cf709ce5c.svg",
  "icons/flag-ae.svg":
    "https://www.figma.com/api/mcp/asset/af6931aa-9b98-4e39-819b-bebfab3268a5.svg",
  "images/services-hero.png":
    "https://www.figma.com/api/mcp/asset/a83e942c-311b-4b16-a7ec-5f0a6f0f2390.png",
  "images/services-hero-blend.png":
    "https://www.figma.com/api/mcp/asset/d79f55c5-82a4-434f-8761-72123d1d6778.png",
  "icons/search.svg":
    "https://www.figma.com/api/mcp/asset/6bc83efc-db15-482f-b0c3-e539d35f5c41.svg",
  "icons/arrow-drop-down.svg":
    "https://www.figma.com/api/mcp/asset/2feb54a6-f0da-44e3-b44e-4944fedbb5fd.svg",
  "icons/medical-cream.svg":
    "https://www.figma.com/api/mcp/asset/ee3e8d41-a2c5-435f-95f5-d0a71af51a23.svg",
};

const root = path.resolve("public");

async function download(file, url) {
  const dest = path.join(root, file);
  await mkdir(path.dirname(dest), { recursive: true });
  try {
    await access(dest);
    console.log("skip", file);
    return;
  } catch {
    // continue
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status} ${file}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log("ok", file, buf.length);
}

const entries = Object.entries(assets);
for (let i = 0; i < entries.length; i += 6) {
  await Promise.all(entries.slice(i, i + 6).map(([file, url]) => download(file, url)));
}

console.log("done", entries.length);
