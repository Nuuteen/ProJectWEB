class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<header class="flex items-center h-20 px-6 sm:px-10 bg-white">
            <div class="flex flex-shrink-0 items-center ml-auto">
                <a href="profile.html"><button 
                    class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                    <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                        <span class="font-semibold">ชื่อ - นามสกุล</span> <!-- ชื่อ นามสกุล -->
                        <span class="text-sm text-gray-600">รหัสพนักงาน</span> <!-- รหัสพนักงาน -->
                    </div>
                    <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                        <!-- ใส่รูปโปรไฟล์ --> <img src="img/teen.jpg" alt="user profile photo" class="h-full w-full object-cover">
                        <!-- ใส่รูปโปรไฟล์ -->
                    </span>
                </button></a>
                <div class="border-l pl-3 ml-3 space-x-1">
                <a href="login.html"><button 
                        class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full" >
                        <!-- ออกจากระบบ -->
                        <span class="sr-only">ออกจากระบบ</span>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button></a>
                </div>
            </div>
        </header>`;
    }
  }
      
  customElements.define('my-component', MyComponent);