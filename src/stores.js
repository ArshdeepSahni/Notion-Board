import { writable } from "svelte/store";
/*=======================================================================
 888888888888  88        88  88888888888  88b           d88  88888888888
      88       88        88  88           888b         d888  88
      88       88        88  88           88`8b       d8'88  88
      88       88aaaaaaaa88  88aaaaa      88 `8b     d8' 88  88aaaaa
      88       88""""""""88  88"""""      88  `8b   d8'  88  88"""""
      88       88        88  88           88   `8b d8'   88  88
      88       88        88  88           88    `888'    88  88
      88       88        88  88888888888  88     `8'     88  88888888888
=======================================================================*/
export const themeColor = writable();
themeColor.set("stone");

// export const calories = writable();
// calories.set("0");
// export const foodType = writable();
// foodType.set("Eggetarian");

/*=============================================================================================================
  ad88888ba   88        88  88888888ba      db         88888888ba         db         ad88888ba   88888888888
 d8"     "8b  88        88  88      "8b    d88b        88      "8b       d88b       d8"     "8b  88
 Y8,          88        88  88      ,8P   d8'`8b       88      ,8P      d8'`8b      Y8,          88
 `Y8aaaaa,    88        88  88aaaaaa8P'  d8'  `8b      88aaaaaa8P'     d8'  `8b     `Y8aaaaa,    88aaaaa
   `"""""8b,  88        88  88""""""'   d8YaaaaY8b     88""""""8b,    d8YaaaaY8b      `"""""8b,  88"""""
         `8b  88        88  88         d8""""""""8b    88      `8b   d8""""""""8b           `8b  88
 Y8a     a8P  Y8a.    .a8P  88        d8'        `8b   88      a8P  d8'        `8b  Y8a     a8P  88
  "Y88888P"    `"Y8888Y"'   88       d8'          `8b  88888888P"  d8'          `8b  "Y88888P"   88888888888
=============================================================================================================*/
export const supabaseUrl = writable("https://lkywmctcaxwouuanekxe.supabase.co");
supabaseUrl.set("https://lkywmctcaxwouuanekxe.supabase.co");
export const supabaseKey = writable(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQxMzY2NzI0LCJleHAiOjE5NTY5NDI3MjR9.kgiO_t-6vaS8XAK_NdjF9fLTnjzk5-gStTZ0eNtuNaU"
);
supabaseKey.set(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQxMzY2NzI0LCJleHAiOjE5NTY5NDI3MjR9.kgiO_t-6vaS8XAK_NdjF9fLTnjzk5-gStTZ0eNtuNaU"
);
