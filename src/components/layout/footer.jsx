function footer() {
    const footerYear = new Date().getFullYear()
   
     return (
       <footer className='footer p-20 bg-gray-700
       text-primary-content footer-center'>
           <div>
               <p>Copyright &copy; {footerYear + " "}
               All Rights Reserved
               </p>
           </div>
       </footer>
     )
   }
   
   export default footer