/* eslint-disable max-len */
export default `
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>Invoice</title>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet">
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet"
/>

<style>
    @media print {
        @page {
            size: A3;
        }
    }
    ul {
        padding: 0;
        margin: 0 0 1rem 0;
        list-style: none;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    table tr{
        border-bottom: 1px solid silver;
    }
    
    table tr:last-child{
        border-bottom: 0px;
    }
    
    table tr {
        border-bottom: 1px solid #ebeaea;
    }
    
    table tr:last-child{
        border-bottom: 0px;
    }
    
    table th,
    table td {
        text-align: right;
        padding: 8px;
    }
    
    table .left-aligh {
        text-align: left;
    }

    h1,
    h4,
    p {
        margin: 0;
    }
    
    h1 {
        font-family: 'Montserrat', sans-serif;
    }

    h2,
    h3,
    h4{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    .small-font {
        font-size: 12px;
    }

    .link {
        text-decoration: none; color: #0f5bff;
    }

    .seperator {
        background-color: black;
        -webkit-print-color-adjust: exact; 
        height: 20px;
    }
    
    .bottom-space {
        margin-bottom: 40px;
    }
    
    .hard-bottom-space {
        margin-bottom: 60px;
    }
    
    .light-bottom-space {
        margin-bottom: 20px;
    }

    .container {
        padding: 20px 50px;
        width: 1000px;
        max-width: 90%;
        margin: 0 auto;
    }

    .inv-title {
        padding: 20px;
        background-color: black;
        -webkit-print-color-adjust: exact; 
        color: white;
        margin-left: -50px;
        width: 80%;
    }

    .inv-logo {
        text-align: right;
    }
    .inv-logo img {
        height: 90px;
    }

    /* header */
    .inv-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        background-color:#fdfdfd;
        -webkit-print-color-adjust: exact; 
    }

    .inv-header .customer-info
    {
        display: flex;
    }
    .inv-header .customer-info > :nth-child(1) {
        flex: 2;
    }
    .inv-header .customer-info > :nth-child(2) {
        flex: 1;
    }
    
    .inv-header h2 {
        font-size: 20px;
        margin: 0 0 0.3rem 0;
    }
    .inv-header ul li {
        font-size: 15px;
        padding: 3px 0;
    }

    /* body */

    .inv-body {
        margin-bottom: 30px;
    }
    .inv-body th {
        background-color: black;
        -webkit-print-color-adjust: exact; 
        padding: 10px 8px;
        color: white;
        font-weight: 700;
        font-size: 24px;
    }

    /* footer */
    .inv-footer {
        display: flex;
        flex-direction: row;
    }
    .inv-footer > :nth-child(1) {
        flex: 2;
    }
    .inv-footer > :nth-child(2) {
        flex: 1;
    }
</style>
</head>
<body>
<div class="container">
    
    <div class="inv-logo hard-bottom-space" >
        <img src="https://proxim-bucket.s3.us-east-2.amazonaws.com/logo-proxim.png" />
    </div>

    <div class="inv-title bottom-space">
        <h1>Nova encomenda</h1>
    </div>


    <div class="inv-header hard-bottom-space">

        <div class="bottom-space">
            <h1>{{shopName}}</h1>
        </div>
        
        <div class="customer-info light-bottom-space">
            <div>
                {{#with shipping.address}}
                    <h2>Informação do utilizador</h2>
                    <ul class="bottom-space">
                        <li>{{this.fullName}}</li>
                        <li>{{this.address}}</li>
                        <li>{{this.city}} </li>
                        <li>{{this.region}} | {{this.postal}}</li>
                    </ul>
                {{/with}}
            </div>
            <div>
                <table>
                    <tr>
                        <th class="left-aligh">Ref.:</th>
                        <td>{{order.referenceId}}</td>
                    </tr>
                    <tr>
                        <th class="left-aligh">Data</th>
                        <td>{{orderDate}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="inv-body">
        <table>
            <thead>
                <th class="left-aligh">Item</th>
                <th>Quantidade</th>
                <th>Preço</th>
            </thead>
            <tbody>
                {{#each combinedItems}}
                <tr>
                    <td class="left-aligh">
                        <h4>{{title}}</h4>
                        <p class="small-font">
                                {{#each attributes}}
                                    <strong class="">{{label}}</strong> {{value}}
                                    {{#unless @last}},{{/unless}}
                                {{/each}}
                        
                        </p>
                    </td>
                    <td>{{quantity}}</td>
                    <td>{{price.displayAmount}}</td>
                </tr>
                {{/each}}
            </tbody>
        </table>
    </div>
    <div class="inv-footer bottom-space">
        <div><!-- required --></div>
        <div>
            <table>
                <tr>
                    <th class="left-aligh">Sub total</th>
                    <td>{{billing.subtotal}}</td>
                </tr>
                <tr>
                    <th class="left-aligh">Envio</th>
                    <td>{{billing.shipping}}</td>
                </tr>
                <tr>
                    <th class="left-aligh">Total</th>
                    <td>{{billing.discounts}}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="seperator light-bottom-space"></div>
    <div class="copyright">
        <p>&copy; 
            2020 Guimarães Proximcity. Todos os direitos reservados
        </p>
    </div>
</div>
</body>
`;
