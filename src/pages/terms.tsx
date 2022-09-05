import React, { useEffect } from 'react';
import Text from '../symply-ui/Text';
import TermsStyle from '../pages-css/terms.module.css';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const Terms = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Terms and Conditions"
      path={location?.pathname}
      description="Symply does not sell the personal information of any consumer. Our Terms and Conditions explains how information is collected, stored, used, and disclosed by Symply Software Inc."
      metaTitle="Terms and Conditions"
    >
      <div className={TermsStyle.mainContainer}>
        <Text fontFamily="Moret" lg="40px" color="#211E5E" style={{ marginBottom: '19px' }}>
          Terms & Conditions
        </Text>
        <Text fontFamily="Barlow" lg="20px" color="#211E5E" style={{ marginBottom: '45px' }}>
          <b>THIS SYMPLY MASTER SERVICES AGREEMENT</b> (together with the terms set forth in the
          Order Form on the{' '}
          <a href="https://wwww.symply.io" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            www.symply.io
          </a>{' '}
          website, this
          <b>“Agreement”</b>) is entered into by and between Symply Software, Inc. (<b>“Symply”</b>)
          and you (the
          <b>“License”</b>
          ).
        </Text>
        <Text fontFamily="Barlow" lg="20px" color="#4E4E4E">
          BY USING THE SOFTWARE (AS DEFINED BELOW) AND CLICKING “I ACCEPT,” AND USING THE SERVICES
          (AS DEFINED BELOW), LICENSEE ACCEPTS THIS AGREEMENT. THIS IS A BINDING AGREEMENT,
          GOVERNING USE OF THE SOFTWARE AND THE SERVICES. BY DOWNLOADING, INSTALLING, OR USING THE
          SOFTWARE, LICENSEE ACKNOWLEDGES AND AGREES TO BE BOUND BY THE TERMS OF THIS AGREEMENT.
          SHOULD LICENSEE NOT ACKNOWLEDGE AND AGREE TO THESE TERMS, LICENSEE MUST IMMEDIATELY
          DISCONTINUE USE OF THE SERVICES AND THE SOFTWARE. CONTINUED USE OF THE SERVICES AND
          SOFTWARE SIGNIFIES LICENSEE’S CONTINUED ACCEPTANCE OF THE TERMS OF THIS AGREEMENT AND ANY
          CHANGES TO THEM.
          <br />
          <br />
          Symply has developed certain software to process payroll information (as further
          identified on Order Form, the “Services”) which it makes available to its customers; and
          <br />
          <br />
          <b>WHEREAS</b>
          , Licensee wishes to obtain a non-exclusive license to access and use the Services, and
          Symply is willing to grant such non-exclusive license to Licensee on the terms set forth
          in this Agreement;
          <br />
          <br />
          <b>NOW, THEREFORE</b>
          , in consideration of the premises and the mutual promises hereinafter set forth, the
          parties hereto agree as follows:
          <br />
          <br />
        </Text>
        <Text fontFamily="Barlow" lg="20px" color="#4E4E4E" style={{ paddingLeft: '17px' }}>
          <ol>
            <li>
              Scope of Agreement
              <ol type="a">
                <li>
                  Services. This Agreement, along with the Exhibits hereto, sets forth the terms and
                  conditions under which Licensee may access and use the Services.
                </li>
                <li>
                  Order. Forms The subscription term(s) for the Services and the applicable fees
                  will be specified in one or more order forms that Licnensee has completed on
                  Symply’s website (each, an “<b>Order Form</b>
                  ”) which are made a part of this Agreement. Each Order Form will be governed by
                  the terms of this Agreement. In the event of any conflict or inconsistency between
                  the terms and conditions of this Agreement and the terms of any Order Form, the
                  terms and conditions of this Agreement shall govern, and the conflicting or
                  inconsistent provision in the Order Form will have no force or effect unless
                  expressly stated otherwise in the Order Form
                </li>
              </ol>
            </li>
            <li>
              Services
              <ol type="a">
                <li>
                  License Grant. Subject to Licensee’s compliance with the terms and conditions of
                  this Agreement and the applicable terms of relevant Order Form(s), including,
                  without limitation, Licensee’s payment of all applicable fees, Symply hereby
                  grants Licensee a limited, revocable, non-transferable (except as may otherwise be
                  provided herein), non-sublicensable, non-exclusive license to access and use the
                  Services, solely in the form provided by Symply and solely for Licensee’s own
                  internal business use.
                  <li>Service Access and Users</li>
                  Licensee’s license to access and use the Services grants access to the Services
                  only to Licensee. Symply will provide Licensee with a user account and password
                  for use with the Services (the "<b>Account</b>
                  "). Licensee is responsible for maintaining the confidentiality of Licensee’s
                  Account password. Licensee agrees not to share its Account password with anyone,
                  let Sensitivity: Confidential anyone else access its’ Account password or do
                  anything else that might jeopardize the security of its’ Account password.
                  Licensee agrees to notify Symply if Licensee’s password is lost, stolen or
                  disclosed to an unauthorized third party, if there is any unauthorized use of its’
                  password or Account, or if Licensee learns of any other breach of security in
                  relation to the Services. Licensee is solely responsible for any and all
                  activities that occur through the use of Licensee’s Account. Licensee is at all
                  times fully responsible and liable for all acts and omissions of users of its
                  Account (“
                  <b>Users</b>
                  ”) and Licensee agrees to indemnify Symply for all claims and losses related to
                  any such acts and/or omissions.
                </li>
                <li>
                  Restrictions. Licensee will not, and will not permit any third party to: (a)
                  attempt to disable or circumvent any security mechanisms used by the Symply
                  Product (as defined herein) or otherwise attempt to gain unauthorized access to
                  any portion or feature of the Site, or any other systems or networks connected to
                  the Symply Product, or to any Symply server, by hacking, password "mining", or any
                  other illegal means; (b) decompile, reverse engineer, disassemble or otherwise
                  attempt to reconstruct or discover the source code, underlying ideas or algorithms
                  of any components of the Symply Product, (c) copy, alter, modify, translate, adapt
                  in any way, or prepare any derivative work based upon the Symply Product, (d)
                  rent, lease, network, loan, pledge, encumber, sublicense, sell, distribute,
                  disclose, assign or otherwise transfer rights in or to the Symply Product, (e) use
                  the Symply Product in commercial timesharing, rental or other sharing
                  arrangements, (f) use any "deep-link", "page-scrape", "robot", "spider" or other
                  automatic device, program, algorithm or methodology, or any comparable manual
                  process, to access, acquire, copy, or monitor any portion of the Symply Product;
                  (g) use any device, software or routine to interrupt or interfere, or attempt to
                  interrupt or interfere with, the proper operation and working of the Symply
                  Product or any transaction being conducted on the Site, or with any other person's
                  use of the Symply Product; (h) breach any security measures implemented on the
                  Symply Product or otherwise attempt to use the Symply Product in a way that is
                  intended to avoid incurring fees or exceed usage limits; (i) track or seek to
                  trace any information on any other person who uses the Symply Product; (j) forge
                  headers or otherwise manipulate identifiers in order to disguise Licensee’s
                  identity, or the origin of any message or other communication that Licensee sends
                  to Symply in connection with the Symply Product; (k) pretend that Licensee is, or
                  that Licensee represents, someone else, or impersonate any other person; (l) use
                  the Symply Product for any illegal purpose, for soliciting the performance of any
                  illegal activity, or as otherwise prohibited by this Agreement or applicable laws,
                  rules or regulations, including, without limitation, laws applicable to the export
                  of software and data; or (m) upload or otherwise process any malicious content to,
                  through, or in connection with the Symply Product. Licensee hereby agrees that
                  Licensee will notify Symply if Licensee becomes aware that the Symply Product is
                  being used for any illegal or unauthorized purpose.
                </li>
                <li>
                  Proprietary Rights. Symply or its licensors retain all right, title and interest
                  in and to the Services and related documentation and materials, including, without
                  limitation, all patent, copyright, trademark, trade secret and other intellectual
                  property rights embodied in, or otherwise applicable to the Services, whether such
                  rights are registered or unregistered, and wherever in the world those rights may
                  exist (“
                  <b>Symply Rights</b>
                  ”). Licensee shall not commit any act or omission, or permit or induce any third
                  party to commit any act or omission inconsistent with the Symply Rights. All
                  materials embodied in, or comprising the Services, including, but not limited to,
                  graphics, user and visual interfaces, images, code, applications, and text, as
                  well as the design, structure, selection, coordination, expression, "look and
                  feel", arrangement of the Services and their content, and the trademarks, service
                  marks, proprietary logos and other distinctive brand features found in the
                  Services (“
                  <b>Symply Marks</b>
                  ”), are all owned by Symply or its licensors. Licensee is expressly prohibited
                  from using the Symply Marks except as provided herein or as agreed to the parties
                  in writing. Title to the Services shall not pass from Symply to Licensee, and the
                  Services shall at all times remain the sole and exclusive property of Symply.
                  Other than expressly set forth herein, there are no implied rights or licenses in
                  this Agreement. All Symply Rights are expressly reserved by Symply and/or its
                  licensors, as applicable.
                </li>
              </ol>
            </li>
            <li>
              License and Responsibilities and Content
              <ol type="a">
                <li>
                  License Responsibilities. Licensee is responsible for obtaining, configuring and
                  maintaining all computer hardware, software and communications equipment needed to
                  access and use the Services, and for provisioning, configuring, securing and
                  paying all third-party services (e.g., ISP, telecommunications, computers,
                  tablets, etc.) required to use the Services. Licensee is responsible for the
                  accuracy, quality and legality of Licensee data and documents, which shall include
                  all payroll data, personnel data and personally identifying information, even if
                  Licensee has signed up for Symply’s premium service and Symply is inputing such
                  data on Licensee’s behalf. Licensee acknowledges and agrees: (1) that Licensee is
                  responsible for its employees, agents and contractors abiding by all local, state,
                  national, and international laws and regulations applicable to Licensee’s and its
                  Users’ use of the Services; (2) not to use the Services for illegal purposes; and
                  (3) not to interfere or disrupt networks connected to the Services. Licensee shall
                  be solely responsible for its actions and the actions of its employees, agents and
                  contractors and other Users. Licensee shall not (a) sell, resell, rent or lease
                  the Services, (b) use the Services to store or transmit infringing, libelous,
                  otherwise unlawful or tortious material, or to store or transmit material in
                  violation of third-party privacy rights, (c) use the Services to store or transmit
                  malicious code, or (d) interfere with or disrupt the integrity or performance of
                  the Services or any third party documents or data contained therein.
                </li>
                <li>
                  License Data. As between Licensee and Symply, Licensee retains all right, title
                  and interest in any and all data, files, attachments, text, images, personally
                  identifiable information, and other content that Licensee and Licensee’s Users
                  upload or submit to the Services (collectively, "Licensee Data"). Licensee may not
                  upload, post or otherwise make available through the Services any material
                  protected by copyright, trademark, or any other proprietary right without the
                  express permission of the owner of such copyright, trademark or other proprietary
                  right owned by a third party, and the burden of determining whether any material
                  is protected by any such right is on Licensee, and Licensee represents and
                  warrants that it has all rights, permissions and consents necessary (a) to make
                  the Licensee Data available on or through the Services, and (b) to grant Symply
                  the limited rights to use Licensee Data set forth in this Agreement.
                </li>
                <li>
                  License's Responsibilities Regarding Tax Services. In order for Licensee’s W-2
                  statements and payroll tax reporting to be accurate, wage and payroll information
                  submitted by Licensee to Symply during the transition process must be reconciled
                  with Licensee’s payroll tax returns for the current calendar year and Licensee’s
                  wage and payroll tax information for the current quarter. Licensee agrees to
                  obtain (if necessary) and maintain appropriate tax identification numbers for its
                  own tax reporting, and to obtain and maintain any necessary forms and information
                  from its employees, and to forward this information to Symply upon Symply’s
                  request. It is Licensee’s responsibility to submit accurate information requested
                  by Symply in connection with the Services. Symply will rely on the accuracy of
                  such information in performing all Services, and is not responsible for detecting
                  errors, omissions, fraud, or illegal acts in the Licensee’s preparation of such
                  information. Any penalty or interest incurred due to the submission of inaccurate
                  information by the Licensee will be the sole responsibility of Licensee, which
                  agrees to hold Symply harmless from any and all such liability. Symply, at its
                  option, may decide not to file Licensee’s payroll tax returns or pay Licensee’s
                  payroll taxes if there are any unresolved problems with any information requested
                  by Symply, or submitted by Licensee. If, through no fault of Licensee, Symply
                  files late or incorrect payments, any claim against Symply by the Licensee shall
                  be limited to the amount of penalties and interest incurred due to such late or
                  incorrect payments, or in the case of incorrect payments, to the difference
                  between the incorrect and correct payments. In the event of error caused solely by
                  Symply’s actions or inaction, the sole remedy available to Licensee is for Symply
                  to correct errors at no cost to Licensee (including the payment of penalties and
                  interest by Symply). In no event shall Symply be responsible for the payment of
                  Licensee’s taxes.
                </li>
                <li>
                  Licensee’s Responsibilities re: ACH Origination and Account Debiting
                  <ol type="i">
                    <li>
                      Symply has established a payroll processing arrangement with third party
                      processors to provide services for the provision of electronic direct deposit
                      services and the initiation of electronic signals for paperless entries for
                      certain payroll services through an Automated Clearing house (“ACH”). Symply
                      may reject any payroll request which does not comply with ACH requirements. If
                      any payroll request is rejected, Symply will make a reasonable effort to
                      notify Licensee promptly by telephone, facsimile or electronic communication,
                      so that Licensee may correct such payroll request or request that Symply
                      resubmit it. Symply will have no liability to Licensee by reason of the
                      rejection of any payroll request. Further, the Licensee agrees to be bound by
                      the NACHA Operating Rules and Guidelines (the “Rules”), including the
                      following matters:
                      <ol type="A">
                        <li>
                          Licensee expressly authorizes Symply to originate entries on behalf of
                          Licensee to the recipients’ accounts;
                        </li>
                        <li>
                          Licensee agrees not to originate entries that violate the laws of the
                          United States;
                        </li>
                        <li>
                          Symply may terminate or suspend this Agreement for breach of the Rules in
                          a manner that permits Symply to comply with the Rules; and
                        </li>
                        <li>
                          Licensee hereby grants Symply the right to audit the Licensee’s compliance
                          with this Agreement and the Rules.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Licensee will have the right to cancel or amend any payroll request received
                      by Symply after it has been submitted to Symply for a fee. Except for entries
                      created from payroll requests that have been pre- approved and resubmitted by
                      Licensee in accordance with the requirement of this Agreement, Symply will
                      have no obligation to retransmit a returned payroll request to the ACH or
                      gateway operator. Symply will process the payroll request in accordance with
                      its current processing schedule, provided the payroll request is received by
                      Symply no later than 3:00 p.m. PST. Licensee acknowledges that Symply makes
                      certain warranties with respect to its ACH operator. Licensee agrees to
                      reimburse Symply for any loss Symply incurs, including reasonable attorneys’
                      and related fees incurred as a result of Symply’s breach of such warranty
                      caused by Licensee. Licensee further agrees to reimburse Symply for any fees
                      charged for nonsufficient funds or other return fees, any interest on any
                      amounts due at such rate as permitted by law and for reasonable attorney’s
                      fees, costs and expenses of collection as permitted by law.
                    </li>
                    <li>
                      At least 72 hours prior to Licensee’s payroll direct deposit and/or payroll
                      tax deposit date or other applicable settlement or due date, Licensee
                      authorizes Symply to initiate debit entries to Licensee’s account (“Licensee’s
                      Account”) at the depository financial institution, the Routing Number of which
                      is provided by Licensee, and to debit Licensee’s Account in such amounts as
                      are necessary to (a) fund Licensee’s direct deposits; (b) pay any fees or
                      charges associated with the Services; (c) pay Licensee’s payroll taxes; (d);
                      and (d) pay any other amount that becomes owed under this Agreement. This
                      authorization is to remain in full force and effect until this Agreement is
                      terminated; provided that Symply has a Sensitivity: Confidential reasonable
                      opportunity to act upon it. Licensee will maintain Licensee’s Account as of
                      the applicable settlement date and time, with immediately available funds
                      sufficient to cover all debit entries that Licensee originates through Symply.
                      Licensee’s obligation to pay Symply for each debit entry matures at the time
                      Symply transmits or otherwise delivers the debit entry to the ACH or gateway
                      operator and is unaffected by termination of the Services or this Agreement.
                      Licensee acknowledges that the origination of ACH transactions to its account
                      must comply with the provisions of U.S. law. Amounts withdrawn for payroll
                      taxes will be held by Symply until such time as those payments are due to the
                      appropriate taxing agencies, and no interest will be paid to the Licensee on
                      these amounts.
                    </li>
                    <li>
                      If Licensee does not have sufficient funds in Licensee’s Account to pay
                      disbursements, fees, payroll taxes or any other amounts due under this
                      Agreement at the time required, or if Licensee refuses to pay, Symply shall
                      notify Licensee immediately by telephone and/or in writing, and Symply shall
                      have the option to (a) refuse to pay any collected but unremitted payroll
                      taxes, in which case the payroll tax liability will become the sole
                      responsibility of Company; (b) refuse to perform further Services; (c) refund
                      monies due to Licensee, less any amounts owed to Symply; (d) apply any funds
                      held by Symply for direct deposit; and/or (f) immediately terminate this
                      Agreement. Symply in its sole discretion may charge a minimum fee of $150.00
                      for all drafts returned due to nonsufficient funds. Should the Services be
                      recommenced after the resolution of Licensee’s Account, Symply reserves the
                      right to extend the processing date.
                    </li>
                  </ol>
                </li>
                <li>
                  <u>Feedback</u>. If Licensee sends or transmits any communications to Symply by
                  mail, electronic mail, telephone, other otherwise (“Feedback”) suggesting or
                  recommending changes to the Services, Licensee hereby grants Symply a
                  royalty-free, worldwide, transferable, sub-licensable (through multiple tiers),
                  irrevocable, perpetual license to use such Feedback in connection with or
                  incorporate it into the Services.
                </li>
              </ol>
            </li>
            <li>
              Term & Termination
              <ol type="a">
                <li>
                  <u>Term</u>. The term of this Agreement will begin on the Start Date listed on the
                  Order Form and will continue for an initial period listed in the Order Form (the
                  “Initial Period”). Upon the expiration of the Initial Period, this Agreement will
                  automatically renew for subsequent renewal periods (each a “Renewal Period”)
                  unless either party provides written notice to the other party by the agreed upon
                  Non-Renewal Notification Deadline prior to the expiration of the Initial Period or
                  the then-current Renewal Period.
                </li>
                <li>
                  <u>Termination</u>. Either party may terminate this Agreement, effective
                  immediately without further notice, in the event that the other party materially
                  breaches this agreement and does not remedy such breach within thirty (30)
                  calendar days of the date on which the breaching party receives written notice of
                  such breach. Either party may, but is under no obligation to, terminate this
                  Agreement immediately by giving written notice to the other party in the event
                  that the other party files a petition in bankruptcy or is adjudicated a bankrupt
                  or insolvent, or makes an assignment for the benefit of creditors or an
                  arrangement pursuant to any bankruptcy law, or if the other party discontinues or
                  dissolves its business or if a receiver is appointed for the other party or for
                  such party’s business and such receiver is not discharged within 60 days.
                </li>
                <li>
                  <u>Effects of Termination</u>. Upon the termination of this Agreement for any
                  reason: (i) the Licensee shall cease use of the Services immediately; (ii)
                  Symply’s obligations to provide the Services Sensitivity: Confidential shall
                  immediately cease; and (iii) Licensee shall pay to Symply the full amount of any
                  outstanding fees due hereunder within thirty (30) days of termination.
                  Notwithstanding the foregoing, the following terms shall survive the termination
                  of this Agreement, together with any other terms which by their nature are
                  intended to survive such termination: Sections 2(b) (Service Access and Users)
                  (last sentence only), 2(c) (Restrictions), 2(d) (Proprietary Rights), 3 (Licensee
                  Responsibilities), 4(c) (Effects of Termination, (Disclaimer of Warranties),
                  (Indemnification), (Limitation of Liability), (Confidentiality) (Governing Law &
                  Jurisdiction), (Notices), and (General Provisions).
                </li>
                <li>
                  <u>Suspension</u>. Subject to Symply’s obligations to maintain uptime as provided
                  in the Service Level Agreement that is made a part of this Agreement, the Site,
                  Software and/or any or all of the Services may be unavailable at certain times,
                  including during any unanticipated or unscheduled downtime or unavailability or as
                  a result of system failures or force majeure events. Symply will use commercially
                  reasonable efforts, to provide information regarding any such interruptions and
                  the restoration of use of, and access to, the Site, Services and Software
                  (collectively the “<b>Symply Product</b>
                  ”) following any such interruption, as per the Service Level Agreement listed in
                  the Order Form. Symply reserves the right to suspend or terminate Licensee’s
                  access to the Services if Symply reasonably determines that: (i) there is a threat
                  or attack on the Services (including a denial of service attack) or other event
                  that may create a risk to the Services, Symply, Licensee, or any user of the
                  Services; (ii) Licensee’s or its users’ use of the Services or Licensee Data
                  disrupts or poses a security risk to the Services or any user of the Services, may
                  harm Symply’s systems, or may subject Symply or any third party to liability;
                  (iii) Licensee or any User is using the Services for fraudulent or illegal
                  activities; (iv) subject to applicable law, Licensee has ceased to continue
                  Licensee’s business in the ordinary course, made an assignment for the benefit of
                  creditors or similar disposition of its assets, or become the subject of any
                  bankruptcy, reorganization, liquidation, dissolution or similar proceeding; (v)
                  Licensee or any User is using the Services or other Symply property in breach of
                  this Agreement; or (vi) Licensee is in default of its payment obligations
                  hereunder (collectively, "<b>Service Suspensions</b>
                  "). Subject to the remainder of this Section 4(d), Symply will make commercially
                  reasonable efforts, circumstances permitting, to provide written notice of any
                  Service Suspension to Licensee, and to provide updates regarding resumption of
                  Licensee’s access to the Services following any Service Suspension. Symply may
                  immediately effectuate a Service Suspension in accordance with this Section 4(d),
                  except that in the event that Symply intends to effectuate a Service Suspension as
                  a result of Sections 4(d)(v) or 4(d)(vi), Symply will provide Licensee with 10
                  days’ written notice prior to implementing the Service Suspension and will only
                  effectuate such Service Suspension if Licensee has not cured the underlying breach
                  within such notice period.
                </li>
              </ol>
            </li>
            <li>
              Fees & Payment Terms
              <ol type="a">
                <li>
                  <u>License Fees</u>. Unless otherwise expressly agreed by Symply and specified in
                  the applicable Order Form, all fees are payable in the currency of the United
                  States of America. All fees are exclusive of all taxes, levies or duties, and
                  Licensee will be responsible for payment of such taxes, levies or duties,
                  excluding only U.S. taxes based solely upon Symply’s net income. Symply will
                  automatically charge the bank account on file on a monthly basis. If the bank
                  account on file is nonfunctional or has insufficient funds, Symply will send a
                  notice to Licensee and Licensee shall replace such account within five (5) days.
                  If Licensee fails to pay or keep current payment information on file with Symply,
                  Symply may immediately suspend the Service and terminate this Agreement. Except as
                  otherwise mutually agreed upon by the parties in writing, each party is
                  responsible for its own expenses under this Agreement. All fees payable under this
                  Agreement are non-refundable.
                </li>
                <li>
                  <u>Changes to Fees</u>. Symply may change its fees and payment terms at its
                  discretion; provided however, that such changes will not take effect for Licensee
                  until the start of the next Renewal Period (“Fee Modifications”). Symply will
                  provide written notice to Licensee of any changes to fees, including through
                  notices sent to Licensee’s e-mail address
                </li>
              </ol>
            </li>
            <li>
              Warranties & Disclaimer of Warranties
              <ol type="a">
                <li>
                  <u>General Representations and Warranties</u>
                  . Each party represents and warrants to the other party that: (i) it has the full
                  power and authority to enter into this Agreement and to carry out its obligations
                  under this Agreement; and (ii) it has complied, and will in the future comply,
                  with all applicable laws, rules and regulations in connection with the execution,
                  delivery and performance of this Agreement.
                  <br />
                  <br />
                  Further, Licensee represents and warrants to Symply that: (i) Licensee will not
                  engage in any illegal or fraudulent business practice in connection with
                  Licensee’s use of the Symply Product; and (ii) that all of the information
                  provided by Licensee to Symply in Licensee’s Account is correct and current at all
                  times.
                </li>
                <li>
                  <u>Disclaimer of Warranties</u>. EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT:
                  (I) THE SERVICES ARE PROVIDED TO LICENSEE ON AN “AS IS” BASIS, WITH ANY AND ALL
                  FAULTS, AND WITHOUT ANY WARRANTY OF ANY KIND; (II) SYMPLY, ON BEHALF OF ITSELF AND
                  ITS SUPPLIERS AND LICENSORS, EXPRESSLY DISCLAIMS ALL REPRESENTATIONS, WARRANTIES
                  AND CONDITIONS WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING
                  WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, SATISFACTORY QUALITY, AND NON-INFRINGEMENT OF THIRD PARTY
                  RIGHTS AND (III) SYMPLY, ON BEHALF OF ITSELF AND ITS SUPPLIERS AND LICENSORS,
                  EXPRESSLY DISCLAIMS ANY AND ALL LOSSES CAUSED BY A DATA BREACH, HACK OR OTHER
                  UNLAWFUL ACCESS OF SYMPLY’S SYSTEMS OR SERVERS. SYMPLY DOES NOT WARRANT THAT THE
                  SERVICES WILL MEET LICENSEE’S REQUIREMENTS, OR THAT THE OPERATION OF THE SERVICES
                  WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE SERVICES WILL BE
                  CORRECTED. LICENSEE EXPRESSLY ACKNOWLEDGES AND AGREES THAT THE USE OF THE SERVICES
                  AND ALL RESULTS OF SUCH USE IS SOLELY AT LICENSEE’S OWN RISK. NO ORAL OR WRITTEN
                  INFORMATION OR ADVICE GIVEN BY SYMPLY OR ITS AUTHORIZED REPRESENTATIVES SHALL
                  CREATE A WARRANTY OR IN ANY WAY INCREASE THE SCOPE OF THE WARRANTIES PROVIDED
                  HEREIN. SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION AND/OR LIMITATION OF
                  IMPLIED WARRANTIES OR CONDITIONS, OR ALLOW LIMITATIONS ON HOW LONG AN IMPLIED
                  WARRANTY LASTS, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO LICENSEE.
                  IN SUCH EVENT, SYMPLY’S WARRANTIES AND CONDITIONS WITH RESPECT TO THE SERVICES
                  WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW IN SUCH
                  JURISDICTION
                </li>
                <li>
                  Licensee acknowledges that Licensee shall maintain sole responsibility for the
                  accuracy of any product produced by the Services, including payroll processing,
                  tax payments and payroll reporting. If there are errors with the product (that are
                  not attributable to the Licensee Data), Licensee shall immediately, and in any
                  event within three (3) business days, notify Symply in writing of any such
                  discrepancies or deficiencies. Symply shall reprocess the applicable Service and
                  update the Software to correct any errors. The remedy in the foregoing sentence
                  shall be Licensee’s sole remedy for any errors with the Services. All Services
                  furnished hereunder are deemed acceptable to Licensee unless proper notice has
                  been delivered to Symply in accordance with the terms hereof
                </li>
              </ol>
            </li>
            <li>
              Indemnification
              <ol type="a">
                <li>
                  <u>By License</u>. License shall, at its expense indemnify, defend and hold Symply
                  and Symply’s directors, officers and employees (collectively, the “
                  <b>Symply Indemnitees</b>
                  ”) harmless from and against any third party claims, actions, proceedings and
                  suits (collectively “Claims”) and all related liabilities, damages, settlements,
                  penalties, fines, costs or expenses (including, without limitation, Sensitivity:
                  Confidential reasonable attorneys’ fees and other litigation expenses)
                  (collectively, “<b>Losses</b>
                  ”) incurred by the Symply Indemnities, to the extent such claims allege: (i) that
                  Licensee Data or its use by Symply in the provision of the Services infringes or
                  misappropriates any third-party’s rights; (ii) a misrepresentation or error in any
                  payroll reporting, government filing (including payroll tax), employment filings
                  or other regulatory items submitted or provided by Licensee to its employees and
                  consultants or to any governmental authority (ii) Licensee’s violation of
                  applicable laws (including classification of employees, wage and hour claims and
                  other employment issues), rules or regulations in connection with the Services;
                  (iii) Licensee’s willful misconduct, fraud, misrepresentation, or violation of
                  law; or (iv) any negligence by Licensee or any other act or omission by Licensee,
                  including without limitation any breach of this Agreement by Licensee. Licensee
                  will not enter into a settlement that would result in liability to Symply without
                  Symply’s prior written consent.
                </li>
                <li>
                  <u>By Symply</u>. Symply shall, at its expense, indemnify, defend and hold
                  harmless Licensee from third party claims brought against Licensee, and shall pay
                  or reimburse Licensee for all damages, costs and expenses payable by Licensee to
                  such third party to the extent they are awarded in a final judgment or agreed to
                  in a settlement, as a result of any third party claims against Licensee alleging
                  that the Services infringes or misappropriates any U.S. patent issued prior to the
                  Effective Date, copyright, or trade secret; provided that Licensee: (1) promptly
                  notifies Symply in writing of the claim; (2) grants Symply sole control of the
                  defense and settlement of the claim; and (3) provides Symply, at Symply’s expense,
                  with all assistance, information and authority reasonably required for the defense
                  and settlement of the claim. Symply will not enter into a settlement that would
                  result in liability to Licensee without Licensee’s prior written consent.
                </li>
                <li>
                  <u>Exceptions</u>. Symply’s above indemnity obligations do not apply to (1) any
                  use of the Services beyond the scope of license granted herein, (2) any
                  modification or derivative works of the Services made by or for Licensee, (3) use
                  of a superseded infringing version of the Services (or component thereof) by
                  Licensee after release of a non-infringing version by Symply, or (4) any use or
                  combination of the Services with any technology, software or hardware not supplied
                  by Symply, if such alleged infringement would be avoided by use of the Services
                  without such technology, software or hardware.
                </li>
                <li>
                  <u>Mitigation</u>. If a claim of infringement occurs that is subject to Section
                  7(a) and not subject to the exceptions in Section 7(c), or if Symply determines
                  that a claim is likely to occur, Symply may, in Symply’s sole discretion: (1)
                  procure for Licensee the right or license to continue to use the Services, free of
                  the infringement claim; or (2) replace or modify the affected Service, to make it
                  noninfringing provided that the replacement Service substantially conforms to
                  Symply's then-current specification for such Service. If these remedies are not
                  reasonably available in Symply’s opinion, Symply may elect to terminate this
                  Agreement, in which case Licensee shall be entitled a pro rata refund of fees
                  already paid to Symply for the then-current Initial Period or Renewal Period, as
                  applicable.
                </li>
                <li>
                  <u>Exclusive Remedy</u>. Sections 7(a) through 7(d) state the sole and exclusive
                  obligations and liability of Symply for any intellectual property rights
                  infringement and are in lieu of any warranties of non-infringement, all of which
                  are disclaimed.
                </li>
              </ol>
            </li>
            <li>
              Limitation of Liability
              <ol type="a">
                <li>
                  <u>Limitation of Liability</u>. EXCEPT ITS’ INDEMNIFICATION OBLIGATIONS OR FOR
                  BREACHES OF SECTION 10 OR SECTION 2, IN NO EVENT WILL EITHER PARTY BE LIABLE FOR
                  ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, SPECIAL, INCIDENTAL OR RELIANCE DAMAGES,
                  INCLUDING, WITHOUT LIMITATION, ANY LOST DATA, LOSS OF USE AND LOST PROFITS,
                  ARISING FROM OR RELATING TO THIS AGREEMENT OR THE SERVICES, REGARDLESS OF THE
                  LEGAL THEORY UPON WHICH ANY CLAIM FOR SUCH Sensitivity: Confidential DAMAGES IS
                  BASED AND EVEN IF SUCH PARTY KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF, OR
                  COULD REASONABLY HAVE PREVENTED, SUCH DAMAGES.
                </li>
                <li>
                  <u>Limitation of Damages</u>. EXCEPT FOR ITS INDEMNIFICATION OBLIGATIONS OR FOR
                  BREACHES OF SECTION 10 OR SECTION 2, EACH PARTY’S TOTAL CUMULATIVE LIABILITY
                  ARISING FROM OR RELATED TO THIS AGREEMENT OR THE SERVICES, WILL NOT EXCEED THE
                  AMOUNT OF FEES PAID OR PAYABLE BY LICENSEE IN THE TWELVE (12) MONTHS IMMEDIATELY
                  PRECEDING THE EVENT GIVING RISE TO SUCH LIABILITY. LICENSEE AGREES THAT SYMPLY’S
                  SUPPLIERS AND LICENSORS WILL HAVE NO LIABILITY OF ANY KIND UNDER OR AS A RESULT OF
                  THIS AGREEMENT.
                </li>
                <li>
                  <u>Failure of Essential Purpose</u>. THE PARTIES AGREE THAT THESE LIMITATIONS
                  SHALL APPLY EVEN IF THIS AGREEMENT OR ANY LIMITED REMEDY SPECIFIED HEREIN IS FOUND
                  TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                </li>
                <li>
                  <u>Jurisdictional Issues</u>. SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OR
                  LIMITATION OF INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR OTHER DAMAGES, SO THE ABOVE
                  LIMITATIONS OR EXCLUSIONS MAY NOT APPLY. IN SUCH EVENT, LIABILITY FOR SUCH DAMAGES
                  WITH RESPECT TO THE SERVICE WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY
                  APPLICABLE LAW IN SUCH JURISDICTION.
                </li>
                <li>
                  <u>Allocation of Risk</u>. The sections of this Agreement that address
                  indemnification, limitation of liability and the disclaimer of warranties allocate
                  the risk between the parties. This allocation of risk is an essential element of
                  the basis of the bargain between the parties.
                </li>
              </ol>
            </li>
            <li>Export</li>
            The Services may include technology or software that is subject to the customs and
            export control laws and regulations of the United States and every country in which the
            Services is provided. Licensee may not use or otherwise export or re-export the Services
            except as authorized by U.S. law and the laws of the jurisdiction in which the Services
            was obtained. By using the Services, Licensee represents and warrants that (i) Licensee
            is not located in a country that is subject to a U.S. government embargo, or that has
            been designated by the U.S. government as a “terrorist supporting” country; and (ii)
            Licensee is not on any U.S. government list of prohibited or restricted parties
            <br />
            <br />
            <li>
              Confidentiality; Publicity
              <ol type="a">
                <li>
                  <u>Confidential Information</u>. “Confidential Information” means all non-public
                  information disclosed in written, oral or visual form by either party to the
                  other. Confidential Information may include, but is not limited to, services,
                  pricing information, computer programs, source code, names and expertise of
                  employees and consultants, know-how, and other technical, business, financial and
                  product development information. “Confidential Information” does not include any
                  information that the receiving party can demonstrate by its written records (1)
                  was rightfully known to it without obligation of confidentiality prior to its
                  disclosure hereunder by the disclosing party; (2) is or becomes publicly known
                  through no wrongful act of the receiving party; (3) has been rightfully received
                  without obligation of confidentiality from a third party authorized to make such a
                  disclosure; or (4) is independently developed by the receiving party without
                  reference to confidential information disclosed hereunder
                </li>
                <li>
                  <u>Obligation of Confidentiality</u>
                  . Neither party will use any Confidential Information of the other party except as
                  expressly permitted by this Agreement or as expressly authorized in writing by the
                  disclosing party. The receiving party shall use the same degree of care to protect
                  the disclosing party’s Confidential Information as it uses to protect its own
                  Confidential Information of like nature, but Sensitivity: Confidential in no
                  circumstances less than a reasonable standard of care. The receiving party may not
                  disclose the disclosing party’s Confidential Information to any person or entity
                  other than to those of its employees and contractors who: (i) are subject to a
                  written agreement with the receiving party that includes use and confidentiality
                  restrictions that are at least as protective as those set forth in this Agreement,
                  and (ii) need access to such Confidential Information solely for the purpose of
                  fulfilling the receiving party’s obligations or exercising the receiving party’s
                  rights hereunder. The foregoing obligations will not restrict the receiving party
                  from disclosing Confidential Information of the disclosing party: (1) pursuant to
                  the order or requirement of a court, administrative agency, or other governmental
                  body, provided that the receiving party required to make such a disclosure gives
                  reasonable notice to the disclosing party prior to such disclosure; and (2) on a
                  confidential basis to its legal and financial advisors.
                  <br />
                  With respect to any Confidential Information disclosed after the Effective Date,
                  the terms of this Agreement supersede any previous non-disclosure agreements or
                  any other preliminary representations or understandings that have been entered
                  into by the parties to this Agreement with regard to the Symply Product. Symply
                  may disclose the existence or terms of this agreement to third parties in
                  connection with any merger or sale of all or substantially all of Symply assets
                </li>
                <li>
                  Licensee agrees it will not, without prior written approval of Symply in each
                  instance (i) make any use, including without limitation in advertising, publicity,
                  promotional materials or otherwise, of the name of Symply, or any affiliate of
                  Symply, or any partner or employee of Symply, nor any trade name, trademark, trade
                  device, service mark, symbol or any abbreviation, contraction or simulation
                  thereof owned by Symply or its subsidiaries or affiliates (the “Symply
                  Trademarks”); (ii) make any public statements or issue press releases or similar
                  announcements about this Agreement or its Services; or (iii) represent, directly
                  or indirectly, that any product or any service provided by Licensee has been used,
                  approved or endorsed by License.
                </li>
              </ol>
            </li>
            <li>Governing Law & Jurisdiction</li>
            This Agreement will be construed and interpreted in all respects in accordance with the
            laws of the state of California, without reference to its choice of law rules. Each
            party agrees to resolve any disputes arising out of or relating to this Agreement
            through binding arbitration in Los Angeles, CA administrated by the American Arbitration
            Association under its’ Commercial Arbitration Rules in front of one arbitrator mutually
            selected by the parties. Notwithstanding anything in this Agreement to the contrary,
            Symply may seek injunctive or other equitable relief in any court of competent
            jurisdiction to protect any actual or threatened misappropriation or infringement of its
            intellectual property rights or those of its licensors, and each party hereby submits to
            the jurisdiction of such courts and waives any objection thereto on the basis of
            improper venue, inconvenience of the forum or any other grounds. Licensee agrees that
            any breach of the license restrictions or other infringement or misappropriation of the
            intellectual property rights of Symply or its licensors may result in immediate and
            irreparable damage to Symply for which there is no adequate remedy at law. The United
            Nations Convention on Contracts for the International Sale of Goods in its entirety is
            expressly excluded from this Agreement. Furthermore, this Agreement will not be governed
            or interpreted in any way by referring to any law based on the Uniform Computer
            Information Transactions Act (UCITA) or any other act derived from or related to UCITA.
            <br />
            <br />
            <li>Notices</li>
            All notices permitted or required under this Agreement shall be in writing and shall be
            delivered by personal delivery, e-mail, or by certified or registered mail, return
            receipt requested, and shall be deemed given upon personal delivery, five (5) business
            days after deposit in the U.S. mail, or upon confirmation of transmission if sent by
            e-mail. Mailed notices shall be sent to the addresses set forth on the first page of
            this Agreement, or the then current address as indicated on either parties’ website.
            Licensee also Sensitivity: Confidential consents to receive communications from Symply
            electronically by e-mail. Licensee agrees that all agreements, notices, disclosures, and
            other communications that Symply provides to Licensee electronically satisfy any legal
            requirement that such communications be in writing, to the extent permitted by
            applicable law.
            <br />
            <br />
            <li>General Provisions</li>
            Licensee may not assign any rights under this Agreement without the prior written
            consent of Symply, which consent shall not be unreasonably withheld or delayed.
            Notwithstanding the foregoing, either party may assign this Agreement without the other
            party’s consent to: (a) an affiliate; or (b) any person, firm, organization, corporation
            or other entity which succeeds to the business of the party as a going concern of such
            party by acquisition, merger, reorganization or otherwise. Any purported assignment in
            violation of the preceding sentence is null and void. Subject to the foregoing, this
            Agreement shall be binding upon, and inure to the benefit of, the successors and assigns
            of the parties thereto. This Agreement, and any amendments hereto, by whatever means
            accepted, shall be treated in all manner and respects as an original contract and shall
            be considered to have the same binding legal effect as if it were an original signed
            version thereof, delivered in person. Neither party hereto shall argue that a contract
            was not formed hereunder based on either (i) the use of electronic means to deliver a
            signature or to indicate acceptance of this Agreement or (ii) the fact that any
            signature or acceptance of this Agreement was transmitted or communicated through
            electronic means; and each party forever waives any related defense. Except as otherwise
            specified in this Agreement, this Agreement may be amended or supplemented only by a
            writing that refers explicitly to this Agreement and that is signed on behalf of both
            parties. No waiver will be implied from conduct or failure to enforce rights. No waiver
            will be effective unless in a writing signed on behalf of the party against whom the
            waiver is asserted. If any term of this Agreement is found invalid or unenforceable that
            term will be enforced to the maximum extent permitted by law and the remainder of this
            Agreement will remain in full force. The parties are independent contractors and nothing
            contained herein shall be construed as creating an agency, partnership, or other form of
            joint enterprise between the parties. This Agreement represents the entire agreement
            between the parties relating to its subject matter and supersedes all prior and/or
            contemporaneous representations, discussions, negotiations and agreements, whether
            written or oral, except to the extent Symply makes any software or other products and
            services available to Licensee under separate written terms. The terms on any purchase
            order, confirmation, or similar document submitted by Licensee to Symply will have no
            effect and are hereby rejected. This Agreement shall not be interpreted or construed to
            confer any rights or remedies on any third parties. Neither party shall be liable to the
            other party or any third party for failure or delay in performing its obligations under
            this Agreement when such failure or delay is due to any cause beyond the control of the
            party concerned, including, without limitation, acts of God, governmental orders or
            restrictions, fire, or flood, provided that upon cessation of such events such party
            shall thereupon promptly perform or complete the performance of its obligations
            hereunder. This Agreement may be entered into in one or more counterparts, each of which
            will be deemed an original, and all of which taken together shall constitute one and the
            same instrument.
          </ol>
        </Text>
      </div>
    </BasicLayout>
  );
};

export default Terms;
