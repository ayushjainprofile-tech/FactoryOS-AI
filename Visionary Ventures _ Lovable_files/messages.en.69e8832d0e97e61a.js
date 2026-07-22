function plural(locale, input, options) { 
	return new Intl.PluralRules(locale, options).select(Number(input))
};


function number(locale, input, options) {
	return new Intl.NumberFormat(locale, options).format(Number(input))
};


function datetime(locale, input, options) {
	return new Intl.DateTimeFormat(locale, options).format(new Date( (input)))
};
const registry = { plural, number, datetime };
Object.assign(globalThis.__paraglide_ssr??={},{"abusepage_commitment_title1":/** @type {(inputs: Abusepage_Commitment_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our Commitment`)
},"abusepage_description1":/** @type {(inputs: Abusepage_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help us keep Lovable safe by reporting any abuse or policy violations. Please email us at <emailLink>abuse@lovable.dev</emailLink> to report abuse.`)
},"abusepage_meta_description1":/** @type {(inputs: Abusepage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help us keep Lovable safe by reporting any abuse or policy violations.`)
},"abusepage_meta_title1":/** @type {(inputs: Abusepage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to Report Abuse | Lovable`)
},"abusepage_responsibledisclosure_description2":/** @type {(inputs: Abusepage_Responsibledisclosure_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We follow responsible disclosure practices and appreciate your help in keeping Lovable secure.`)
},"abusepage_responsibledisclosure_title2":/** @type {(inputs: Abusepage_Responsibledisclosure_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responsible Disclosure`)
},"abusepage_securityfirst_description2":/** @type {(inputs: Abusepage_Securityfirst_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your security and privacy are our top priorities. All reports are handled confidentially.`)
},"abusepage_securityfirst_title2":/** @type {(inputs: Abusepage_Securityfirst_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security First`)
},"abusepage_title1":/** @type {(inputs: Abusepage_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to report abuse`)
},"abusepage_zerotolerance_description2":/** @type {(inputs: Abusepage_Zerotolerance_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We maintain a zero-tolerance policy for abuse and take immediate action when verified.`)
},"abusepage_zerotolerance_title2":/** @type {(inputs: Abusepage_Zerotolerance_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zero Tolerance`)
},"accountdropdown_invitations1":/** @type {(inputs: Accountdropdown_Invitations1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitations (${i?.count})`)
},"accountdropdown_settings1":/** @type {(inputs: Accountdropdown_Settings1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
},"accountdropdown_signout2":/** @type {(inputs: Accountdropdown_Signout2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out`)
},"accountsettings_appversion2":/** @type {(inputs: Accountsettings_Appversion2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version}`)
},"accountsettings_appversion_withbuild3":/** @type {(inputs: Accountsettings_Appversion_Withbuild3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} (${i?.buildNumber})`)
},"accountsettings_autoaccept_description2":/** @type {(inputs: Accountsettings_Autoaccept_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatically join workspaces and projects when invited instead of requiring manual acceptance.`)
},"accountsettings_autoaccept_label2":/** @type {(inputs: Accountsettings_Autoaccept_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-accept invitations`)
},"accountsettings_deleteaccount_canceldeletion3":/** @type {(inputs: Accountsettings_Deleteaccount_Canceldeletion3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel deletion`)
},"accountsettings_deleteaccount_delete2":/** @type {(inputs: Accountsettings_Deleteaccount_Delete2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete account`)
},"accountsettings_deleteaccount_description2":/** @type {(inputs: Accountsettings_Deleteaccount_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanently delete your Lovable account. This cannot be undone.`)
},"accountsettings_deleteaccount_label2":/** @type {(inputs: Accountsettings_Deleteaccount_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete account`)
},"accountsettings_deleteaccount_scheduleddescription3":/** @type {(inputs: Accountsettings_Deleteaccount_Scheduleddescription3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your account is scheduled to be deleted on ${i?.date}.`)
},"accountsettings_description1":/** @type {(inputs: Accountsettings_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalize how others see and interact with you on Lovable.`)
},"accountsettings_email_description1":/** @type {(inputs: Accountsettings_Email_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your email address associated with your account.`)
},"accountsettings_email_label1":/** @type {(inputs: Accountsettings_Email_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
},"accountsettings_email_placeholder1":/** @type {(inputs: Accountsettings_Email_Placeholder1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No email available`)
},"accountsettings_language_description1":/** @type {(inputs: Accountsettings_Language_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose the language Lovable uses for your account.`)
},"accountsettings_linkedaccounts_cancel2":/** @type {(inputs: Accountsettings_Linkedaccounts_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"accountsettings_linkedaccounts_description2":/** @type {(inputs: Accountsettings_Linkedaccounts_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage accounts linked for sign-in.`)
},"accountsettings_linkedaccounts_label2":/** @type {(inputs: Accountsettings_Linkedaccounts_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linked accounts`)
},"accountsettings_linkedaccounts_link2":/** @type {(inputs: Accountsettings_Linkedaccounts_Link2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
},"accountsettings_linkedaccounts_linkcompany3":/** @type {(inputs: Accountsettings_Linkedaccounts_Linkcompany3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link company account`)
},"accountsettings_linkedaccounts_linkcompanydescription4":/** @type {(inputs: Accountsettings_Linkedaccounts_Linkcompanydescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use your organization's single sign-on`)
},"accountsettings_linkedaccounts_namedsso3":/** @type {(inputs: Accountsettings_Linkedaccounts_Namedsso3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} SSO`)
},"accountsettings_linkedaccounts_password2":/** @type {(inputs: Accountsettings_Linkedaccounts_Password2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
},"accountsettings_linkedaccounts_primary2":/** @type {(inputs: Accountsettings_Linkedaccounts_Primary2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primary`)
},"accountsettings_linkedaccounts_sso2":/** @type {(inputs: Accountsettings_Linkedaccounts_Sso2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO`)
},"accountsettings_linkedaccounts_ssounlinkwarning4":/** @type {(inputs: Accountsettings_Linkedaccounts_Ssounlinkwarning4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You will lose access to any workspaces associated with this SSO provider.`)
},"accountsettings_linkedaccounts_unlink2":/** @type {(inputs: Accountsettings_Linkedaccounts_Unlink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlink`)
},"accountsettings_linkedaccounts_unlinkconfirmation3":/** @type {(inputs: Accountsettings_Linkedaccounts_Unlinkconfirmation3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This will disconnect ${i?.provider} from your account.`)
},"accountsettings_linkedaccounts_unlinkconfirmationwithemail5":/** @type {(inputs: Accountsettings_Linkedaccounts_Unlinkconfirmationwithemail5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This will disconnect ${i?.provider} (${i?.email}) from your account.`)
},"accountsettings_linkedaccounts_unlinked2":/** @type {(inputs: Accountsettings_Linkedaccounts_Unlinked2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider unlinked`)
},"accountsettings_linkedaccounts_unlinking2":/** @type {(inputs: Accountsettings_Linkedaccounts_Unlinking2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlinking...`)
},"accountsettings_linkedaccounts_unlinktitle3":/** @type {(inputs: Accountsettings_Linkedaccounts_Unlinktitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlink provider`)
},"accountsettings_linkedin_addtolinkedin4":/** @type {(inputs: Accountsettings_Linkedin_Addtolinkedin4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to LinkedIn`)
},"accountsettings_linkedin_connect1":/** @type {(inputs: Accountsettings_Linkedin_Connect1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect`)
},"accountsettings_linkedin_connecting1":/** @type {(inputs: Accountsettings_Linkedin_Connecting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecting...`)
},"accountsettings_linkedin_disconnect1":/** @type {(inputs: Accountsettings_Linkedin_Disconnect1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnect LinkedIn`)
},"accountsettings_linkedin_disconnecting1":/** @type {(inputs: Accountsettings_Linkedin_Disconnecting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnecting...`)
},"accountsettings_linkedin_dismiss1":/** @type {(inputs: Accountsettings_Linkedin_Dismiss1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
},"accountsettings_linkedin_viewonlinkedin4":/** @type {(inputs: Accountsettings_Linkedin_Viewonlinkedin4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View on LinkedIn`)
},"accountsettings_linkedincapabilities_choosedescription3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Choosedescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose one skill to showcase on your LinkedIn profile.`)
},"accountsettings_linkedincapabilities_connecttitle3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Connecttitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to LinkedIn to showcase a skill`)
},"accountsettings_linkedincapabilities_emptystate3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Emptystate3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No skills yet. Build apps that get real usage to unlock skills to showcase on your LinkedIn profile.`)
},"accountsettings_linkedincapabilities_ineligibletooltip3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Ineligibletooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You no longer qualify for this skill. Pick another to update your LinkedIn profile.`)
},"accountsettings_linkedincapabilities_loaderror3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Loaderror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't load your skills. Please try again.`)
},"accountsettings_linkedincapabilities_statusneedsattention4":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statusneedsattention4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs attention`)
},"accountsettings_linkedincapabilities_statusnotsynced4":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statusnotsynced4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not synced`)
},"accountsettings_linkedincapabilities_statusnotsyncedtooltip5":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statusnotsyncedtooltip5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click Add to LinkedIn to publish this skill.`)
},"accountsettings_linkedincapabilities_statussynced3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statussynced3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synced`)
},"accountsettings_linkedincapabilities_statussyncedtooltip4":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statussyncedtooltip4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synced to LinkedIn — this skill is live on your profile.`)
},"accountsettings_linkedincapabilities_statusupdateavailable4":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statusupdateavailable4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update available`)
},"accountsettings_linkedincapabilities_statusupdateavailabletooltip5":/** @type {(inputs: Accountsettings_Linkedincapabilities_Statusupdateavailabletooltip5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Top 10% status changed. Click Add to LinkedIn to update your profile.`)
},"accountsettings_linkedincapabilities_step1description3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Step1description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appears as a verified credibility signal on your profile.`)
},"accountsettings_linkedincapabilities_step1title3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Step1title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your skill will be shown publicly`)
},"accountsettings_linkedincapabilities_step2description3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Step2description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch skills or disconnect anytime from Settings.`)
},"accountsettings_linkedincapabilities_step2title3":/** @type {(inputs: Accountsettings_Linkedincapabilities_Step2title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control what you share`)
},"accountsettings_linkedincapabilities_syncing2":/** @type {(inputs: Accountsettings_Linkedincapabilities_Syncing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adding...`)
},"accountsettings_linkedincapabilities_title2":/** @type {(inputs: Accountsettings_Linkedincapabilities_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Showcase skills`)
},"accountsettings_linkedincapabilities_topuserbadgetooltip5":/** @type {(inputs: Accountsettings_Linkedincapabilities_Topuserbadgetooltip5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're in the top 10% of builders on Lovable. Add it to LinkedIn to show a Top User badge.`)
},"accountsettings_linkedincapabilities_topusercallout4":/** @type {(inputs: Accountsettings_Linkedincapabilities_Topusercallout4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're a top 10% builder on Lovable`)
},"accountsettings_linkedincapabilities_vibelevelretired4":/** @type {(inputs: Accountsettings_Linkedincapabilities_Vibelevelretired4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LinkedIn discontinued the Vibe coding level badge. Showcase a skill on your profile instead.`)
},"accountsettings_mfa_addanothermethod3":/** @type {(inputs: Accountsettings_Mfa_Addanothermethod3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add another method`)
},"accountsettings_mfa_alreadydisabled2":/** @type {(inputs: Accountsettings_Mfa_Alreadydisabled2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This 2FA method was already disabled`)
},"accountsettings_mfa_authenticatorapp2":/** @type {(inputs: Accountsettings_Mfa_Authenticatorapp2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authenticator app`)
},"accountsettings_mfa_disable1":/** @type {(inputs: Accountsettings_Mfa_Disable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disable`)
},"accountsettings_mfa_disabled1":/** @type {(inputs: Accountsettings_Mfa_Disabled1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two-factor authentication disabled`)
},"accountsettings_mfa_disablefailed2":/** @type {(inputs: Accountsettings_Mfa_Disablefailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to disable 2FA. Please try again.`)
},"accountsettings_mfa_disablephoneconfirmation3":/** @type {(inputs: Accountsettings_Mfa_Disablephoneconfirmation3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to disable phone verification? You will no longer receive SMS codes to verify your identity.`)
},"accountsettings_mfa_disabletitle2":/** @type {(inputs: Accountsettings_Mfa_Disabletitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disable two-factor authentication`)
},"accountsettings_mfa_disabletotpconfirmation3":/** @type {(inputs: Accountsettings_Mfa_Disabletotpconfirmation3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to disable the authenticator app? You will no longer be able to use it to verify your identity.`)
},"accountsettings_mfa_enable1":/** @type {(inputs: Accountsettings_Mfa_Enable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable`)
},"accountsettings_mfa_label1":/** @type {(inputs: Accountsettings_Mfa_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two‑factor authentication`)
},"accountsettings_mfa_managedescription2":/** @type {(inputs: Accountsettings_Mfa_Managedescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage your 2FA methods.`)
},"accountsettings_mfa_phone1":/** @type {(inputs: Accountsettings_Mfa_Phone1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phone`)
},"accountsettings_mfa_reauthandretry3":/** @type {(inputs: Accountsettings_Mfa_Reauthandretry3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please reauthenticate and try again`)
},"accountsettings_mfa_reauthdescription2":/** @type {(inputs: Accountsettings_Mfa_Reauthdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For security, please re‑authenticate to manage two‑factor settings.`)
},"accountsettings_mfa_reauthenticate1":/** @type {(inputs: Accountsettings_Mfa_Reauthenticate1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reauthenticate`)
},"accountsettings_mfa_reauthrequired2":/** @type {(inputs: Accountsettings_Mfa_Reauthrequired2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Re‑authentication required`)
},"accountsettings_mfa_sessionerror2":/** @type {(inputs: Accountsettings_Mfa_Sessionerror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Session error. Please sign in again.`)
},"accountsettings_mfa_sessionexpired2":/** @type {(inputs: Accountsettings_Mfa_Sessionexpired2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Session expired. Please sign in again.`)
},"accountsettings_mfa_setupdescription2":/** @type {(inputs: Accountsettings_Mfa_Setupdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secure your account with a one‑time code via an authenticator app or SMS.`)
},"accountsettings_mfa_signinrequired3":/** @type {(inputs: Accountsettings_Mfa_Signinrequired3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be signed in to enable 2FA`)
},"accountsettings_profile_descriptionuser2":/** @type {(inputs: Accountsettings_Profile_Descriptionuser2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change name, location, avatar, and banner on your profile.`)
},"accountsettings_profile_descriptionworkspace2":/** @type {(inputs: Accountsettings_Profile_Descriptionworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change name, avatar, and banner on your profile.`)
},"accountsettings_profile_label1":/** @type {(inputs: Accountsettings_Profile_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile`)
},"accountsettings_profile_managedbyorg3":/** @type {(inputs: Accountsettings_Profile_Managedbyorg3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One of your workspaces keeps member profiles private, so your public profile isn't discoverable.`)
},"accountsettings_profile_openprofile2":/** @type {(inputs: Accountsettings_Profile_Openprofile2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Open profile on lovable.dev/@${i?.username}`)
},"accountsettings_sound_description1":/** @type {(inputs: Accountsettings_Sound_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plays a satisfying sound notification when a generation is finished.`)
},"accountsettings_sound_label1":/** @type {(inputs: Accountsettings_Sound_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generation complete sound`)
},"accountsettings_sound_optionalways2":/** @type {(inputs: Accountsettings_Sound_Optionalways2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Always`)
},"accountsettings_sound_optionfirstgeneration3":/** @type {(inputs: Accountsettings_Sound_Optionfirstgeneration3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First generation`)
},"accountsettings_sound_optionnever2":/** @type {(inputs: Accountsettings_Sound_Optionnever2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Never`)
},"accountsettings_suggestions_description1":/** @type {(inputs: Accountsettings_Suggestions_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show helpful suggestions in the chat interface to enhance your experience.`)
},"accountsettings_suggestions_label1":/** @type {(inputs: Accountsettings_Suggestions_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat suggestions`)
},"accountsettings_title1":/** @type {(inputs: Accountsettings_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account settings`)
},"accountsettings_username_description1":/** @type {(inputs: Accountsettings_Username_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your public identifier and profile URL.`)
},"accountsettings_username_label1":/** @type {(inputs: Accountsettings_Username_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Username`)
},"accountsettings_username_set1":/** @type {(inputs: Accountsettings_Username_Set1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set username`)
},"accountsettings_username_update1":/** @type {(inputs: Accountsettings_Username_Update1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update`)
},"accountsettings_visibility_description1":/** @type {(inputs: Accountsettings_Visibility_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control who can see your public profile.`)
},"accountsettings_visibility_label1":/** @type {(inputs: Accountsettings_Visibility_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile visibility`)
},"accountsettings_visibility_managedbyorg3":/** @type {(inputs: Accountsettings_Visibility_Managedbyorg3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile visibility is managed by one of your workspaces.`)
},"accountsettings_visibility_private1":/** @type {(inputs: Accountsettings_Visibility_Private1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private`)
},"accountsettings_visibility_privatedescription2":/** @type {(inputs: Accountsettings_Visibility_Privatedescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your profile is hidden from public view`)
},"accountsettings_visibility_public1":/** @type {(inputs: Accountsettings_Visibility_Public1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public`)
},"accountsettings_visibility_publicdescription2":/** @type {(inputs: Accountsettings_Visibility_Publicdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your profile is visible to everyone`)
},"activityview_changes1":/** @type {(inputs: Activityview_Changes1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes`)
},"activityview_details1":/** @type {(inputs: Activityview_Details1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
},"activityview_loadingchanges2":/** @type {(inputs: Activityview_Loadingchanges2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading changes...`)
},"activityview_nochanges2":/** @type {(inputs: Activityview_Nochanges2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No changes made`)
},"activityview_timeline1":/** @type {(inputs: Activityview_Timeline1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timeline`)
},"activityview_timelineunavailable2":/** @type {(inputs: Activityview_Timelineunavailable2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timeline is not available for manual or external edits`)
},"adlandingpage_cta_button2":/** @type {(inputs: Adlandingpage_Cta_Button2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building`)
},"adlandingpage_cta_subtitle2":/** @type {(inputs: Adlandingpage_Cta_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe the app or website you want. Lovable turns the idea into a working project you can refine, connect, and ship.`)
},"adlandingpage_cta_title2":/** @type {(inputs: Adlandingpage_Cta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to turn your idea into an app?`)
},"adlandingpage_faq1_answer2":/** @type {(inputs: Adlandingpage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Lovable is made for non-technical founders. Describe what you want in plain English, then refine the result by chatting with AI.`)
},"adlandingpage_faq1_question2":/** @type {(inputs: Adlandingpage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need to code?`)
},"adlandingpage_faq2_answer2":/** @type {(inputs: Adlandingpage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can create apps, websites, dashboards, internal tools, e-commerce experiences, onboarding flows, and more. If you can describe it, you can build it.`)
},"adlandingpage_faq2_question2":/** @type {(inputs: Adlandingpage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What can I build with Lovable?`)
},"adlandingpage_faq3_answer2":/** @type {(inputs: Adlandingpage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Lovable builds with a real backend, authentication, database options, hosting, custom domains, and GitHub sync so your project can grow beyond a prototype.`)
},"adlandingpage_faq3_question2":/** @type {(inputs: Adlandingpage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I launch a real product?`)
},"adlandingpage_faq4_answer2":/** @type {(inputs: Adlandingpage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a prompt idea, adjust it to match your business, and press Enter. Lovable starts building from your description.`)
},"adlandingpage_faq4_question2":/** @type {(inputs: Adlandingpage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do the example prompts work?`)
},"adlandingpage_faq_title2":/** @type {(inputs: Adlandingpage_Faq_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"adlandingpage_feature1_description2":/** @type {(inputs: Adlandingpage_Feature1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat with Lovable like you would brief a developer. Describe the product, audience, pages, data, and integrations you need.`)
},"adlandingpage_feature1_title2":/** @type {(inputs: Adlandingpage_Feature1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe the idea`)
},"adlandingpage_feature2_description2":/** @type {(inputs: Adlandingpage_Feature2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable creates the frontend, backend, auth, database, and integrations so your idea has production-ready foundations from the start.`)
},"adlandingpage_feature2_title2":/** @type {(inputs: Adlandingpage_Feature2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get the app foundation`)
},"adlandingpage_feature3_description2":/** @type {(inputs: Adlandingpage_Feature3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep chatting to refine flows, copy, screens, and business logic, then publish with hosting, SEO, and a custom domain when you are ready.`)
},"adlandingpage_feature3_title2":/** @type {(inputs: Adlandingpage_Feature3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refine and ship`)
},"adlandingpage_features_subtitle2":/** @type {(inputs: Adlandingpage_Features_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create apps and websites by chatting with AI. If you can describe it, you can build it.`)
},"adlandingpage_features_title2":/** @type {(inputs: Adlandingpage_Features_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your idea, built with AI`)
},"adlandingpage_hero_subtitle2":/** @type {(inputs: Adlandingpage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create apps and websites by chatting with AI. If you can describe it, you can build it.`)
},"adlandingpage_hero_title2":/** @type {(inputs: Adlandingpage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn your ideas into apps in minutes`)
},"adlandingpage_meta_description2":/** @type {(inputs: Adlandingpage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create apps and websites by chatting with AI. Lovable helps founders turn ideas into working products in minutes.`)
},"adlandingpage_meta_title2":/** @type {(inputs: Adlandingpage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn your ideas into apps in minutes | Lovable`)
},"adlandingpage_prompttoken_ecommerce_label3":/** @type {(inputs: Adlandingpage_Prompttoken_Ecommerce_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecommerce website`)
},"adlandingpage_prompttoken_ecommerce_prompt3":/** @type {(inputs: Adlandingpage_Prompttoken_Ecommerce_Prompt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build an ecommerce website for a modern homeware brand with product categories, product detail pages, cart, checkout, customer accounts, and an admin area for managing inventory.`)
},"adlandingpage_prompttoken_education_label3":/** @type {(inputs: Adlandingpage_Prompttoken_Education_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Education game`)
},"adlandingpage_prompttoken_education_prompt3":/** @type {(inputs: Adlandingpage_Prompttoken_Education_Prompt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build an education game for kids learning math with levels, points, character rewards, mini quizzes, progress tracking, and a teacher dashboard.`)
},"adlandingpage_prompttoken_finance_label3":/** @type {(inputs: Adlandingpage_Prompttoken_Finance_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Financial management app`)
},"adlandingpage_prompttoken_finance_prompt3":/** @type {(inputs: Adlandingpage_Prompttoken_Finance_Prompt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a financial management app for freelancers with income and expense logging, monthly budgets, invoice status, cashflow charts, category filters, and a dashboard summary.`)
},"adlandingpage_prompttoken_health_label3":/** @type {(inputs: Adlandingpage_Prompttoken_Health_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Health & wellness app`)
},"adlandingpage_prompttoken_health_prompt3":/** @type {(inputs: Adlandingpage_Prompttoken_Health_Prompt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a health and wellness app with personalized goals, habit tracking, workout plans, meal reminders, mood check-ins, progress charts, and a simple coaching dashboard.`)
},"adlandingpage_prompttokens_label3":/** @type {(inputs: Adlandingpage_Prompttokens_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a starter prompt, then press Enter to build:`)
},"adlandingpage_testimonials_title2":/** @type {(inputs: Adlandingpage_Testimonials_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real founders, real products, real results`)
},"adlandingpage_usecase_ecommerce_description3":/** @type {(inputs: Adlandingpage_Usecase_Ecommerce_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch storefronts, marketplaces, booking flows, and payment-ready shopping experiences.`)
},"adlandingpage_usecase_ecommerce_title3":/** @type {(inputs: Adlandingpage_Usecase_Ecommerce_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecommerce website`)
},"adlandingpage_usecase_education_description3":/** @type {(inputs: Adlandingpage_Usecase_Education_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create interactive lessons, quizzes, levels, rewards, and dashboards that make learning feel like play.`)
},"adlandingpage_usecase_education_title3":/** @type {(inputs: Adlandingpage_Usecase_Education_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Education game`)
},"adlandingpage_usecase_finance_description3":/** @type {(inputs: Adlandingpage_Usecase_Finance_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build dashboards for budgets, revenue, expenses, invoices, forecasts, and founder metrics.`)
},"adlandingpage_usecase_finance_title3":/** @type {(inputs: Adlandingpage_Usecase_Finance_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Financial management app`)
},"adlandingpage_usecase_health_description3":/** @type {(inputs: Adlandingpage_Usecase_Health_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build goal tracking, coaching flows, wellness plans, reminders, and progress dashboards for healthier habits.`)
},"adlandingpage_usecase_health_title3":/** @type {(inputs: Adlandingpage_Usecase_Health_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Health & wellness app`)
},"adlandingpage_usecases_subtitle3":/** @type {(inputs: Adlandingpage_Usecases_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start with a prompt, then shape the product around your customers, operations, and business model.`)
},"adlandingpage_usecases_title3":/** @type {(inputs: Adlandingpage_Usecases_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What founders build with Lovable`)
},"asmarterlovablepage_card1_description3":/** @type {(inputs: Asmarterlovablepage_Card1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable plans more intelligently before it builds. It maps out your features in detail and creates a detailed, editable plan for you to review before writing a single line of code.`)
},"asmarterlovablepage_card1_title3":/** @type {(inputs: Asmarterlovablepage_Card1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Smarter planning`)
},"asmarterlovablepage_card2_description3":/** @type {(inputs: Asmarterlovablepage_Card2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See exactly what's happening at every step. Lovable generates detailed task lists and executes multi-step features independently thanks to a longer-running agent.`)
},"asmarterlovablepage_card2_title3":/** @type {(inputs: Asmarterlovablepage_Card2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stronger execution`)
},"asmarterlovablepage_card3_description3":/** @type {(inputs: Asmarterlovablepage_Card3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add ideas while Lovable runs in the background. Keep queuing prompts and collaborate on projects without waiting for your turn.`)
},"asmarterlovablepage_card3_title3":/** @type {(inputs: Asmarterlovablepage_Card3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hand off multiple tasks`)
},"asmarterlovablepage_card4_description3":/** @type {(inputs: Asmarterlovablepage_Card4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable tests your app like a real user would. It can explore your apps in-browser, takes screenshots, clicks buttons, and validates workflows before you publish.`)
},"asmarterlovablepage_card4_title3":/** @type {(inputs: Asmarterlovablepage_Card4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A bug hunter in every tab`)
},"asmarterlovablepage_card5_description3":/** @type {(inputs: Asmarterlovablepage_Card5_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to write and run frontend and backend tests for you, and it will identify and fix issues automatically.`)
},"asmarterlovablepage_card5_title3":/** @type {(inputs: Asmarterlovablepage_Card5_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automated testing on-demand`)
},"asmarterlovablepage_card6_description3":/** @type {(inputs: Asmarterlovablepage_Card6_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add professional authentication to your app with one prompt. A clean, one-click login that makes your product feel polished and trustworthy.`)
},"asmarterlovablepage_card6_title3":/** @type {(inputs: Asmarterlovablepage_Card6_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seamless Google sign-in`)
},"asmarterlovablepage_faq1_answer3":/** @type {(inputs: Asmarterlovablepage_Faq1_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable now plans smarter, executes longer and more complex builds autonomously with full visibility, and tests apps before you ship. You can hand off ambitious ideas and trust they'll be done right.`)
},"asmarterlovablepage_faq1_question3":/** @type {(inputs: Asmarterlovablepage_Faq1_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What's the big improvement here?`)
},"asmarterlovablepage_faq2_answer3":/** @type {(inputs: Asmarterlovablepage_Faq2_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan mode was previously called Chat mode. The name was changed to better reflect how the mode is intended to be used before implementation.`)
},"asmarterlovablepage_faq2_question3":/** @type {(inputs: Asmarterlovablepage_Faq2_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is Plan mode?`)
},"asmarterlovablepage_faq3_answer3":/** @type {(inputs: Asmarterlovablepage_Faq3_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan mode works similar to the old Chat mode. You can work through questions, explore ideas, map out features, and reason through your thinking before any code is written. The difference is that now Lovable creates a detailed plan for you to inspect and refine to make sure it fully understands your true vision before executing.`)
},"asmarterlovablepage_faq3_question3":/** @type {(inputs: Asmarterlovablepage_Faq3_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is new in Plan mode?`)
},"asmarterlovablepage_faq4_answer3":/** @type {(inputs: Asmarterlovablepage_Faq4_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can test and validate your app on demand, across both frontend and backend. It opens real browser sessions to simulate user flows — clicking buttons, navigating pages, and verifying UI behavior. Lovable also writes and runs frontend tests to catch issues before you ship. On the backend, Lovable can write and run edge function tests to validate APIs, data, and server-side logic. It can also call edge functions directly (including authenticated ones) to debug backend behavior in isolation. Just ask Lovable to write and run the tests for you.`)
},"asmarterlovablepage_faq4_question3":/** @type {(inputs: Asmarterlovablepage_Faq4_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does the new automated testing work?`)
},"asmarterlovablepage_faq5_answer3":/** @type {(inputs: Asmarterlovablepage_Faq5_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just ask Lovable to add Google sign-in and it generates the auth flow. Please note seamless Google sign-in is only available for Lovable Cloud apps.`)
},"asmarterlovablepage_faq5_question3":/** @type {(inputs: Asmarterlovablepage_Faq5_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I add Google sign-in easily to my apps?`)
},"asmarterlovablepage_faqtitle4":/** @type {(inputs: Asmarterlovablepage_Faqtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"asmarterlovablepage_hero_cta3":/** @type {(inputs: Asmarterlovablepage_Hero_Cta3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try it now`)
},"asmarterlovablepage_hero_label3":/** @type {(inputs: Asmarterlovablepage_Hero_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introducing a smarter Lovable`)
},"asmarterlovablepage_hero_subtitle3":/** @type {(inputs: Asmarterlovablepage_Hero_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can now handle complex builds more autonomously.`)
},"asmarterlovablepage_hero_title3":/** @type {(inputs: Asmarterlovablepage_Hero_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build more. Manage less.`)
},"asmarterlovablepage_meta_description3":/** @type {(inputs: Asmarterlovablepage_Meta_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can now handle complex builds more autonomously.`)
},"asmarterlovablepage_meta_title3":/** @type {(inputs: Asmarterlovablepage_Meta_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build more. Manage less. | Lovable`)
},"asmarterlovablepage_prompt103":/** @type {(inputs: Asmarterlovablepage_Prompt103Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spin up an invoicing system for clients`)
},"asmarterlovablepage_prompt113":/** @type {(inputs: Asmarterlovablepage_Prompt113Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a brand asset generator for my company`)
},"asmarterlovablepage_prompt123":/** @type {(inputs: Asmarterlovablepage_Prompt123Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make me a landing page I can ship today`)
},"asmarterlovablepage_prompt13":/** @type {(inputs: Asmarterlovablepage_Prompt13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make a campaign planner that would impress any CMO`)
},"asmarterlovablepage_prompt133":/** @type {(inputs: Asmarterlovablepage_Prompt133Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a digital storefront for my side-hustle`)
},"asmarterlovablepage_prompt23":/** @type {(inputs: Asmarterlovablepage_Prompt23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spin up a personalized client demo in Lovable that'll blow their socks off`)
},"asmarterlovablepage_prompt33":/** @type {(inputs: Asmarterlovablepage_Prompt33Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build me a customer dashboard with Google sign-in`)
},"asmarterlovablepage_prompt43":/** @type {(inputs: Asmarterlovablepage_Prompt43Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an AI sales agent to help me find customers`)
},"asmarterlovablepage_prompt53":/** @type {(inputs: Asmarterlovablepage_Prompt53Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a weekly metrics dashboard I can scan in two minutes`)
},"asmarterlovablepage_prompt63":/** @type {(inputs: Asmarterlovablepage_Prompt63Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a follow-up system so no lead goes cold`)
},"asmarterlovablepage_prompt73":/** @type {(inputs: Asmarterlovablepage_Prompt73Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a revenue forecast that autoupdates as deals close`)
},"asmarterlovablepage_prompt83":/** @type {(inputs: Asmarterlovablepage_Prompt83Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build me an expense tracker my team won't hate`)
},"asmarterlovablepage_prompt93":/** @type {(inputs: Asmarterlovablepage_Prompt93Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a customer feedback hub so insights stop living in Slack threads`)
},"asmarterlovablepage_prompts_title3":/** @type {(inputs: Asmarterlovablepage_Prompts_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try the new features now`)
},"asmarterlovablepage_section2_subtitle3":/** @type {(inputs: Asmarterlovablepage_Section2_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No more micromanaging every step or crossing your fingers before you hit publish. Lovable now plans out complex builds more thoroughly, executes them independently, and can check its own work before you ship.`)
},"asmarterlovablepage_section2_title3":/** @type {(inputs: Asmarterlovablepage_Section2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring big ideas to life faster`)
},"asmarterlovablepage_section3_subtitle3":/** @type {(inputs: Asmarterlovablepage_Section3_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop stitching together different tools for planning, building, testing, auth, and hosting. Get it all in one place so you can focus on what you're building, not how to ship it.`)
},"asmarterlovablepage_section3_title3":/** @type {(inputs: Asmarterlovablepage_Section3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you need to build, launch, and grow a real business`)
},"asmarterlovablepage_stat1_description3":/** @type {(inputs: Asmarterlovablepage_Stat1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Better at solving complex tasks autonomously`)
},"asmarterlovablepage_stat2_description3":/** @type {(inputs: Asmarterlovablepage_Stat2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fewer stalled builds`)
},"asmarterlovablepage_stat3_description3":/** @type {(inputs: Asmarterlovablepage_Stat3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fewer errors`)
},"asmarterlovablepage_stats_title3":/** @type {(inputs: Asmarterlovablepage_Stats_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get stronger builds straight out the gate`)
},"asmarterlovablepage_step1_description3":/** @type {(inputs: Asmarterlovablepage_Step1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give Lovable a complex task and walk away. It now plans more thoughtfully and works through longer builds without losing the plot.`)
},"asmarterlovablepage_step1_title3":/** @type {(inputs: Asmarterlovablepage_Step1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hand off the big stuff`)
},"asmarterlovablepage_step2_description3":/** @type {(inputs: Asmarterlovablepage_Step2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue multiple prompts and go grab a coffee. Lovable keeps working so you never lose momentum.`)
},"asmarterlovablepage_step2_title3":/** @type {(inputs: Asmarterlovablepage_Step2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue the small stuff`)
},"asmarterlovablepage_step3_description3":/** @type {(inputs: Asmarterlovablepage_Step3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can now test your apps like a real user and debug them like an experienced developer. Review production-ready work, not half-broken drafts.`)
},"asmarterlovablepage_step3_title3":/** @type {(inputs: Asmarterlovablepage_Step3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get higher-quality builds with fewer fixes`)
},"asmarterlovablepage_step4_description3":/** @type {(inputs: Asmarterlovablepage_Step4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove signup friction with seamless Google sign-in. One prompt, and you've got a clean authentication built into your app.`)
},"asmarterlovablepage_step4_title3":/** @type {(inputs: Asmarterlovablepage_Step4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Google sign-in with one prompt`)
},"asmarterlovablepage_testimonial1_quote3":/** @type {(inputs: Asmarterlovablepage_Testimonial1_Quote3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It's hard to imagine this isn't going to change everything we do.`)
},"asmarterlovablepage_testimonial2_quote3":/** @type {(inputs: Asmarterlovablepage_Testimonial2_Quote3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It's saved us millions of dollars, and we've come out with better solutions.`)
},"asmarterlovablepage_testimonial3_quote3":/** @type {(inputs: Asmarterlovablepage_Testimonial3_Quote3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before plan mode, my project roadmaps were more like treasure maps, vague, optimistic, and probably leading nowhere.`)
},"asmarterlovablepage_testimonials_title3":/** @type {(inputs: Asmarterlovablepage_Testimonials_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What our customers are saying`)
},"asyncwork_backgroundtasks2":/** @type {(inputs: Asyncwork_Backgroundtasks2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} background task.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} background tasks.`);
	return /** @type {LocalizedString} */ ("asyncWork_backgroundTasks");
},"asyncwork_gettingstarted2":/** @type {(inputs: Asyncwork_Gettingstarted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getting started…`)
},"asyncwork_opendetails2":/** @type {(inputs: Asyncwork_Opendetails2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open details`)
},"asyncwork_statuscompleted2":/** @type {(inputs: Asyncwork_Statuscompleted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
},"asyncwork_statusfailed2":/** @type {(inputs: Asyncwork_Statusfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed`)
},"asyncwork_statusrunning2":/** @type {(inputs: Asyncwork_Statusrunning2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running`)
},"asyncwork_statusspawning2":/** @type {(inputs: Asyncwork_Statusspawning2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starting…`)
},"asyncwork_tasksdone2":/** @type {(inputs: Asyncwork_Tasksdone2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done}/${i?.total} done`)
},"asyncwork_working1":/** @type {(inputs: Asyncwork_Working1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Working…`)
},"asyncwork_wrappingup2":/** @type {(inputs: Asyncwork_Wrappingup2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrapping up…`)
},"attachedfile_failedtoload3":/** @type {(inputs: Attachedfile_Failedtoload3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed to load ${i?.fileName}`)
},"attachimageactionmodal_screenshot3":/** @type {(inputs: Attachimageactionmodal_Screenshot3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take a screenshot`)
},"attachimageactionmodal_signin4":/** @type {(inputs: Attachimageactionmodal_Signin4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
},"attachimageactionmodal_signinpromptdescription6":/** @type {(inputs: Attachimageactionmodal_Signinpromptdescription6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach files and images, apply themes, connect integrations, and more by logging in.`)
},"attachimageactionmodal_signinprompttitle6":/** @type {(inputs: Attachimageactionmodal_Signinprompttitle6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlock more features`)
},"auth_accountlinking1":/** @type {(inputs: Auth_Accountlinking1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account Linking`)
},"auth_accountlinkingdescription2":/** @type {(inputs: Auth_Accountlinkingdescription2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You're signed in as ${i?.email}. Continue to link your account with ${i?.provider} SSO.`)
},"auth_alreadyhaveaccount2":/** @type {(inputs: Auth_Alreadyhaveaccount2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already have an account?`)
},"auth_bycontinuingsignup2":/** @type {(inputs: Auth_Bycontinuingsignup2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By continuing, you agree to the <termsLink>Terms of Service</termsLink> and <privacyLink>Privacy Policy</privacyLink>.`)
},"auth_choosessoprovider4":/** @type {(inputs: Auth_Choosessoprovider4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose SSO provider`)
},"auth_continue":/** @type {(inputs: Auth_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"auth_continuewithapple2":/** @type {(inputs: Auth_Continuewithapple2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with Apple`)
},"auth_continuewithgithub3":/** @type {(inputs: Auth_Continuewithgithub3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with GitHub`)
},"auth_continuewithgoogle2":/** @type {(inputs: Auth_Continuewithgoogle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with Google`)
},"auth_continuewithpassword2":/** @type {(inputs: Auth_Continuewithpassword2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with password`)
},"auth_continuewithsso4":/** @type {(inputs: Auth_Continuewithsso4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Continue with ${i?.provider} SSO`)
},"auth_createaccount1":/** @type {(inputs: Auth_Createaccount1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your account`)
},"auth_donthaveaccount2":/** @type {(inputs: Auth_Donthaveaccount2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don't have an account?`)
},"auth_edit":/** @type {(inputs: Auth_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
},"auth_email":/** @type {(inputs: Auth_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
},"auth_error":/** @type {(inputs: Auth_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
},"auth_errors_accountexistswithdifferentcredential4":/** @type {(inputs: Auth_Errors_Accountexistswithdifferentcredential4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An account with this email already exists. Please sign in with your existing account first, then you can link SSO from your account settings`)
},"auth_errors_accountexistswithemail3":/** @type {(inputs: Auth_Errors_Accountexistswithemail3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`An account with ${i?.email} already exists. Please sign in with your existing provider first.`)
},"auth_errors_accountoremailissue3":/** @type {(inputs: Auth_Errors_Accountoremailissue3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This email may already be in use with a different sign-in method, or there's an issue with your account. Please try signing in with a different method or contact support`)
},"auth_errors_alowercaseletter2":/** @type {(inputs: Auth_Errors_Alowercaseletter2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a lowercase letter (a-z)`)
},"auth_errors_anumber1":/** @type {(inputs: Auth_Errors_Anumber1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a number (0-9)`)
},"auth_errors_anuppercaseletter2":/** @type {(inputs: Auth_Errors_Anuppercaseletter2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`an uppercase letter (A-Z)`)
},"auth_errors_appdeleted1":/** @type {(inputs: Auth_Errors_Appdeleted1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The app has been deleted`)
},"auth_errors_appleauthfailed2":/** @type {(inputs: Auth_Errors_Appleauthfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apple authentication failed. If you have an existing account, please sign in with your original method first`)
},"auth_errors_aspecialcharacter2":/** @type {(inputs: Auth_Errors_Aspecialcharacter2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a special character (like !, @, #, $, etc.)`)
},"auth_errors_atleast8characters2":/** @type {(inputs: Auth_Errors_Atleast8characters2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`at least 8 characters`)
},"auth_errors_cancelledpopuprequest2":/** @type {(inputs: Auth_Errors_Cancelledpopuprequest2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another popup request was made before the previous one completed`)
},"auth_errors_captchacheckfailed2":/** @type {(inputs: Auth_Errors_Captchacheckfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security verification failed. Please try again.`)
},"auth_errors_credentialalreadyinuse3":/** @type {(inputs: Auth_Errors_Credentialalreadyinuse3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This credential is already associated with a different account, please sign in with your existing account first and link SSO from settings`)
},"auth_errors_emailalreadyinuse3":/** @type {(inputs: Auth_Errors_Emailalreadyinuse3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An account with this email already exists`)
},"auth_errors_emailnotallowed2":/** @type {(inputs: Auth_Errors_Emailnotallowed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to complete registration with this email address`)
},"auth_errors_errorcode471":/** @type {(inputs: Auth_Errors_Errorcode471Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO sign-in failed. Your email domain isn't on the verified-domains list of the workspace that owns this SSO connection. Ask your workspace administrator to verify your domain in workspace settings, then try again.`)
},"auth_errors_githubauthfailed2":/** @type {(inputs: Auth_Errors_Githubauthfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub authentication failed. If you have an existing account, please sign in with your original method first`)
},"auth_errors_googleauthfailed2":/** @type {(inputs: Auth_Errors_Googleauthfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google authentication failed. If you have an existing account, please sign in with your original method first`)
},"auth_errors_internalerror1":/** @type {(inputs: Auth_Errors_Internalerror1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An internal error occurred. Please try again`)
},"auth_errors_invalidapikey2":/** @type {(inputs: Auth_Errors_Invalidapikey2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid API key`)
},"auth_errors_invalidcredential1":/** @type {(inputs: Auth_Errors_Invalidcredential1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The provided credentials are invalid.`)
},"auth_errors_invalidemail1":/** @type {(inputs: Auth_Errors_Invalidemail1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a valid email address`)
},"auth_errors_invalidlogincredentials2":/** @type {(inputs: Auth_Errors_Invalidlogincredentials2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid email or password`)
},"auth_errors_invalidverificationcode2":/** @type {(inputs: Auth_Errors_Invalidverificationcode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The verification code is invalid, Please try again`)
},"auth_errors_invalidverificationid2":/** @type {(inputs: Auth_Errors_Invalidverificationid2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The verification ID is invalid, Please try again`)
},"auth_errors_missingpassword1":/** @type {(inputs: Auth_Errors_Missingpassword1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password is required`)
},"auth_errors_networkrequestfailed2":/** @type {(inputs: Auth_Errors_Networkrequestfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Network error. Please check your connection`)
},"auth_errors_operationnotallowed2":/** @type {(inputs: Auth_Errors_Operationnotallowed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This authentication method is not enabled`)
},"auth_errors_passwordmeetsrequirements2":/** @type {(inputs: Auth_Errors_Passwordmeetsrequirements2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password meets all requirements`)
},"auth_errors_passwordmustcontain2":/** @type {(inputs: Auth_Errors_Passwordmustcontain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password must contain`)
},"auth_errors_passwordvalidationfailed2":/** @type {(inputs: Auth_Errors_Passwordvalidationfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password validation has failed. Try using a password with at least 8 characters and one number (0-9).`)
},"auth_errors_popupblocked1":/** @type {(inputs: Auth_Errors_Popupblocked1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popup was blocked by your browser. Please allow popups for this site`)
},"auth_errors_popupclosedbyuser3":/** @type {(inputs: Auth_Errors_Popupclosedbyuser3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication popup was closed`)
},"auth_errors_provideralreadylinked2":/** @type {(inputs: Auth_Errors_Provideralreadylinked2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This sign-in method is already linked to your account. Please sign in with it directly.`)
},"auth_errors_provideralreadylinkedsignin3":/** @type {(inputs: Auth_Errors_Provideralreadylinkedsignin3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't finish signing you in with this method. Please try again, and contact support if the problem continues.`)
},"auth_errors_providercheckfaileddescription3":/** @type {(inputs: Auth_Errors_Providercheckfaileddescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again.`)
},"auth_errors_providercheckfailedtitle3":/** @type {(inputs: Auth_Errors_Providercheckfailedtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to verify your account`)
},"auth_errors_redirectresultmissing2":/** @type {(inputs: Auth_Errors_Redirectresultmissing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't complete sign-in. This can be caused by browser privacy settings blocking third-party cookies. Please try again, or use a different sign-in method.`)
},"auth_errors_requiresrecentlogin2":/** @type {(inputs: Auth_Errors_Requiresrecentlogin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This operation requires recent authentication. Please log in again`)
},"auth_errors_ssoauthfailed2":/** @type {(inputs: Auth_Errors_Ssoauthfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO authentication failed. Please sign in with your existing account first, then link SSO from your account settings`)
},"auth_errors_ssonolongeravailable3":/** @type {(inputs: Auth_Errors_Ssonolongeravailable3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO is no longer available for this workspace`)
},"auth_errors_ssonolongeravailabledescription4":/** @type {(inputs: Auth_Errors_Ssonolongeravailabledescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your organization's SSO is no longer available. Please sign in with your existing account method (email/password, Google, or GitHub) and contact your admin to re-enable SSO.`)
},"auth_errors_ssonotconfiguredforemail4":/** @type {(inputs: Auth_Errors_Ssonotconfiguredforemail4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't continue. Please contact your administrator if the problem persists.`)
},"auth_errors_thisemailaddress2":/** @type {(inputs: Auth_Errors_Thisemailaddress2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`this email address`)
},"auth_errors_toomanyrequests2":/** @type {(inputs: Auth_Errors_Toomanyrequests2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many requests. Please try again later`)
},"auth_errors_tryagainorusepassword4":/** @type {(inputs: Auth_Errors_Tryagainorusepassword4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again or use your existing sign-in method. You can link SSO after signing in.`)
},"auth_errors_unauthorizeddomain1":/** @type {(inputs: Auth_Errors_Unauthorizeddomain1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This domain is not authorized for SSO authentication. Please contact your workspace admin to add your domain to the allowed list, or sign in with your existing account method`)
},"auth_errors_usercancelled1":/** @type {(inputs: Auth_Errors_Usercancelled1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication was cancelled`)
},"auth_errors_userdisabled1":/** @type {(inputs: Auth_Errors_Userdisabled1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This user account has been disabled`)
},"auth_errors_usermismatch1":/** @type {(inputs: Auth_Errors_Usermismatch1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The credential does not match the current user, Please try again`)
},"auth_errors_usernotfound2":/** @type {(inputs: Auth_Errors_Usernotfound2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No user found with this email address`)
},"auth_errors_usertokenexpired2":/** @type {(inputs: Auth_Errors_Usertokenexpired2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your session has expired. Please log in again`)
},"auth_errors_weakpassword1":/** @type {(inputs: Auth_Errors_Weakpassword1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password should be at least 8 characters and contain at least one number (0-9)`)
},"auth_errors_webstorageunsupported2":/** @type {(inputs: Auth_Errors_Webstorageunsupported2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web storage is not supported or disabled`)
},"auth_errors_wrongpassword1":/** @type {(inputs: Auth_Errors_Wrongpassword1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incorrect password`)
},"auth_forgotpassword1":/** @type {(inputs: Auth_Forgotpassword1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot password?`)
},"auth_hidepassword1":/** @type {(inputs: Auth_Hidepassword1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide password`)
},"auth_lastused1":/** @type {(inputs: Auth_Lastused1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last used`)
},"auth_linkwithsso4":/** @type {(inputs: Auth_Linkwithsso4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Link with ${i?.provider} SSO`)
},"auth_loading":/** @type {(inputs: Auth_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"auth_login1":/** @type {(inputs: Auth_Login1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
},"auth_loginwithsso4":/** @type {(inputs: Auth_Loginwithsso4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Login with ${i?.provider} SSO`)
},"auth_or":/** @type {(inputs: Auth_OrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Or`)
},"auth_password":/** @type {(inputs: Auth_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
},"auth_passwordreset_backtologin3":/** @type {(inputs: Auth_Passwordreset_Backtologin3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to login`)
},"auth_passwordreset_description1":/** @type {(inputs: Auth_Passwordreset_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We'll email you a link to reset your password.`)
},"auth_passwordreset_emaillabel2":/** @type {(inputs: Auth_Passwordreset_Emaillabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email address`)
},"auth_passwordreset_emailplaceholder2":/** @type {(inputs: Auth_Passwordreset_Emailplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your email address`)
},"auth_passwordreset_errors_invalidemailtitle3":/** @type {(inputs: Auth_Passwordreset_Errors_Invalidemailtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid email`)
},"auth_passwordreset_errors_sendfailedtitle3":/** @type {(inputs: Auth_Passwordreset_Errors_Sendfailedtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error sending reset link`)
},"auth_passwordreset_errors_toomanyattemptstitle4":/** @type {(inputs: Auth_Passwordreset_Errors_Toomanyattemptstitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many attempts`)
},"auth_passwordreset_errors_tryagainlater3":/** @type {(inputs: Auth_Passwordreset_Errors_Tryagainlater3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again later.`)
},"auth_passwordreset_invalidemaildescription3":/** @type {(inputs: Auth_Passwordreset_Invalidemaildescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a valid email address.`)
},"auth_passwordreset_sendtothisemail4":/** @type {(inputs: Auth_Passwordreset_Sendtothisemail4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset link will be sent to this email`)
},"auth_passwordreset_sentdescription2":/** @type {(inputs: Auth_Passwordreset_Sentdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We've sent you a link to reset your password. Please check your email.`)
},"auth_passwordreset_senttitle2":/** @type {(inputs: Auth_Passwordreset_Senttitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your email`)
},"auth_passwordreset_submit1":/** @type {(inputs: Auth_Passwordreset_Submit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send reset link`)
},"auth_passwordreset_title1":/** @type {(inputs: Auth_Passwordreset_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset your password`)
},"auth_passwordreset_usedifferentemail3":/** @type {(inputs: Auth_Passwordreset_Usedifferentemail3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a different email`)
},"auth_recommended":/** @type {(inputs: Auth_RecommendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recommended`)
},"auth_recovery_checkemail_description1":/** @type {(inputs: Auth_Recovery_Checkemail_Description1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We've sent a link to ${i?.email}. Open it to set your password and get back into your account.`)
},"auth_recovery_checkemail_title1":/** @type {(inputs: Auth_Recovery_Checkemail_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your email`)
},"auth_recovery_emailmealink3":/** @type {(inputs: Auth_Recovery_Emailmealink3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email me a link`)
},"auth_recovery_linkfailed_description1":/** @type {(inputs: Auth_Recovery_Linkfailed_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't connect that provider to your existing account automatically. Set a password instead to get back in — we'll email you a link to set it.`)
},"auth_recovery_passwordrecovery_description1":/** @type {(inputs: Auth_Recovery_Passwordrecovery_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your SSO sign-in was removed and can no longer be used. Add a password to your account to sign in — we'll email you a link to set it.`)
},"auth_recovery_passwordrecovery_title1":/** @type {(inputs: Auth_Recovery_Passwordrecovery_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set a password for your account`)
},"auth_recovery_sendfailed1":/** @type {(inputs: Auth_Recovery_Sendfailed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't send the email. Please try again.`)
},"auth_recovery_ssorelink_description1":/** @type {(inputs: Auth_Recovery_Ssorelink_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your organization moved to a new SSO provider. Sign in with it to reconnect your account.`)
},"auth_recovery_ssorelink_title1":/** @type {(inputs: Auth_Recovery_Ssorelink_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconnect your account`)
},"auth_showpassword1":/** @type {(inputs: Auth_Showpassword1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show password`)
},"auth_signupwithsso5":/** @type {(inputs: Auth_Signupwithsso5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sign up with ${i?.provider} SSO`)
},"auth_ssoupsell1":/** @type {(inputs: Auth_Ssoupsell1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO available on <pricingLink>Business and Enterprise</pricingLink> plans`)
},"authaction_invalidmode2":/** @type {(inputs: Authaction_Invalidmode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid mode`)
},"authaction_invalidparameters2":/** @type {(inputs: Authaction_Invalidparameters2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid parameters`)
},"authaction_loading1":/** @type {(inputs: Authaction_Loading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"authaction_resetpassword_error_invalidcode3":/** @type {(inputs: Authaction_Resetpassword_Error_Invalidcode3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid action code`)
},"authaction_resetpassword_error_somethingwrong3":/** @type {(inputs: Authaction_Resetpassword_Error_Somethingwrong3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong`)
},"authaction_resetpassword_error_title2":/** @type {(inputs: Authaction_Resetpassword_Error_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
},"authaction_resetpassword_form_confirmpassword3":/** @type {(inputs: Authaction_Resetpassword_Form_Confirmpassword3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm Password`)
},"authaction_resetpassword_form_newpassword3":/** @type {(inputs: Authaction_Resetpassword_Form_Newpassword3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Password`)
},"authaction_resetpassword_form_submit2":/** @type {(inputs: Authaction_Resetpassword_Form_Submit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset Password`)
},"authaction_resetpassword_success_description2":/** @type {(inputs: Authaction_Resetpassword_Success_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your password has been updated`)
},"authaction_resetpassword_success_title2":/** @type {(inputs: Authaction_Resetpassword_Success_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password reset`)
},"authaction_resetpassword_title2":/** @type {(inputs: Authaction_Resetpassword_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset Your Password`)
},"authaction_resetpassword_validation_passwordsmismatch3":/** @type {(inputs: Authaction_Resetpassword_Validation_Passwordsmismatch3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwords do not match`)
},"authaction_tryagain2":/** @type {(inputs: Authaction_Tryagain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to follow the link in your email again or retry the action`)
},"authdialog_continuewithgithub4":/** @type {(inputs: Authdialog_Continuewithgithub4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with GitHub`)
},"authdialog_logindescription3":/** @type {(inputs: Authdialog_Logindescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to your account`)
},"authdialog_signupdescription3":/** @type {(inputs: Authdialog_Signupdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create free account`)
},"authdialog_title1":/** @type {(inputs: Authdialog_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building.`)
},"boltvslovablepage_comparison_codebase_description3":/** @type {(inputs: Boltvslovablepage_Comparison_Codebase_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scale apps further with Lovable's advanced codebase management and intelligent refactoring capabilities.`)
},"boltvslovablepage_comparison_codebase_title3":/** @type {(inputs: Boltvslovablepage_Comparison_Codebase_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codebase Scalability`)
},"boltvslovablepage_comparison_fullstack_description3":/** @type {(inputs: Boltvslovablepage_Comparison_Fullstack_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable's Supabase integration is more mature and has more capabilities than Bolt's.`)
},"boltvslovablepage_comparison_fullstack_title3":/** @type {(inputs: Boltvslovablepage_Comparison_Fullstack_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full stack capabilities`)
},"boltvslovablepage_comparison_github_description3":/** @type {(inputs: Boltvslovablepage_Comparison_Github_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2-way sync with GitHub — Combine Lovable with commits to code directly through your favorite code editor while maintaining perfect sync.`)
},"boltvslovablepage_comparison_github_title3":/** @type {(inputs: Boltvslovablepage_Comparison_Github_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Integration`)
},"boltvslovablepage_comparison_pricing_description3":/** @type {(inputs: Boltvslovablepage_Comparison_Pricing_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`While both platforms use credit-based pricing, Lovable's model is more efficient. It typically requires fewer credits to accomplish the same tasks due to more intelligent code generation and better context understanding.`)
},"boltvslovablepage_comparison_pricing_title3":/** @type {(inputs: Boltvslovablepage_Comparison_Pricing_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pricing Efficiency`)
},"boltvslovablepage_comparison_title3":/** @type {(inputs: Boltvslovablepage_Comparison_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capability Comparison`)
},"boltvslovablepage_cta_button3":/** @type {(inputs: Boltvslovablepage_Cta_Button3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try Lovable for free`)
},"boltvslovablepage_cta_subtitle3":/** @type {(inputs: Boltvslovablepage_Cta_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build apps by chatting with an AI.`)
},"boltvslovablepage_cta_title3":/** @type {(inputs: Boltvslovablepage_Cta_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idea to app in seconds`)
},"boltvslovablepage_faq1_answer3":/** @type {(inputs: Boltvslovablepage_Faq1_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Both Lovable and Bolt use credit-based pricing models where credits are consumed based on usage. The key difference is in efficiency - Lovable typically requires fewer credits to accomplish the same tasks due to more intelligent code generation and better context understanding.`)
},"boltvslovablepage_faq1_question3":/** @type {(inputs: Boltvslovablepage_Faq1_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do the pricing models compare?`)
},"boltvslovablepage_faq2_answer3":/** @type {(inputs: Boltvslovablepage_Faq2_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Both platforms are designed to be user-friendly, but Lovable's chat mode and visual editing features make it more accessible. Lovable also provides more precise control over your code and design changes.`)
},"boltvslovablepage_faq2_question3":/** @type {(inputs: Boltvslovablepage_Faq2_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which platform is easier to use?`)
},"boltvslovablepage_faq3_answer3":/** @type {(inputs: Boltvslovablepage_Faq3_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Both Lovable and Bolt support Supabase integration. However, Lovable goes further by offering GitHub two-way sync, allowing more flexibility.`)
},"boltvslovablepage_faq3_question3":/** @type {(inputs: Boltvslovablepage_Faq3_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do their integration capabilities compare?`)
},"boltvslovablepage_faqtitle4":/** @type {(inputs: Boltvslovablepage_Faqtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently Asked Questions`)
},"boltvslovablepage_features_freeerrors4":/** @type {(inputs: Boltvslovablepage_Features_Freeerrors4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free to fix errors`)
},"boltvslovablepage_features_githubsync4":/** @type {(inputs: Boltvslovablepage_Features_Githubsync4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub two-way sync`)
},"boltvslovablepage_features_header_feature3":/** @type {(inputs: Boltvslovablepage_Features_Header_Feature3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature`)
},"boltvslovablepage_features_importgithub4":/** @type {(inputs: Boltvslovablepage_Features_Importgithub4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import GitHub Project`)
},"boltvslovablepage_features_supabase3":/** @type {(inputs: Boltvslovablepage_Features_Supabase3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase Integration`)
},"boltvslovablepage_features_title3":/** @type {(inputs: Boltvslovablepage_Features_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Features Comparison`)
},"boltvslovablepage_features_uploadimage4":/** @type {(inputs: Boltvslovablepage_Features_Uploadimage4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload Image to use in app`)
},"boltvslovablepage_features_visualedits4":/** @type {(inputs: Boltvslovablepage_Features_Visualedits4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precision Visual Edits`)
},"boltvslovablepage_hero_cta3":/** @type {(inputs: Boltvslovablepage_Hero_Cta3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try Lovable for Free`)
},"boltvslovablepage_hero_subtitle3":/** @type {(inputs: Boltvslovablepage_Hero_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why 100s of thousands of people choose Lovable over Bolt.`)
},"boltvslovablepage_hero_title3":/** @type {(inputs: Boltvslovablepage_Hero_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparing Bolt vs. Lovable`)
},"brandpage_hero_contact1":/** @type {(inputs: Brandpage_Hero_Contact1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact: For media or press inquiries, please contact us at <emailLink>press@lovable.dev</emailLink>.`)
},"brandpage_hero_downloadlogos2":/** @type {(inputs: Brandpage_Hero_Downloadlogos2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Brand Hub`)
},"brandpage_hero_downloadphotos2":/** @type {(inputs: Brandpage_Hero_Downloadphotos2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download press photos`)
},"brandpage_hero_getintouch3":/** @type {(inputs: Brandpage_Hero_Getintouch3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get in touch!`)
},"brandpage_hero_title1":/** @type {(inputs: Brandpage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Press & Media Resources`)
},"brandpage_meta_description1":/** @type {(inputs: Brandpage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guidelines for using brand assets, logos, and design elements to ensure consistent and approved representation of the brand.`)
},"brandpage_meta_title1":/** @type {(inputs: Brandpage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Press Enquiries`)
},"builderchrome_activity_details1":/** @type {(inputs: Builderchrome_Activity_Details1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
},"builderchrome_activity_hidedetails2":/** @type {(inputs: Builderchrome_Activity_Hidedetails2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide details`)
},"builderchrome_activity_previewoutofdate4":/** @type {(inputs: Builderchrome_Activity_Previewoutofdate4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview is out of date`)
},"builderchrome_activity_previewupdatefailed3":/** @type {(inputs: Builderchrome_Activity_Previewupdatefailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't update the preview`)
},"builderchrome_activity_trytofix3":/** @type {(inputs: Builderchrome_Activity_Trytofix3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix`)
},"builderchrome_activity_updatepreview2":/** @type {(inputs: Builderchrome_Activity_Updatepreview2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update preview`)
},"builderchrome_activity_updatingpreview2":/** @type {(inputs: Builderchrome_Activity_Updatingpreview2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updating preview…`)
},"builderchrome_copied1":/** @type {(inputs: Builderchrome_Copied1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
},"builderchrome_copy1":/** @type {(inputs: Builderchrome_Copy1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
},"builderchrome_delegation_buildunsuccessful2":/** @type {(inputs: Builderchrome_Delegation_Buildunsuccessful2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build unsuccessful`)
},"builderchrome_documentcard_filelabel3":/** @type {(inputs: Builderchrome_Documentcard_Filelabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File:`)
},"builderchrome_messagecancelled2":/** @type {(inputs: Builderchrome_Messagecancelled2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This message was cancelled.`)
},"builderchrome_preview_pauseddescription2":/** @type {(inputs: Builderchrome_Preview_Pauseddescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We paused your preview while you were away.`)
},"builderchrome_preview_pauseddescriptionlongsession4":/** @type {(inputs: Builderchrome_Preview_Pauseddescriptionlongsession4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We paused your preview after a long session.`)
},"builderchrome_preview_pausedresume2":/** @type {(inputs: Builderchrome_Preview_Pausedresume2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep building`)
},"builderchrome_preview_pausedtitle2":/** @type {(inputs: Builderchrome_Preview_Pausedtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Still building?`)
},"builderchrome_preview_tryagain2":/** @type {(inputs: Builderchrome_Preview_Tryagain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"builderchrome_projectcards_error2":/** @type {(inputs: Builderchrome_Projectcards_Error2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project cards could not be shown.`)
},"builderchrome_projectcards_preparing2":/** @type {(inputs: Builderchrome_Projectcards_Preparing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparing project cards…`)
},"builderchrome_prototype_commentslabel2":/** @type {(inputs: Builderchrome_Prototype_Commentslabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Additional comments or refinement instructions`)
},"builderchrome_prototype_commentsplaceholder2":/** @type {(inputs: Builderchrome_Prototype_Commentsplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe changes, e.g. “make it warmer” or “improve readability” (optional)`)
},"builderchrome_prototype_minimize1":/** @type {(inputs: Builderchrome_Prototype_Minimize1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimize`)
},"builderchrome_prototype_previewdirection2":/** @type {(inputs: Builderchrome_Prototype_Previewdirection2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Preview ${i?.label} design direction`)
},"builderchrome_prototype_previewtitle2":/** @type {(inputs: Builderchrome_Prototype_Previewtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototype preview`)
},"builderchrome_prototype_refinelabel2":/** @type {(inputs: Builderchrome_Prototype_Refinelabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refine this prototype`)
},"builderchrome_prototype_scrollmore2":/** @type {(inputs: Builderchrome_Prototype_Scrollmore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scroll to more design directions`)
},"builderchrome_prototype_selectdirection2":/** @type {(inputs: Builderchrome_Prototype_Selectdirection2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Select ${i?.label} design direction`)
},"builderchrome_prototype_selectdirectionshort3":/** @type {(inputs: Builderchrome_Prototype_Selectdirectionshort3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select design direction`)
},"builderchrome_prototype_selecteddirection2":/** @type {(inputs: Builderchrome_Prototype_Selecteddirection2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selected design direction`)
},"builderchrome_prototype_show1":/** @type {(inputs: Builderchrome_Prototype_Show1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show ${i?.label}`)
},"builderchrome_prototype_useprompt2":/** @type {(inputs: Builderchrome_Prototype_Useprompt2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Use prompt: ${i?.prompt}`)
},"builderchrome_questions_allskipped2":/** @type {(inputs: Builderchrome_Questions_Allskipped2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All questions were skipped`)
},"builderchrome_questions_answersnotrendered3":/** @type {(inputs: Builderchrome_Questions_Answersnotrendered3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answers were submitted, but couldn't be rendered here.`)
},"builderchrome_questions_customanswer2":/** @type {(inputs: Builderchrome_Questions_Customanswer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom answer`)
},"builderchrome_questions_dismisslabel2":/** @type {(inputs: Builderchrome_Questions_Dismisslabel2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.skipLabel}: dismiss ${i?.target}`)
},"builderchrome_questions_dismisstargetall3":/** @type {(inputs: Builderchrome_Questions_Dismisstargetall3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`all questions`)
},"builderchrome_questions_dismisstargetone3":/** @type {(inputs: Builderchrome_Questions_Dismisstargetone3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`question`)
},"builderchrome_questions_next1":/** @type {(inputs: Builderchrome_Questions_Next1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next question`)
},"builderchrome_questions_nextlabel2":/** @type {(inputs: Builderchrome_Questions_Nextlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
},"builderchrome_questions_other1":/** @type {(inputs: Builderchrome_Questions_Other1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
},"builderchrome_questions_otherdescription2":/** @type {(inputs: Builderchrome_Questions_Otherdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provide your own custom answer`)
},"builderchrome_questions_prev1":/** @type {(inputs: Builderchrome_Questions_Prev1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous question`)
},"builderchrome_questions_review1":/** @type {(inputs: Builderchrome_Questions_Review1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
},"builderchrome_questions_reviewanswers2":/** @type {(inputs: Builderchrome_Questions_Reviewanswers2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review answers`)
},"builderchrome_questions_skipall2":/** @type {(inputs: Builderchrome_Questions_Skipall2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip all`)
},"builderchrome_questions_submit1":/** @type {(inputs: Builderchrome_Questions_Submit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit`)
},"builderchrome_questions_submitanswers2":/** @type {(inputs: Builderchrome_Questions_Submitanswers2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit answers`)
},"builderchrome_questions_writeyourown3":/** @type {(inputs: Builderchrome_Questions_Writeyourown3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write your own…`)
},"builderchrome_queue_addedmessage2":/** @type {(inputs: Builderchrome_Queue_Addedmessage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added message to queue`)
},"builderchrome_queue_beingedited2":/** @type {(inputs: Builderchrome_Queue_Beingedited2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being edited`)
},"builderchrome_queue_canceledit2":/** @type {(inputs: Builderchrome_Queue_Canceledit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel edit`)
},"builderchrome_queue_canceledittooltip3":/** @type {(inputs: Builderchrome_Queue_Canceledittooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel (Esc)`)
},"builderchrome_queue_clearconfirm2":/** @type {(inputs: Builderchrome_Queue_Clearconfirm2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to remove all messages from the queue? This action cannot be undone.`)
},"builderchrome_queue_clearqueue2":/** @type {(inputs: Builderchrome_Queue_Clearqueue2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear queue`)
},"builderchrome_queue_disabledattachments2":/** @type {(inputs: Builderchrome_Queue_Disabledattachments2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled for messages with attachments`)
},"builderchrome_queue_disabledselectedelements3":/** @type {(inputs: Builderchrome_Queue_Disabledselectedelements3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled for messages with selected elements`)
},"builderchrome_queue_dragtoreorder3":/** @type {(inputs: Builderchrome_Queue_Dragtoreorder3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag to reorder`)
},"builderchrome_queue_dragtoreordermessages4":/** @type {(inputs: Builderchrome_Queue_Dragtoreordermessages4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag to reorder messages`)
},"builderchrome_queue_edit1":/** @type {(inputs: Builderchrome_Queue_Edit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
},"builderchrome_queue_editandrepeat3":/** @type {(inputs: Builderchrome_Queue_Editandrepeat3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit & repeat`)
},"builderchrome_queue_editdisabledownership3":/** @type {(inputs: Builderchrome_Queue_Editdisabledownership3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled for messages from another user`)
},"builderchrome_queue_editplaceholder2":/** @type {(inputs: Builderchrome_Queue_Editplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your message...`)
},"builderchrome_queue_failedtoqueue3":/** @type {(inputs: Builderchrome_Queue_Failedtoqueue3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to queue message`)
},"builderchrome_queue_moreoptions2":/** @type {(inputs: Builderchrome_Queue_Moreoptions2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More options`)
},"builderchrome_queue_planmode2":/** @type {(inputs: Builderchrome_Queue_Planmode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan mode`)
},"builderchrome_queue_remove1":/** @type {(inputs: Builderchrome_Queue_Remove1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
},"builderchrome_queue_repeat1":/** @type {(inputs: Builderchrome_Queue_Repeat1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repeat`)
},"builderchrome_queue_repeatbadge2":/** @type {(inputs: Builderchrome_Queue_Repeatbadge2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}x`)
},"builderchrome_queue_repeatcount2":/** @type {(inputs: Builderchrome_Queue_Repeatcount2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repeat count`)
},"builderchrome_queue_repeattimes2":/** @type {(inputs: Builderchrome_Queue_Repeattimes2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Repeat ${i?.count} time`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Repeat ${i?.count} times`);
	return /** @type {LocalizedString} */ ("builderChrome_queue_repeatTimes");
},"builderchrome_queue_saveedit2":/** @type {(inputs: Builderchrome_Queue_Saveedit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save edit`)
},"builderchrome_queue_saveedittooltip3":/** @type {(inputs: Builderchrome_Queue_Saveedittooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save (Cmd/Ctrl+Enter)`)
},"builderchrome_queue_title1":/** @type {(inputs: Builderchrome_Queue_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue`)
},"builderchrome_queue_useraddedmessage3":/** @type {(inputs: Builderchrome_Queue_Useraddedmessage3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} added message to queue`)
},"builderchrome_queue_userediting2":/** @type {(inputs: Builderchrome_Queue_Userediting2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is editing`)
},"builderchrome_runtimeerror_dismiss2":/** @type {(inputs: Builderchrome_Runtimeerror_Dismiss2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss error`)
},"builderchrome_runtimeerror_fixshortcut3":/** @type {(inputs: Builderchrome_Runtimeerror_Fixshortcut3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mod return`)
},"builderchrome_runtimeerror_showlogs3":/** @type {(inputs: Builderchrome_Runtimeerror_Showlogs3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show logs`)
},"builderchrome_runtimeerror_title2":/** @type {(inputs: Builderchrome_Runtimeerror_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
},"builderchrome_select1":/** @type {(inputs: Builderchrome_Select1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select`)
},"builderchrome_showless2":/** @type {(inputs: Builderchrome_Showless2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
},"builderchrome_showmore2":/** @type {(inputs: Builderchrome_Showmore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
},"builderchrome_skip1":/** @type {(inputs: Builderchrome_Skip1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip`)
},"builderchrome_tasks_empty1":/** @type {(inputs: Builderchrome_Tasks_Empty1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tasks tracked yet.`)
},"builderchrome_timeline_done1":/** @type {(inputs: Builderchrome_Timeline_Done1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
},"builderchrome_unknownerror2":/** @type {(inputs: Builderchrome_Unknownerror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown error`)
},"builderchrome_visualchoice_bodyfont3":/** @type {(inputs: Builderchrome_Visualchoice_Bodyfont3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Body - ${i?.font}`)
},"builderchrome_visualchoice_fontpreview3":/** @type {(inputs: Builderchrome_Visualchoice_Fontpreview3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The quick brown fox jumps over`)
},"builderchrome_visualchoice_previewunavailable3":/** @type {(inputs: Builderchrome_Visualchoice_Previewunavailable3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview unavailable`)
},"builderchrome_visualchoice_titlefont3":/** @type {(inputs: Builderchrome_Visualchoice_Titlefont3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Title - ${i?.font}`)
},"builderchrome_visualization_error1":/** @type {(inputs: Builderchrome_Visualization_Error1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualization could not be rendered.`)
},"builderchrome_visualization_rendering1":/** @type {(inputs: Builderchrome_Visualization_Rendering1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rendering visualization…`)
},"careerspage_benefit1_description1":/** @type {(inputs: Careerspage_Benefit1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meaningful equity so every team member has skin in the game.`)
},"careerspage_benefit1_title1":/** @type {(inputs: Careerspage_Benefit1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Equity upside`)
},"careerspage_benefit2_description1":/** @type {(inputs: Careerspage_Benefit2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprehensive health coverage plus wellness budget for gym, sports clubs, and more.`)
},"careerspage_benefit2_title1":/** @type {(inputs: Careerspage_Benefit2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wellness & health`)
},"careerspage_benefit3_description1":/** @type {(inputs: Careerspage_Benefit3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generous parental leave topped up globally, no matter where you are.`)
},"careerspage_benefit3_title1":/** @type {(inputs: Careerspage_Benefit3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paid parental leave`)
},"careerspage_benefit4_description1":/** @type {(inputs: Careerspage_Benefit4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All the AI tools you need, fully covered. No limits, no approvals, just build.`)
},"careerspage_benefit4_title1":/** @type {(inputs: Careerspage_Benefit4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlimited AI access`)
},"careerspage_benefit5_description1":/** @type {(inputs: Careerspage_Benefit5_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moving countries is a big deal. We help make it a little less so.`)
},"careerspage_benefit5_title1":/** @type {(inputs: Careerspage_Benefit5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relocation support`)
},"careerspage_benefits_label1":/** @type {(inputs: Careerspage_Benefits_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Global benefits`)
},"careerspage_community_group11":/** @type {(inputs: Careerspage_Community_Group11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parents at Lovable`)
},"careerspage_community_group21":/** @type {(inputs: Careerspage_Community_Group21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`International community`)
},"careerspage_community_group31":/** @type {(inputs: Careerspage_Community_Group31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable ladies`)
},"careerspage_community_group41":/** @type {(inputs: Careerspage_Community_Group41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable sports club`)
},"careerspage_community_label1":/** @type {(inputs: Careerspage_Community_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community Groups`)
},"careerspage_community_members1":/** @type {(inputs: Careerspage_Community_Members1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Members`)
},"careerspage_community_nationalities1":/** @type {(inputs: Careerspage_Community_Nationalities1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nationalities`)
},"careerspage_culturefit_item2_body2":/** @type {(inputs: Careerspage_Culturefit_Item2_Body2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move fast, ship often. Results over talk. When things get messy, lean in. That's where the opportunity is.`)
},"careerspage_culturefit_item2_chip12":/** @type {(inputs: Careerspage_Culturefit_Item2_Chip12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship`)
},"careerspage_culturefit_item2_chip22":/** @type {(inputs: Careerspage_Culturefit_Item2_Chip22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results over talk`)
},"careerspage_culturefit_item2_chip32":/** @type {(inputs: Careerspage_Culturefit_Item2_Chip32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Focused urgency`)
},"careerspage_culturefit_item2_chip42":/** @type {(inputs: Careerspage_Culturefit_Item2_Chip42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thrive in chaos`)
},"careerspage_culturefit_item2_headlinea3":/** @type {(inputs: Careerspage_Culturefit_Item2_Headlinea3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are a driver.`)
},"careerspage_culturefit_item2_headlineb3":/** @type {(inputs: Careerspage_Culturefit_Item2_Headlineb3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not a passenger.`)
},"careerspage_culturefit_item3_body2":/** @type {(inputs: Careerspage_Culturefit_Item3_Body2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Put customers first. Obsess over the craft. Have the courage to do things differently — even when the easier path is right there.`)
},"careerspage_culturefit_item3_chip12":/** @type {(inputs: Careerspage_Culturefit_Item3_Chip12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Customers first`)
},"careerspage_culturefit_item3_chip22":/** @type {(inputs: Careerspage_Culturefit_Item3_Chip22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exceptional craft`)
},"careerspage_culturefit_item3_chip32":/** @type {(inputs: Careerspage_Culturefit_Item3_Chip32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dare to be different`)
},"careerspage_culturefit_item3_headlinea3":/** @type {(inputs: Careerspage_Culturefit_Item3_Headlinea3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You care deeply.`)
},"careerspage_culturefit_item4_body2":/** @type {(inputs: Careerspage_Culturefit_Item4_Body2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hold a high bar. Choose candor over comfort. Lift the people around you — and leave your ego at the door.`)
},"careerspage_culturefit_item4_chip12":/** @type {(inputs: Careerspage_Culturefit_Item4_Chip12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obsess over talent`)
},"careerspage_culturefit_item4_chip22":/** @type {(inputs: Careerspage_Culturefit_Item4_Chip22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Candor over comfort`)
},"careerspage_culturefit_item4_chip32":/** @type {(inputs: Careerspage_Culturefit_Item4_Chip32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lift the collective`)
},"careerspage_culturefit_item4_headlinea3":/** @type {(inputs: Careerspage_Culturefit_Item4_Headlinea3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You want to`)
},"careerspage_culturefit_item4_headlineb3":/** @type {(inputs: Careerspage_Culturefit_Item4_Headlineb3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`build a legacy.`)
},"careerspage_culturefit_label2":/** @type {(inputs: Careerspage_Culturefit_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You'll love it here if...`)
},"careerspage_hero_cta1":/** @type {(inputs: Careerspage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See open positions`)
},"careerspage_hero_subtitle1":/** @type {(inputs: Careerspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We're a team of founders, builders, and scientists. If you're obsessed with impact and excited about democratizing software creation, then you've come to the right place.`)
},"careerspage_hero_titleline12":/** @type {(inputs: Careerspage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlock`)
},"careerspage_hero_titleline22":/** @type {(inputs: Careerspage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creativity`)
},"careerspage_location_highlight1":/** @type {(inputs: Careerspage_Location_Highlight1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`around the world.`)
},"careerspage_location_in1":/** @type {(inputs: Careerspage_Location_In1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In `)
},"careerspage_location_intro1":/** @type {(inputs: Careerspage_Location_Intro1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You'll find us `)
},"careerspage_meta_description1":/** @type {(inputs: Careerspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join our world-class team of engineers, designers, and builders shaping the future of software creation.`)
},"careerspage_meta_title1":/** @type {(inputs: Careerspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Careers at Lovable - The last piece of software`)
},"careerspage_openroles_subtitle2":/** @type {(inputs: Careerspage_Openroles_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the team.`)
},"careerspage_openroles_title2":/** @type {(inputs: Careerspage_Openroles_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open roles.`)
},"careerspage_people_lovablepeople2":/** @type {(inputs: Careerspage_People_Lovablepeople2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable People`)
},"careerspage_people_nationalities1":/** @type {(inputs: Careerspage_People_Nationalities1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nationalities`)
},"chat_emptystate1":/** @type {(inputs: Chat_Emptystate1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What would you like to build?`)
},"chat_scrolltobottom2":/** @type {(inputs: Chat_Scrolltobottom2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scroll to bottom`)
},"chatgptapppage_cta_cta2":/** @type {(inputs: Chatgptapppage_Cta_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try it in ChatGPT now`)
},"chatgptapppage_cta_subtitle2":/** @type {(inputs: Chatgptapppage_Cta_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move from ChatGPT brainstorms to real apps in minutes with Lovable.`)
},"chatgptapppage_cta_title2":/** @type {(inputs: Chatgptapppage_Cta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop drafting. Start shipping.`)
},"chatgptapppage_faq1_answer2":/** @type {(inputs: Chatgptapppage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Lovable app in ChatGPT lets you create websites and apps directly from your conversations. Simply tag @Lovable in ChatGPT and ask something like: "Turn this into a real working website." The first time you use the app, ChatGPT will prompt you to connect it so you know what data may be shared. After that, the Lovable app can start transforming your ideas and discussions into working websites and full-stack apps whenever you ask it to. Then you can jump straight into Lovable to edit, customize, and ship your creation.`)
},"chatgptapppage_faq1_question2":/** @type {(inputs: Chatgptapppage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I connect the Lovable app in ChatGPT?`)
},"chatgptapppage_faq2_answer2":/** @type {(inputs: Chatgptapppage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfortunately, right now ChatGPT apps are only available for all logged-in ChatGPT users outside of the EU.`)
},"chatgptapppage_faq2_question2":/** @type {(inputs: Chatgptapppage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why can't I access the app?`)
},"chatgptapppage_faq3_answer2":/** @type {(inputs: Chatgptapppage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You will not be charged any Lovable credits until you send the prompt to Lovable and it begins to build from the prompt.`)
},"chatgptapppage_faq3_question2":/** @type {(inputs: Chatgptapppage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How will credits work?`)
},"chatgptapppage_faq4_answer2":/** @type {(inputs: Chatgptapppage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For the initial release you need to open Lovable to continue editing your app or website.`)
},"chatgptapppage_faq4_question2":/** @type {(inputs: Chatgptapppage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I continue editing my Lovable project in ChatGPT?`)
},"chatgptapppage_faq5_answer2":/** @type {(inputs: Chatgptapppage_Faq5_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your ChatGPT prompt will be used as an initial prompt to start building a new project.`)
},"chatgptapppage_faq5_question2":/** @type {(inputs: Chatgptapppage_Faq5_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I send my prompt from ChatGPT for Lovable to use in chat mode, or will it automatically start building a project from the prompt?`)
},"chatgptapppage_feature1_desc2":/** @type {(inputs: Chatgptapppage_Feature1_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ChatGPT and Lovable work together to turn your ideas into real apps and websites based on your conversations and preferences.`)
},"chatgptapppage_feature1_title2":/** @type {(inputs: Chatgptapppage_Feature1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move from conversations to creations`)
},"chatgptapppage_feature2_desc2":/** @type {(inputs: Chatgptapppage_Feature2_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sharpen your thinking with ChatGPT, then let Lovable create real interactive prototypes based on your conversations.`)
},"chatgptapppage_feature2_title2":/** @type {(inputs: Chatgptapppage_Feature2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn ideas into something tangible`)
},"chatgptapppage_feature3_desc2":/** @type {(inputs: Chatgptapppage_Feature3_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transform raw brainstorms in ChatGPT into a real, working website or app you can use, test, and publish.`)
},"chatgptapppage_feature3_title2":/** @type {(inputs: Chatgptapppage_Feature3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building your business today`)
},"chatgptapppage_feature4_desc2":/** @type {(inputs: Chatgptapppage_Feature4_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe a tool, workflow, or webpage in ChatGPT and Lovable will turn it into a clickable prototype that gets everyone on the same page.`)
},"chatgptapppage_feature4_title2":/** @type {(inputs: Chatgptapppage_Feature4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get your team onboard quickly`)
},"chatgptapppage_feature5_desc2":/** @type {(inputs: Chatgptapppage_Feature5_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn messy spreadsheets, workarounds, or workflows into a real app or website tailored to your teams' needs straight from ChatGPT.`)
},"chatgptapppage_feature5_title2":/** @type {(inputs: Chatgptapppage_Feature5_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create internal tools on demand.`)
},"chatgptapppage_feature6_desc2":/** @type {(inputs: Chatgptapppage_Feature6_Desc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate a tailored demo or website that you can put in front of your customers today straight from your conversation.`)
},"chatgptapppage_feature6_title2":/** @type {(inputs: Chatgptapppage_Feature6_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build clickable mockups minutes.`)
},"chatgptapppage_features_subtitle2":/** @type {(inputs: Chatgptapppage_Features_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.`)
},"chatgptapppage_features_title2":/** @type {(inputs: Chatgptapppage_Features_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe what you want to create with ChatGPT. Make it real with Lovable.`)
},"chatgptapppage_hero_cta2":/** @type {(inputs: Chatgptapppage_Hero_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try it in ChatGPT now`)
},"chatgptapppage_hero_label2":/** @type {(inputs: Chatgptapppage_Hero_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable ChatGPT App`)
},"chatgptapppage_hero_subtitle2":/** @type {(inputs: Chatgptapppage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Now you can turn your greatest ideas into full-stack apps straight from ChatGPT.`)
},"chatgptapppage_hero_title2":/** @type {(inputs: Chatgptapppage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan it with ChatGPT. Build it with Lovable.`)
},"chatgptapppage_meta_description2":/** @type {(inputs: Chatgptapppage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Now you can turn your greatest ideas into full-stack apps straight from ChatGPT.`)
},"chatgptapppage_meta_title2":/** @type {(inputs: Chatgptapppage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan it with ChatGPT. Build it with Lovable.`)
},"chatgptapppage_prompt102":/** @type {(inputs: Chatgptapppage_Prompt102Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make me a landing page I can ship today in Lovable.`)
},"chatgptapppage_prompt112":/** @type {(inputs: Chatgptapppage_Prompt112Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a digital storefront for my side-hustle merch line in Lovable.`)
},"chatgptapppage_prompt12":/** @type {(inputs: Chatgptapppage_Prompt12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable, make a campaign planner my CMO will love.`)
},"chatgptapppage_prompt22":/** @type {(inputs: Chatgptapppage_Prompt22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build me an approval flow in Lovable so people stop YOLO-purchasing software.`)
},"chatgptapppage_prompt32":/** @type {(inputs: Chatgptapppage_Prompt32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spin up a personalized client demo in Lovable that'll blow their socks off.`)
},"chatgptapppage_prompt42":/** @type {(inputs: Chatgptapppage_Prompt42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make me a rollout tracker in Lovable that keeps marketing and product in sync.`)
},"chatgptapppage_prompt52":/** @type {(inputs: Chatgptapppage_Prompt52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an expense portal that doesn't feel like a punishment in Lovable.`)
},"chatgptapppage_prompt62":/** @type {(inputs: Chatgptapppage_Prompt62Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spin up a Lovable microsite that'll make my portfolio shine.`)
},"chatgptapppage_prompt72":/** @type {(inputs: Chatgptapppage_Prompt72Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an OKR tracker that doesn't become a graveyard by Q3 in Lovable.`)
},"chatgptapppage_prompt82":/** @type {(inputs: Chatgptapppage_Prompt82Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build me a clickable prototype that'll wow my devs in Lovable.`)
},"chatgptapppage_prompt92":/** @type {(inputs: Chatgptapppage_Prompt92Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spin up an app MVP that'll impress any engineer in Lovable.`)
},"chatgptapppage_prompts_title2":/** @type {(inputs: Chatgptapppage_Prompts_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More ways to chat with Lovable.`)
},"chatgptapppage_step1_description2":/** @type {(inputs: Chatgptapppage_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn your ChatGPT brainstorms into full-stack apps in minutes without having to leave your chat.`)
},"chatgptapppage_step1_title2":/** @type {(inputs: Chatgptapppage_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn any conversation into a working application`)
},"chatgptapppage_step2_description2":/** @type {(inputs: Chatgptapppage_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag @Lovable in ChatGPT and instantly transform discussions, notes, and ideas into interactive prototypes.`)
},"chatgptapppage_step2_title2":/** @type {(inputs: Chatgptapppage_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring ideas to life the second they spark`)
},"chatgptapppage_step3_description2":/** @type {(inputs: Chatgptapppage_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sharpen and polish your ideas in ChatGPT to set the stage for a successful build. Then jump straight into Lovable to iterate on your creation.`)
},"chatgptapppage_step3_title2":/** @type {(inputs: Chatgptapppage_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Think deeper. Build better.`)
},"chatgptapppage_steps_subtitle2":/** @type {(inputs: Chatgptapppage_Steps_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`With ChatGPT your brainstorming gets sharper, because it knows what matters to you. Now, you can turn your ideas straight into production-ready software based on your conversations, simply by tagging @Lovable.`)
},"chatgptapppage_steps_title2":/** @type {(inputs: Chatgptapppage_Steps_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn your best ChatGPT brainstorms into your best work.`)
},"chathistory_bookmarkreverteddisabledreason4":/** @type {(inputs: Chathistory_Bookmarkreverteddisabledreason4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can't bookmark reverted edits`)
},"chathistory_bookmarkswitchtobase4":/** @type {(inputs: Chathistory_Bookmarkswitchtobase4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to Base to bookmark this edit`)
},"chathistory_bookmarkunavailable2":/** @type {(inputs: Chathistory_Bookmarkunavailable2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bookmarking unavailable for this item`)
},"chathistory_checkingpermissions2":/** @type {(inputs: Chathistory_Checkingpermissions2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking permissions`)
},"chathistory_collapsedraft2":/** @type {(inputs: Chathistory_Collapsedraft2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Collapse draft "${i?.label}"`)
},"chathistory_editoraccessdisabledreason4":/** @type {(inputs: Chathistory_Editoraccessdisabledreason4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need editor access to modify drafts`)
},"chathistory_expanddraft2":/** @type {(inputs: Chathistory_Expanddraft2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Expand draft "${i?.label}"`)
},"chathistory_gotomessage3":/** @type {(inputs: Chathistory_Gotomessage3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to message in chat`)
},"chathistory_hide1":/** @type {(inputs: Chathistory_Hide1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide`)
},"chathistory_loaderror2":/** @type {(inputs: Chathistory_Loaderror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load bookmarks.`)
},"chathistory_loadingmorebookmarks3":/** @type {(inputs: Chathistory_Loadingmorebookmarks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading more bookmarks`)
},"chathistory_loadingolderbookmarks3":/** @type {(inputs: Chathistory_Loadingolderbookmarks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading older bookmarks`)
},"chathistory_loadmorebookmarks3":/** @type {(inputs: Chathistory_Loadmorebookmarks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more bookmarks`)
},"chathistory_loadolderbookmarks3":/** @type {(inputs: Chathistory_Loadolderbookmarks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load older bookmarks`)
},"chathistory_moreactions2":/** @type {(inputs: Chathistory_Moreactions2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More actions`)
},"chathistory_nobookmarksyet3":/** @type {(inputs: Chathistory_Nobookmarksyet3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No bookmarks yet.`)
},"chathistory_noeditsindraft4":/** @type {(inputs: Chathistory_Noeditsindraft4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No edits in this draft yet.`)
},"chathistory_noeditsyet3":/** @type {(inputs: Chathistory_Noeditsyet3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No edits yet. Start building to see your project history here.`)
},"chathistory_norecentbookmarks3":/** @type {(inputs: Chathistory_Norecentbookmarks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No recent bookmarks.`)
},"chathistory_openpreviewinnewtab5":/** @type {(inputs: Chathistory_Openpreviewinnewtab5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open preview in new tab`)
},"chathistory_previewonlydisabledreason4":/** @type {(inputs: Chathistory_Previewonlydisabledreason4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview-only viewers can't modify drafts`)
},"chathistory_published1":/** @type {(inputs: Chathistory_Published1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
},"chathistory_publishedon2":/** @type {(inputs: Chathistory_Publishedon2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Published on ${i?.date}`)
},"chathistory_revert1":/** @type {(inputs: Chathistory_Revert1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revert`)
},"chathistory_revertbusy2":/** @type {(inputs: Chathistory_Revertbusy2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is busy. Wait for the current operation to finish, then try again.`)
},"chathistory_revertcurrentversion3":/** @type {(inputs: Chathistory_Revertcurrentversion3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cannot revert to the current version`)
},"chathistory_revertdeletingdraft3":/** @type {(inputs: Chathistory_Revertdeletingdraft3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleting draft`)
},"chathistory_revertededits2":/** @type {(inputs: Chathistory_Revertededits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reverted edits`)
},"chathistory_revertmergeddraft3":/** @type {(inputs: Chathistory_Revertmergeddraft3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepted drafts can't be reverted`)
},"chathistory_revertpublishingdraft3":/** @type {(inputs: Chathistory_Revertpublishingdraft3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing draft`)
},"chathistory_revertswitchtobase4":/** @type {(inputs: Chathistory_Revertswitchtobase4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to Base to revert this edit`)
},"chathistory_revertswitchtodraft4":/** @type {(inputs: Chathistory_Revertswitchtodraft4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to the draft to revert this edit`)
},"chathistory_reverttoofarback4":/** @type {(inputs: Chathistory_Reverttoofarback4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cannot revert this far back in history`)
},"chathistory_reverttothisversion4":/** @type {(inputs: Chathistory_Reverttothisversion4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revert to this version`)
},"chathistory_sectiondrafts2":/** @type {(inputs: Chathistory_Sectiondrafts2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drafts`)
},"chathistory_sectionpublished2":/** @type {(inputs: Chathistory_Sectionpublished2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published changes`)
},"chathistory_sectionunpublished2":/** @type {(inputs: Chathistory_Sectionunpublished2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublished changes`)
},"chathistory_show1":/** @type {(inputs: Chathistory_Show1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show`)
},"chathistory_tabbookmarks2":/** @type {(inputs: Chathistory_Tabbookmarks2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bookmarks`)
},"chathistory_tabhistory2":/** @type {(inputs: Chathistory_Tabhistory2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`History`)
},"chathistory_tryagain2":/** @type {(inputs: Chathistory_Tryagain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"chathistory_untitleddraft2":/** @type {(inputs: Chathistory_Untitleddraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled`)
},"chathistory_variantbehind2":/** @type {(inputs: Chathistory_Variantbehind2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} behind`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} behind`);
	return /** @type {LocalizedString} */ ("chatHistory_variantBehind");
},"chathistory_variantbehindlowerbound4":/** @type {(inputs: Chathistory_Variantbehindlowerbound4Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count}+ behind`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count}+ behind`);
	return /** @type {LocalizedString} */ ("chatHistory_variantBehindLowerBound");
},"chathistory_variantbehindtooltip3":/** @type {(inputs: Chathistory_Variantbehindtooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base has new edits. Sync this draft to see the latest.`)
},"chathistory_viewcodechanges3":/** @type {(inputs: Chathistory_Viewcodechanges3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View code changes`)
},"chatinput_askaboutissue3":/** @type {(inputs: Chatinput_Askaboutissue3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable about this issue...`)
},"chatinput_askaboutissues3":/** @type {(inputs: Chatinput_Askaboutissues3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable about these issues...`)
},"chatinput_asklovable2":/** @type {(inputs: Chatinput_Asklovable2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable...`)
},"chatinput_attachfiles2":/** @type {(inputs: Chatinput_Attachfiles2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach files`)
},"chatinput_clearselectedelements3":/** @type {(inputs: Chatinput_Clearselectedelements3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear selected elements`)
},"chatinput_drawinguploadfailedretry4":/** @type {(inputs: Chatinput_Drawinguploadfailedretry4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't upload drawing. Please retry.`)
},"chatinput_modifyselectedelement3":/** @type {(inputs: Chatinput_Modifyselectedelement3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to modify the selected element...`)
},"chatinput_modifyselectedelements3":/** @type {(inputs: Chatinput_Modifyselectedelements3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to modify the selected elements...`)
},"chatinput_queuefollowup3":/** @type {(inputs: Chatinput_Queuefollowup3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue follow-up...`)
},"chatinput_selectedelementscount3":/** @type {(inputs: Chatinput_Selectedelementscount3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} elements selected`)
},"chatinput_tellinstead2":/** @type {(inputs: Chatinput_Tellinstead2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell Lovable what to do instead...`)
},"chatinputactionmenu_addreference4":/** @type {(inputs: Chatinputactionmenu_Addreference4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add reference`)
},"chatinputactionmenu_addskill4":/** @type {(inputs: Chatinputactionmenu_Addskill4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add skill`)
},"chatinputactionmenu_attach3":/** @type {(inputs: Chatinputactionmenu_Attach3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach`)
},"chatinputactionmenu_github3":/** @type {(inputs: Chatinputactionmenu_Github3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
},"chatinputactionmenu_gitlab3":/** @type {(inputs: Chatinputactionmenu_Gitlab3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitLab`)
},"chatinputactionmenu_history3":/** @type {(inputs: Chatinputactionmenu_History3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`History`)
},"chatinputactionmenu_knowledge3":/** @type {(inputs: Chatinputactionmenu_Knowledge3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knowledge`)
},"chatinputactionmenu_projectsettings4":/** @type {(inputs: Chatinputactionmenu_Projectsettings4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
},"chatinputactionmenu_screenshot3":/** @type {(inputs: Chatinputactionmenu_Screenshot3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take a screenshot`)
},"chatinputcreateprojectvisibility_changevisibility5":/** @type {(inputs: Chatinputcreateprojectvisibility_Changevisibility5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change project visibility`)
},"chatinputcreateprojectvisibility_dropdown_title4":/** @type {(inputs: Chatinputcreateprojectvisibility_Dropdown_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project visibility`)
},"chatinputtextarea_limitreached4":/** @type {(inputs: Chatinputtextarea_Limitreached4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The text you pasted was too long.`)
},"chatinputtextarea_limitreacheddescription5":/** @type {(inputs: Chatinputtextarea_Limitreacheddescription5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We've shortened it to ${i?.count} characters. Check if important parts were removed.`)
},"chatinputtiptap_inputlabel3":/** @type {(inputs: Chatinputtiptap_Inputlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat input`)
},"chatinputtiptap_longpasteattached4":/** @type {(inputs: Chatinputtiptap_Longpasteattached4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Long paste attached as a file`)
},"chatinputtiptap_longpasteattachfailed5":/** @type {(inputs: Chatinputtiptap_Longpasteattachfailed5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't attach long paste as a file`)
},"chatinputtiptap_longpasteattachfaileddescription6":/** @type {(inputs: Chatinputtiptap_Longpasteattachfaileddescription6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try attaching it manually.`)
},"chatinputtiptap_pasteblockedsecret4":/** @type {(inputs: Chatinputtiptap_Pasteblockedsecret4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste blocked: contains a secret that can't be secured automatically`)
},"chatinputtiptap_pasteblockedsecretdescription5":/** @type {(inputs: Chatinputtiptap_Pasteblockedsecretdescription5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove it (e.g. a private key) or add it in Settings → Secrets, then paste again.`)
},"chatmessagelengthwarning_charactersleft4":/** @type {(inputs: Chatmessagelengthwarning_Charactersleft4Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} character remaining`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} characters remaining`);
	return /** @type {LocalizedString} */ ("chatMessageLengthWarning_charactersLeft");
},"chatmessagelengthwarning_limitreached4":/** @type {(inputs: Chatmessagelengthwarning_Limitreached4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Message limit reached (${i?.count} characters)`)
},"chatmessagelengthwarning_messageoverlimit5":/** @type {(inputs: Chatmessagelengthwarning_Messageoverlimit5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Max ${i?.maxCount} characters allowed. Remove ${i?.removeCount} characters to continue.`)
},"chatnudge_apikey_addsecret3":/** @type {(inputs: Chatnudge_Apikey_Addsecret3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add secret`)
},"chatnudge_apikey_description_intro2":/** @type {(inputs: Chatnudge_Apikey_Description_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API keys in messages can be accessed by team members, may appear in support tickets, and are transmitted over the internet.`)
},"chatnudge_apikey_docs2":/** @type {(inputs: Chatnudge_Apikey_Docs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Docs`)
},"chatnudge_apikey_enablecloud3":/** @type {(inputs: Chatnudge_Apikey_Enablecloud3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Cloud`)
},"chatnudge_apikey_storecloud3":/** @type {(inputs: Chatnudge_Apikey_Storecloud3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Store them securely in Cloud Secrets instead.`)
},"chatnudge_apikey_storeconnectcloud4":/** @type {(inputs: Chatnudge_Apikey_Storeconnectcloud4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect Lovable Cloud first to store them securely.`)
},"chatnudge_apikey_storesupabase3":/** @type {(inputs: Chatnudge_Apikey_Storesupabase3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Store them securely in Supabase instead.`)
},"chatnudge_apikey_title2":/** @type {(inputs: Chatnudge_Apikey_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sensitive API key detected`)
},"chatnudge_cloudinstance_advancedsettings3":/** @type {(inputs: Chatnudge_Cloudinstance_Advancedsettings3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advanced Settings`)
},"chatnudge_cloudinstance_advancedtitle3":/** @type {(inputs: Chatnudge_Cloudinstance_Advancedtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advanced`)
},"chatnudge_cloudinstance_description2":/** @type {(inputs: Chatnudge_Cloudinstance_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Cloud instance is running low on resources. Go to Advanced Settings to see details and take action.`)
},"chatnudge_cloudinstance_title2":/** @type {(inputs: Chatnudge_Cloudinstance_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cloud instance needs attention`)
},"chatnudge_creditlimit_description_aigateway_canmanageplan5":/** @type {(inputs: Chatnudge_Creditlimit_Description_Aigateway_Canmanageplan5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI features in your app are paused this month until the limit is raised`)
},"chatnudge_creditlimit_description_aigateway_canmanageusagelimits6":/** @type {(inputs: Chatnudge_Creditlimit_Description_Aigateway_Canmanageusagelimits6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI features in your app are paused this month until you raise the limit`)
},"chatnudge_creditlimit_description_aigateway_nopermission4":/** @type {(inputs: Chatnudge_Creditlimit_Description_Aigateway_Nopermission4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI features in your app are paused this month. Ask a workspace owner or admin to raise the limit`)
},"chatnudge_creditlimit_description_canmanageplan4":/** @type {(inputs: Chatnudge_Creditlimit_Description_Canmanageplan4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.subject} is paused until the limit is increased.`)
},"chatnudge_creditlimit_description_canmanageusagelimits5":/** @type {(inputs: Chatnudge_Creditlimit_Description_Canmanageusagelimits5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.subject} will be paused until the limit is increased.`)
},"chatnudge_creditlimit_description_nopermission3":/** @type {(inputs: Chatnudge_Creditlimit_Description_Nopermission3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.subject} is paused. Ask a workspace owner or admin to increase the limit.`)
},"chatnudge_creditlimit_managelimits3":/** @type {(inputs: Chatnudge_Creditlimit_Managelimits3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage limits`)
},"chatnudge_creditlimit_scope_project2":/** @type {(inputs: Chatnudge_Creditlimit_Scope_Project2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project`)
},"chatnudge_creditlimit_scope_workspace2":/** @type {(inputs: Chatnudge_Creditlimit_Scope_Workspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace`)
},"chatnudge_creditlimit_subject_generic2":/** @type {(inputs: Chatnudge_Creditlimit_Subject_Generic2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage`)
},"chatnudge_creditlimit_subject_withapplicability3":/** @type {(inputs: Chatnudge_Creditlimit_Subject_Withapplicability3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.applicability} usage`)
},"chatnudge_creditlimit_title_aigateway3":/** @type {(inputs: Chatnudge_Creditlimit_Title_Aigateway3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The limit you set for AI feature use is reached`)
},"chatnudge_creditlimit_title_withapplicability3":/** @type {(inputs: Chatnudge_Creditlimit_Title_Withapplicability3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.scope} usage limit for ${i?.applicability} reached`)
},"chatnudge_creditlimit_title_withoutapplicability3":/** @type {(inputs: Chatnudge_Creditlimit_Title_Withoutapplicability3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.scope} usage limit reached`)
},"chatnudge_crossprojectmention_addreference4":/** @type {(inputs: Chatnudge_Crossprojectmention_Addreference4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add reference`)
},"chatnudge_crossprojectmention_description3":/** @type {(inputs: Chatnudge_Crossprojectmention_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mention components, designs, and chat context from anywhere in your workspace.`)
},"chatnudge_crossprojectmention_readmore4":/** @type {(inputs: Chatnudge_Crossprojectmention_Readmore4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read more`)
},"chatnudge_crossprojectmention_title3":/** @type {(inputs: Chatnudge_Crossprojectmention_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reuse work from other projects`)
},"chatnudge_designsystempackage_descriptionmultiple4":/** @type {(inputs: Chatnudge_Designsystempackage_Descriptionmultiple4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Component imports won't work until they're added to your project.`)
},"chatnudge_designsystempackage_descriptionsingle4":/** @type {(inputs: Chatnudge_Designsystempackage_Descriptionsingle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Component imports won't work until it's added to your project.`)
},"chatnudge_designsystempackage_installing3":/** @type {(inputs: Chatnudge_Designsystempackage_Installing3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installing…`)
},"chatnudge_designsystempackage_installnow4":/** @type {(inputs: Chatnudge_Designsystempackage_Installnow4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install now`)
},"chatnudge_designsystempackage_notnow4":/** @type {(inputs: Chatnudge_Designsystempackage_Notnow4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not now`)
},"chatnudge_designsystempackage_titlemultiple4":/** @type {(inputs: Chatnudge_Designsystempackage_Titlemultiple4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} design system packages aren't installed`)
},"chatnudge_designsystempackage_titlesingle4":/** @type {(inputs: Chatnudge_Designsystempackage_Titlesingle4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.name}" package isn't installed`)
},"chatnudge_designsystemsetup_message3":/** @type {(inputs: Chatnudge_Designsystemsetup_Message3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I've attached a design system. Set it up in this project.`)
},"chatnudge_designsystemupdate_description3":/** @type {(inputs: Chatnudge_Designsystemupdate_Description3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You're on v${i?.installedVersion}. Update to get the latest components and tokens.`)
},"chatnudge_designsystemupdate_notnow4":/** @type {(inputs: Chatnudge_Designsystemupdate_Notnow4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not now`)
},"chatnudge_designsystemupdate_title3":/** @type {(inputs: Chatnudge_Designsystemupdate_Title3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.name}" has been updated to v${i?.latestVersion}`)
},"chatnudge_designsystemupdate_toastfailed4":/** @type {(inputs: Chatnudge_Designsystemupdate_Toastfailed4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update`)
},"chatnudge_designsystemupdate_toastfailedgeneric5":/** @type {(inputs: Chatnudge_Designsystemupdate_Toastfailedgeneric5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update design system`)
},"chatnudge_designsystemupdate_toastsuccess4":/** @type {(inputs: Chatnudge_Designsystemupdate_Toastsuccess4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design system updated`)
},"chatnudge_designsystemupdate_toastsuccessdescription5":/** @type {(inputs: Chatnudge_Designsystemupdate_Toastsuccessdescription5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The latest version has been installed. Changes take effect in your next chat.`)
},"chatnudge_designsystemupdate_updatenow4":/** @type {(inputs: Chatnudge_Designsystemupdate_Updatenow4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update now`)
},"chatnudge_designsystemupdate_updating3":/** @type {(inputs: Chatnudge_Designsystemupdate_Updating3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updating…`)
},"chatnudge_devprod_description2":/** @type {(inputs: Chatnudge_Devprod_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your users won't see changes until you publish.`)
},"chatnudge_devprod_title2":/** @type {(inputs: Chatnudge_Devprod_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building in Test`)
},"chatnudge_externalcollaborator_access2":/** @type {(inputs: Chatnudge_Externalcollaborator_Access2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`has access`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`have access`);
	return /** @type {LocalizedString} */ ("chatNudge_externalCollaborator_access");
},"chatnudge_externalcollaborator_count2":/** @type {(inputs: Chatnudge_Externalcollaborator_Count2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} external collaborator`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} external collaborators`);
	return /** @type {LocalizedString} */ ("chatNudge_externalCollaborator_count");
},"chatnudge_pausedproject_creditlimitpaused_title4":/** @type {(inputs: Chatnudge_Pausedproject_Creditlimitpaused_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Cloud project was paused because a credit limit was triggered.`)
},"chatnudge_pausedproject_lowbalance_description3":/** @type {(inputs: Chatnudge_Pausedproject_Lowbalance_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please contact support to get help restarting project.`)
},"chatnudge_pausedproject_lowbalance_title3":/** @type {(inputs: Chatnudge_Pausedproject_Lowbalance_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This project is paused due to a low balance.`)
},"chatnudge_pausedproject_manualpaused_title3":/** @type {(inputs: Chatnudge_Pausedproject_Manualpaused_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Cloud project is paused.`)
},"chatnudge_pausedproject_paused_description2":/** @type {(inputs: Chatnudge_Pausedproject_Paused_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wake up to restore your database and services.`)
},"chatnudge_pausedproject_paused_title2":/** @type {(inputs: Chatnudge_Pausedproject_Paused_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Cloud project is paused due to inactivity.`)
},"chatnudge_pausedproject_restoring_description2":/** @type {(inputs: Chatnudge_Pausedproject_Restoring_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This may take a few minutes.`)
},"chatnudge_pausedproject_restoring_title2":/** @type {(inputs: Chatnudge_Pausedproject_Restoring_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Cloud project is waking up`)
},"chatnudge_pausedproject_wakeup3":/** @type {(inputs: Chatnudge_Pausedproject_Wakeup3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wake up`)
},"chatnudge_pausedproject_wakeupcooldowntooltip5":/** @type {(inputs: Chatnudge_Pausedproject_Wakeupcooldowntooltip5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project can be woken up in a few minutes.`)
},"chatnudge_pausedproject_wakingup3":/** @type {(inputs: Chatnudge_Pausedproject_Wakingup3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waking up`)
},"chatnudge_ratelimit_title2":/** @type {(inputs: Chatnudge_Ratelimit_Title2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lovable is in high demand. Try again in ${i?.seconds}s`)
},"chatnudge_ratelimit_titlewithupgrade4":/** @type {(inputs: Chatnudge_Ratelimit_Titlewithupgrade4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lovable is in high demand. Try again in ${i?.seconds}s - upgrade for higher limits.`)
},"chatnudge_ratelimit_upgrade2":/** @type {(inputs: Chatnudge_Ratelimit_Upgrade2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade`)
},"chatnudge_rollovercredits_creditstooltip3":/** @type {(inputs: Chatnudge_Rollovercredits_Creditstooltip3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} credits`)
},"chatnudge_rollovercredits_moreinfo3":/** @type {(inputs: Chatnudge_Rollovercredits_Moreinfo3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More info`)
},"chatnudge_rollovercredits_title2":/** @type {(inputs: Chatnudge_Rollovercredits_Title2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} credits ${i?.expiry}`)
},"chatnudge_rolloverexpiry_indays3":/** @type {(inputs: Chatnudge_Rolloverexpiry_Indays3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`expire in ${i?.days} days`)
},"chatnudge_rolloverexpiry_inhours3":/** @type {(inputs: Chatnudge_Rolloverexpiry_Inhours3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`expire in ${i?.hours} hours`)
},"chatnudge_rolloverexpiry_inminutes3":/** @type {(inputs: Chatnudge_Rolloverexpiry_Inminutes3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`expire in ${i?.count} minute`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`expire in ${i?.count} minutes`);
	return /** @type {LocalizedString} */ ("chatNudge_rolloverExpiry_inMinutes");
},"chatnudge_rolloverexpiry_innextdays4":/** @type {(inputs: Chatnudge_Rolloverexpiry_Innextdays4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`expire in the next ${i?.days} days`)
},"chatnudge_rolloverexpiry_lessthanminute4":/** @type {(inputs: Chatnudge_Rolloverexpiry_Lessthanminute4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`expire in less than a minute`)
},"chatnudge_rolloverexpiry_today2":/** @type {(inputs: Chatnudge_Rolloverexpiry_Today2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`expire today`)
},"chatnudge_rolloverexpiry_tomorrow2":/** @type {(inputs: Chatnudge_Rolloverexpiry_Tomorrow2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`expire tomorrow`)
},"chatnudge_rolloverexpiry_withinday3":/** @type {(inputs: Chatnudge_Rolloverexpiry_Withinday3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`expire within the next day`)
},"chatnudge_rolloverexpiry_withinhour3":/** @type {(inputs: Chatnudge_Rolloverexpiry_Withinhour3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`expire in about an hour`)
},"chatnudge_security_badgeissue2":/** @type {(inputs: Chatnudge_Security_Badgeissue2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Issue`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Issues`);
	return /** @type {LocalizedString} */ ("chatNudge_security_badgeIssue");
},"chatnudge_security_fixtooltip2":/** @type {(inputs: Chatnudge_Security_Fixtooltip2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to the classic chat to fix security issues`)
},"chatnudge_security_title1":/** @type {(inputs: Chatnudge_Security_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
},"chatnudge_security_tryfixall3":/** @type {(inputs: Chatnudge_Security_Tryfixall3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix all`)
},"chatnudge_security_viewissues2":/** @type {(inputs: Chatnudge_Security_Viewissues2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View issues`)
},"chatnudge_seoreview_description2":/** @type {(inputs: Chatnudge_Seoreview_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See ways to improve how your site gets found in search.`)
},"chatnudge_seoreview_reviewseo3":/** @type {(inputs: Chatnudge_Seoreview_Reviewseo3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review SEO`)
},"chatnudge_seoreview_title2":/** @type {(inputs: Chatnudge_Seoreview_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review your SEO`)
},"chatnudge_topup_addcredits3":/** @type {(inputs: Chatnudge_Topup_Addcredits3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add credits`)
},"chatnudge_topup_remaining2":/** @type {(inputs: Chatnudge_Topup_Remaining2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.credits} credit remaining`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.credits} credits remaining`);
	return /** @type {LocalizedString} */ ("chatNudge_topUp_remaining");
},"chatnudge_topupcloud_aibalance_description_canmanage4":/** @type {(inputs: Chatnudge_Topupcloud_Aibalance_Description_Canmanage4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app's AI features are paused. Top up your balance to restore AI functionality.`)
},"chatnudge_topupcloud_aibalance_description_nopermission4":/** @type {(inputs: Chatnudge_Topupcloud_Aibalance_Description_Nopermission4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app's AI features are paused. Ask a workspace owner or admin to top up.`)
},"chatnudge_topupcloud_aibalance_title3":/** @type {(inputs: Chatnudge_Topupcloud_Aibalance_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've run out of AI balance`)
},"chatnudge_topupcloud_cloud_description_canmanage3":/** @type {(inputs: Chatnudge_Topupcloud_Cloud_Description_Canmanage3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app's Cloud features are paused. Top up to restore functionality.`)
},"chatnudge_topupcloud_cloud_description_nopermission3":/** @type {(inputs: Chatnudge_Topupcloud_Cloud_Description_Nopermission3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app's Cloud features are paused. Ask a workspace owner or admin to top up.`)
},"chatnudge_topupcloud_cloud_title2":/** @type {(inputs: Chatnudge_Topupcloud_Cloud_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've run out of Cloud balance`)
},"chatnudge_topupcloud_cloudandai_description_canmanage5":/** @type {(inputs: Chatnudge_Topupcloud_Cloudandai_Description_Canmanage5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app's Cloud and AI features are paused. Top up to restore functionality.`)
},"chatnudge_topupcloud_cloudandai_description_nopermission5":/** @type {(inputs: Chatnudge_Topupcloud_Cloudandai_Description_Nopermission5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app's Cloud and AI features are paused. Ask a workspace owner or admin to top up.`)
},"chatnudge_topupcloud_cloudandai_title4":/** @type {(inputs: Chatnudge_Topupcloud_Cloudandai_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've run out of Cloud & AI balance`)
},"chatnudge_topupcloud_free_description_canmanage3":/** @type {(inputs: Chatnudge_Topupcloud_Free_Description_Canmanage3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade your plan to add credits and help avoid projects being paused later.`)
},"chatnudge_topupcloud_free_description_nopermission3":/** @type {(inputs: Chatnudge_Topupcloud_Free_Description_Nopermission3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask a workspace owner or admin to upgrade the plan to help avoid projects being paused later.`)
},"chatnudge_topupcloud_paid_description_canmanage3":/** @type {(inputs: Chatnudge_Topupcloud_Paid_Description_Canmanage3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top up credits to help avoid projects being paused later.`)
},"chatnudge_topupcloud_paid_description_nopermission3":/** @type {(inputs: Chatnudge_Topupcloud_Paid_Description_Nopermission3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask a workspace owner or admin to top up credits to help avoid projects being paused later.`)
},"chatnudge_topupcloud_topup3":/** @type {(inputs: Chatnudge_Topupcloud_Topup3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top up`)
},"chatnudge_topupcloud_unified_title2":/** @type {(inputs: Chatnudge_Topupcloud_Unified_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've run out of credits`)
},"chatnudge_topupcloud_upgradeplan3":/** @type {(inputs: Chatnudge_Topupcloud_Upgradeplan3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade plan`)
},"chatnudge_topupcloud_usagetitle3":/** @type {(inputs: Chatnudge_Topupcloud_Usagetitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage`)
},"chatnudge_topupcloud_viewusagebreakdown4":/** @type {(inputs: Chatnudge_Topupcloud_Viewusagebreakdown4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View usage breakdown`)
},"chatnudge_upgrade_askowner2":/** @type {(inputs: Chatnudge_Upgrade_Askowner2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask the workspace owner to upgrade`)
},"chatnudge_upgrade_remaining1":/** @type {(inputs: Chatnudge_Upgrade_Remaining1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.credits} free credit remaining today`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.credits} free credits remaining today`);
	return /** @type {LocalizedString} */ ("chatNudge_upgrade_remaining");
},"chatnudge_upgrade_upgradenow2":/** @type {(inputs: Chatnudge_Upgrade_Upgradenow2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade Now`)
},"checkout_autotopup_amountlabel2":/** @type {(inputs: Checkout_Autotopup_Amountlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top-up amount`)
},"checkout_autotopup_creditsexpire2":/** @type {(inputs: Checkout_Autotopup_Creditsexpire2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits expire 12 months after purchase. Turn off auto top-up at any time.`)
},"checkout_autotopup_edittitle2":/** @type {(inputs: Checkout_Autotopup_Edittitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit auto top-up`)
},"checkout_autotopup_enable1":/** @type {(inputs: Checkout_Autotopup_Enable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable auto top-up`)
},"checkout_autotopup_erroramountinvalid3":/** @type {(inputs: Checkout_Autotopup_Erroramountinvalid3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid amount`)
},"checkout_autotopup_erroramountmax3":/** @type {(inputs: Checkout_Autotopup_Erroramountmax3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top-up cannot exceed ${i?.amount} credits`)
},"checkout_autotopup_erroramountmin3":/** @type {(inputs: Checkout_Autotopup_Erroramountmin3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top-up must be at least ${i?.amount} credits`)
},"checkout_autotopup_errorlimitinvalid3":/** @type {(inputs: Checkout_Autotopup_Errorlimitinvalid3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a valid limit`)
},"checkout_autotopup_errorlimittoolow4":/** @type {(inputs: Checkout_Autotopup_Errorlimittoolow4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monthly limit must be at least the top-up amount`)
},"checkout_autotopup_errorthresholdinvalid3":/** @type {(inputs: Checkout_Autotopup_Errorthresholdinvalid3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid threshold`)
},"checkout_autotopup_errorthresholdtoohigh4":/** @type {(inputs: Checkout_Autotopup_Errorthresholdtoohigh4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Threshold must be less than top-up amount`)
},"checkout_autotopup_nolimit2":/** @type {(inputs: Checkout_Autotopup_Nolimit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No limit`)
},"checkout_autotopup_pertopup2":/** @type {(inputs: Checkout_Autotopup_Pertopup2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`per top-up`)
},"checkout_autotopup_save1":/** @type {(inputs: Checkout_Autotopup_Save1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save auto top-up`)
},"checkout_autotopup_savechanges2":/** @type {(inputs: Checkout_Autotopup_Savechanges2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save changes`)
},"checkout_autotopup_spendlimitlabel3":/** @type {(inputs: Checkout_Autotopup_Spendlimitlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monthly spend limit`)
},"checkout_autotopup_subtitle1":/** @type {(inputs: Checkout_Autotopup_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits top up automatically when you run low.`)
},"checkout_autotopup_thresholdlabel2":/** @type {(inputs: Checkout_Autotopup_Thresholdlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When my balance falls below`)
},"checkout_autotopup_turnoff2":/** @type {(inputs: Checkout_Autotopup_Turnoff2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn off auto top-up`)
},"checkout_autotopup_turnontitle3":/** @type {(inputs: Checkout_Autotopup_Turnontitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn on auto top-up`)
},"checkout_billing_addcreditstitle2":/** @type {(inputs: Checkout_Billing_Addcreditstitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add more credits`)
},"checkout_billing_momentumsubtitle1":/** @type {(inputs: Checkout_Billing_Momentumsubtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep the momentum going`)
},"checkout_billing_upgradebusinesstitle2":/** @type {(inputs: Checkout_Billing_Upgradebusinesstitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade to Business`)
},"checkout_billing_upgradeplantitle2":/** @type {(inputs: Checkout_Billing_Upgradeplantitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade your plan`)
},"checkout_buycredits_amount1":/** @type {(inputs: Checkout_Buycredits_Amount1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Amount`)
},"checkout_buycredits_creditsexpire2":/** @type {(inputs: Checkout_Buycredits_Creditsexpire2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits expire 12 months after purchase.`)
},"checkout_buycredits_forcredits2":/** @type {(inputs: Checkout_Buycredits_Forcredits2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`for ${i?.credits} ${i?.suffix}`)
},"checkout_buycredits_pricesincludevat3":/** @type {(inputs: Checkout_Buycredits_Pricesincludevat3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prices include VAT.`)
},"checkout_buycredits_redirecting1":/** @type {(inputs: Checkout_Buycredits_Redirecting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirecting…`)
},"checkout_buycredits_saving1":/** @type {(inputs: Checkout_Buycredits_Saving1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving...`)
},"checkout_buycredits_subtitle1":/** @type {(inputs: Checkout_Buycredits_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A one-off top-up — no subscription.`)
},"checkout_buycredits_title1":/** @type {(inputs: Checkout_Buycredits_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buy credits`)
},"checkout_chooser_addmorecreditstitle3":/** @type {(inputs: Checkout_Chooser_Addmorecreditstitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add more credits`)
},"checkout_chooser_addscreditsautomatically2":/** @type {(inputs: Checkout_Chooser_Addscreditsautomatically2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adds credits automatically when you run low`)
},"checkout_chooser_addscreditswhenlow3":/** @type {(inputs: Checkout_Chooser_Addscreditswhenlow3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adds credits when low`)
},"checkout_chooser_autotopupdescexpensive3":/** @type {(inputs: Checkout_Chooser_Autotopupdescexpensive3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits added automatically when you run low. Credits are more expensive.`)
},"checkout_chooser_autotopupdescoff3":/** @type {(inputs: Checkout_Chooser_Autotopupdescoff3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits added automatically when you run low.`)
},"checkout_chooser_autotopupdescon3":/** @type {(inputs: Checkout_Chooser_Autotopupdescon3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits keep flowing when you run low. Update your settings any time.`)
},"checkout_chooser_autotopuponlydesc3":/** @type {(inputs: Checkout_Chooser_Autotopuponlydesc3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto top-up keeps you running — pay only for what you use.`)
},"checkout_chooser_autotopuptitle2":/** @type {(inputs: Checkout_Chooser_Autotopuptitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto top-up`)
},"checkout_chooser_bestvalue1":/** @type {(inputs: Checkout_Chooser_Bestvalue1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Best value`)
},"checkout_chooser_buyonce1":/** @type {(inputs: Checkout_Chooser_Buyonce1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buy once`)
},"checkout_chooser_buyoncetitle2":/** @type {(inputs: Checkout_Chooser_Buyoncetitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just need credits once?`)
},"checkout_chooser_choosehowtoadd3":/** @type {(inputs: Checkout_Chooser_Choosehowtoadd3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose how to add credits`)
},"checkout_chooser_creditamountlabel2":/** @type {(inputs: Checkout_Chooser_Creditamountlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credit amount`)
},"checkout_chooser_creditspermonth2":/** @type {(inputs: Checkout_Chooser_Creditspermonth2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.amount} credits/mo`)
},"checkout_chooser_creditssuffix1":/** @type {(inputs: Checkout_Chooser_Creditssuffix1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`credits`)
},"checkout_chooser_creditssuffixtier2":/** @type {(inputs: Checkout_Chooser_Creditssuffixtier2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} credits`)
},"checkout_chooser_customamount1":/** @type {(inputs: Checkout_Chooser_Customamount1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom amount`)
},"checkout_chooser_edit":/** @type {(inputs: Checkout_Chooser_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
},"checkout_chooser_flexible":/** @type {(inputs: Checkout_Chooser_FlexibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flexible`)
},"checkout_chooser_metabilledmonthly2":/** @type {(inputs: Checkout_Chooser_Metabilledmonthly2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.price} / credit · billed monthly`)
},"checkout_chooser_metapayperuse3":/** @type {(inputs: Checkout_Chooser_Metapayperuse3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.price} / credit · pay only when used`)
},"checkout_chooser_morecredits1":/** @type {(inputs: Checkout_Chooser_Morecredits1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More credits`)
},"checkout_chooser_mostflexible1":/** @type {(inputs: Checkout_Chooser_Mostflexible1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most flexible`)
},"checkout_chooser_on":/** @type {(inputs: Checkout_Chooser_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On`)
},"checkout_chooser_oneofftopup2":/** @type {(inputs: Checkout_Chooser_Oneofftopup2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`One-off top-up · ${i?.price} per credit`)
},"checkout_chooser_oneofftopupshort3":/** @type {(inputs: Checkout_Chooser_Oneofftopupshort3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-off top-up`)
},"checkout_chooser_oneofftopupwith3":/** @type {(inputs: Checkout_Chooser_Oneofftopupwith3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`One-off top-up · ${i?.value}`)
},"checkout_chooser_orchooseflexible2":/** @type {(inputs: Checkout_Chooser_Orchooseflexible2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Or choose a more flexible option`)
},"checkout_chooser_outofcreditstitle3":/** @type {(inputs: Checkout_Chooser_Outofcreditstitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're out of credits`)
},"checkout_chooser_payasyougo3":/** @type {(inputs: Checkout_Chooser_Payasyougo3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pay as you go`)
},"checkout_chooser_percredit1":/** @type {(inputs: Checkout_Chooser_Percredit1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.price} per credit`)
},"checkout_chooser_recommended":/** @type {(inputs: Checkout_Chooser_RecommendedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recommended`)
},"checkout_chooser_refinedcredits1":/** @type {(inputs: Checkout_Chooser_Refinedcredits1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} credits`)
},"checkout_chooser_savepercentlower2":/** @type {(inputs: Checkout_Chooser_Savepercentlower2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`save ${i?.amount}%`)
},"checkout_chooser_setup1":/** @type {(inputs: Checkout_Chooser_Setup1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up`)
},"checkout_chooser_threewaysdesc2":/** @type {(inputs: Checkout_Chooser_Threewaysdesc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Three ways to keep building, pick what fits.`)
},"checkout_chooser_topupautomatically2":/** @type {(inputs: Checkout_Chooser_Topupautomatically2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top up automatically`)
},"checkout_chooser_topupcount1":/** @type {(inputs: Checkout_Chooser_Topupcount1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} top-up`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} top-ups`);
	return /** @type {LocalizedString} */ ("checkout_chooser_topupCount");
},"checkout_chooser_upgradedesc1":/** @type {(inputs: Checkout_Chooser_Upgradedesc1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits}. Credits roll over to the next month.`)
},"checkout_chooser_upgradedescwithcost3":/** @type {(inputs: Checkout_Chooser_Upgradedescwithcost3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} for ${i?.cost}. Credits roll over to the next month.`)
},"checkout_chooser_upgradenow1":/** @type {(inputs: Checkout_Chooser_Upgradenow1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade now`)
},"checkout_chooser_upgradeonlydesc2":/** @type {(inputs: Checkout_Chooser_Upgradeonlydesc2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade your plan to keep building.`)
},"checkout_chooser_upgradeplantier2":/** @type {(inputs: Checkout_Chooser_Upgradeplantier2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upgrade ${i?.tier} Plan`)
},"checkout_confirm":/** @type {(inputs: Checkout_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm`)
},"checkout_creditsamount1":/** @type {(inputs: Checkout_Creditsamount1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.amount} credits`)
},"checkout_creditsamounttier2":/** @type {(inputs: Checkout_Creditsamounttier2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.amount} ${i?.tier} credits`)
},"checkout_cyclespend_limitreached2":/** @type {(inputs: Checkout_Cyclespend_Limitreached2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} credits already spent - limit reached`)
},"checkout_cyclespend_loaderror2":/** @type {(inputs: Checkout_Cyclespend_Loaderror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load cycle spend`)
},"checkout_cyclespend_loading1":/** @type {(inputs: Checkout_Cyclespend_Loading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading cycle spend...`)
},"checkout_cyclespend_resets1":/** @type {(inputs: Checkout_Cyclespend_Resets1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resets ${i?.date}`)
},"checkout_cyclespend_unavailable1":/** @type {(inputs: Checkout_Cyclespend_Unavailable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cycle spend unavailable`)
},"checkout_cyclespend_unlimited1":/** @type {(inputs: Checkout_Cyclespend_Unlimited1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top-ups run as often as needed.`)
},"checkout_cyclespend_unlimitedwithspend3":/** @type {(inputs: Checkout_Cyclespend_Unlimitedwithspend3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top-ups run as often as needed. ${i?.credits} credits spent this cycle.`)
},"checkout_cyclespend_used1":/** @type {(inputs: Checkout_Cyclespend_Used1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} credits used this cycle`)
},"checkout_duetoday1":/** @type {(inputs: Checkout_Duetoday1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`due today`)
},"checkout_giftcard_applied1":/** @type {(inputs: Checkout_Giftcard_Applied1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`After ${i?.amount} gift card credit applied`)
},"checkout_giftcard_covers1":/** @type {(inputs: Checkout_Giftcard_Covers1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your ${i?.amount} gift card balance covers this upgrade`)
},"checkout_goback1":/** @type {(inputs: Checkout_Goback1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go back`)
},"checkout_planfeature_creditsrollover2":/** @type {(inputs: Checkout_Planfeature_Creditsrollover2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unused credits rollover`)
},"checkout_planfeature_credittopups2":/** @type {(inputs: Checkout_Planfeature_Credittopups2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On-demand credit top-ups`)
},"checkout_planfeature_customdomains2":/** @type {(inputs: Checkout_Planfeature_Customdomains2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom domains`)
},"checkout_planfeature_designtemplates2":/** @type {(inputs: Checkout_Planfeature_Designtemplates2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design templates`)
},"checkout_planfeature_emailsupport2":/** @type {(inputs: Checkout_Planfeature_Emailsupport2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email support`)
},"checkout_planfeature_optoutdatatraining4":/** @type {(inputs: Checkout_Planfeature_Optoutdatatraining4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opt out of data training`)
},"checkout_planfeature_personalprojects2":/** @type {(inputs: Checkout_Planfeature_Personalprojects2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal Projects`)
},"checkout_planfeature_prioritysupport2":/** @type {(inputs: Checkout_Planfeature_Prioritysupport2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priority support`)
},"checkout_planfeature_removebadge2":/** @type {(inputs: Checkout_Planfeature_Removebadge2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the Lovable badge`)
},"checkout_planfeature_sso1":/** @type {(inputs: Checkout_Planfeature_Sso1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO`)
},"checkout_planfeature_userroles2":/** @type {(inputs: Checkout_Planfeature_Userroles2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User roles & permissions`)
},"checkout_pricingsummary_creditsstaysame3":/** @type {(inputs: Checkout_Pricingsummary_Creditsstaysame3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`but your credits will stay the same`)
},"checkout_pricingsummary_downgradeanytime2":/** @type {(inputs: Checkout_Pricingsummary_Downgradeanytime2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downgrade or cancel at any time.`)
},"checkout_pricingsummary_nextbillingcycle3":/** @type {(inputs: Checkout_Pricingsummary_Nextbillingcycle3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Next billing cycle (${i?.date})`)
},"checkout_pricingsummary_planupdateline3":/** @type {(inputs: Checkout_Pricingsummary_Planupdateline3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your plan will update to ${i?.price} / month for ${i?.credits} credits`)
},"checkout_pricingsummary_receivingcredits2":/** @type {(inputs: Checkout_Pricingsummary_Receivingcredits2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`and receiving ${i?.credits} credits today`)
},"checkout_pricingsummary_unlocking1":/** @type {(inputs: Checkout_Pricingsummary_Unlocking1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are unlocking all business features`)
},"checkout_pricingsummary_upgradeto2":/** @type {(inputs: Checkout_Pricingsummary_Upgradeto2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upgrade to ${i?.plan}`)
},"checkout_pricingsummary_whatschanging2":/** @type {(inputs: Checkout_Pricingsummary_Whatschanging2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What's changing?`)
},"checkout_pricingsummary_youwillunlock3":/** @type {(inputs: Checkout_Pricingsummary_Youwillunlock3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You will unlock:`)
},"checkout_terms_continuing":/** @type {(inputs: Checkout_Terms_ContinuingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By continuing you agree to our <terms>terms</terms>.`)
},"checkout_terms_upgrading":/** @type {(inputs: Checkout_Terms_UpgradingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By upgrading you agree to our <terms>terms</terms>.`)
},"checkout_upgrade":/** @type {(inputs: Checkout_UpgradeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade`)
},"checkout_vatinclusive1":/** @type {(inputs: Checkout_Vatinclusive1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`incl. VAT`)
},"classroompage_content_gettingstarted2":/** @type {(inputs: Classroompage_Content_Gettingstarted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getting started`)
},"classroompage_content_step1_cta1":/** @type {(inputs: Classroompage_Content_Step1_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create teacher account`)
},"classroompage_content_step1_subtitle1":/** @type {(inputs: Classroompage_Content_Step1_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your free teacher account`)
},"classroompage_content_step1_title1":/** @type {(inputs: Classroompage_Content_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign up to imagi Edu`)
},"classroompage_content_step2_cta1":/** @type {(inputs: Classroompage_Content_Step2_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create classroom`)
},"classroompage_content_step2_subtitle1":/** @type {(inputs: Classroompage_Content_Step2_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up your classroom space`)
},"classroompage_content_step2_title1":/** @type {(inputs: Classroompage_Content_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a classroom`)
},"classroompage_content_step3_subtitle1":/** @type {(inputs: Classroompage_Content_Step3_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press 'Open Access' and get student logins`)
},"classroompage_content_step3_title1":/** @type {(inputs: Classroompage_Content_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get student logins`)
},"classroompage_content_subtitle1":/** @type {(inputs: Classroompage_Content_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We're making AI developer tools accessible and age-appropriate for classrooms. Let's learn with AI, not just about it.`)
},"classroompage_content_title1":/** @type {(inputs: Classroompage_Content_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Software development is transforming, not disappearing`)
},"classroompage_features_freeaccess_cta2":/** @type {(inputs: Classroompage_Features_Freeaccess_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start for free`)
},"classroompage_features_freeaccess_item12":/** @type {(inputs: Classroompage_Features_Freeaccess_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Includes all teaching materials by imagi`)
},"classroompage_features_freeaccess_item22":/** @type {(inputs: Classroompage_Features_Freeaccess_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonymous Lovable accounts provided via imagi Edu`)
},"classroompage_features_freeaccess_item32":/** @type {(inputs: Classroompage_Features_Freeaccess_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start exploring vibe-coding with Lovable at your school`)
},"classroompage_features_freeaccess_subtitle2":/** @type {(inputs: Classroompage_Features_Freeaccess_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A classroom-safe access that brings industry-grade AI tooling to Grades 6-12.`)
},"classroompage_features_freeaccess_title2":/** @type {(inputs: Classroompage_Features_Freeaccess_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`K12 teachers - Start for free`)
},"classroompage_features_learnmore2":/** @type {(inputs: Classroompage_Features_Learnmore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"classroompage_features_vibecoding_item12":/** @type {(inputs: Classroompage_Features_Vibecoding_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No coding experience required for teachers or students`)
},"classroompage_features_vibecoding_item22":/** @type {(inputs: Classroompage_Features_Vibecoding_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy-first, COPPA-compliant, no student data collection`)
},"classroompage_features_vibecoding_item32":/** @type {(inputs: Classroompage_Features_Vibecoding_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you need to get started: implementation resources, lesson plans, setup guides, and classroom materials by imagi`)
},"classroompage_features_vibecoding_subtitle2":/** @type {(inputs: Classroompage_Features_Vibecoding_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empower students to build real software experiences with AI as a creative partner.`)
},"classroompage_features_vibecoding_title2":/** @type {(inputs: Classroompage_Features_Vibecoding_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable × imagi Edu: vibe coding for classrooms`)
},"classroompage_hero_cta1":/** @type {(inputs: Classroompage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start for free`)
},"classroompage_hero_scrollto2":/** @type {(inputs: Classroompage_Hero_Scrollto2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"classroompage_hero_subtitle1":/** @type {(inputs: Classroompage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Through imagi Edu, K12 teachers can bring Lovable's industry-grade AI tools into classrooms for free. Classroom-safe access for Grades 6-12 with all teaching materials included.`)
},"classroompage_hero_title1":/** @type {(inputs: Classroompage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for the next generation`)
},"classroompage_meta_description1":/** @type {(inputs: Classroompage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Through imagi Edu, K12 teachers can bring Lovable's industry-grade AI tools into classrooms for free. Classroom-safe access for Grades 6-12 with all teaching materials included.`)
},"classroompage_meta_title1":/** @type {(inputs: Classroompage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for Classrooms - K12 teachers start for free`)
},"cloudpage_ai_hitground_item12":/** @type {(inputs: Cloudpage_Ai_Hitground_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get built and running just by prompting in Lovable. No managing API keys or manual setup, it just works.`)
},"cloudpage_ai_hitground_item22":/** @type {(inputs: Cloudpage_Ai_Hitground_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powered by Google Gemini and OpenAI, request the model you prefer`)
},"cloudpage_ai_hitground_item32":/** @type {(inputs: Cloudpage_Ai_Hitground_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage based pricing, all unified within Lovable billing`)
},"cloudpage_ai_hitground_subtitle2":/** @type {(inputs: Cloudpage_Ai_Hitground_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build AI-native products with Lovable, no coding experience required. We'll handle the AI complexity so you don't have to.`)
},"cloudpage_ai_hitground_title2":/** @type {(inputs: Cloudpage_Ai_Hitground_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hit the ground running`)
},"cloudpage_ai_stopwasting_item12":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Managing API keys across providers`)
},"cloudpage_ai_stopwasting_item22":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tracking usage quotas`)
},"cloudpage_ai_stopwasting_item32":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complicated billing, with varied pricing models and rates across providers`)
},"cloudpage_ai_stopwasting_item42":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Item42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handling different response formats`)
},"cloudpage_ai_stopwasting_item52":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Item52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learning what any of this means`)
},"cloudpage_ai_stopwasting_subtitle2":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Never worry again about:`)
},"cloudpage_ai_stopwasting_title2":/** @type {(inputs: Cloudpage_Ai_Stopwasting_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop wasting time`)
},"cloudpage_ai_subtitle1":/** @type {(inputs: Cloudpage_Ai_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add an LLM to your app, just by prompting. Build AI-native products with Lovable, no coding experience required. We handle all the AI complexity so you don't have to.`)
},"cloudpage_ai_title1":/** @type {(inputs: Cloudpage_Ai_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable AI`)
},"cloudpage_ai_whatbuild_item12":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add content summarization and analysis`)
},"cloudpage_ai_whatbuild_item22":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integration with Nano Banana, generate images such as avatars, custom backgrounds, or anything you can dream of`)
},"cloudpage_ai_whatbuild_item32":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentiment analysis and classification`)
},"cloudpage_ai_whatbuild_item42":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Item42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Document search and Q&A systems`)
},"cloudpage_ai_whatbuild_item52":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Item52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content generation and copywriting`)
},"cloudpage_ai_whatbuild_item62":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Item62Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automated or agentic task workflows`)
},"cloudpage_ai_whatbuild_title2":/** @type {(inputs: Cloudpage_Ai_Whatbuild_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What can you build with Lovable AI?`)
},"cloudpage_cloud_subtitle1":/** @type {(inputs: Cloudpage_Cloud_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A built-in backend for Lovable apps that just works. No manual setup required.`)
},"cloudpage_cloud_title1":/** @type {(inputs: Cloudpage_Cloud_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Cloud`)
},"cloudpage_cta_button1":/** @type {(inputs: Cloudpage_Cta_Button1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let's build`)
},"cloudpage_cta_subtitle1":/** @type {(inputs: Cloudpage_Cta_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backend infrastructure and AI intelligence—ready in one prompt. No integrations, no setup, no leaving Lovable.`)
},"cloudpage_cta_title1":/** @type {(inputs: Cloudpage_Cta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introducing Lovable Cloud & AI`)
},"cloudpage_events_subtitle1":/** @type {(inputs: Cloudpage_Events_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join us on Discord for live sessions!`)
},"cloudpage_events_title1":/** @type {(inputs: Cloudpage_Events_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community events`)
},"cloudpage_feature_connectsafely_description2":/** @type {(inputs: Cloudpage_Feature_Connectsafely_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ensures your app can safely talk to other tools and services, without exposing private data.`)
},"cloudpage_feature_connectsafely_title2":/** @type {(inputs: Cloudpage_Feature_Connectsafely_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect safely with other services`)
},"cloudpage_feature_connectsafely_usecase3":/** @type {(inputs: Cloudpage_Feature_Connectsafely_Usecase3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable integrations with LLMs, payment providers, email services and more.`)
},"cloudpage_feature_manageusers_description2":/** @type {(inputs: Cloudpage_Feature_Manageusers_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add user signup and login flows, and manage your users all in one place.`)
},"cloudpage_feature_manageusers_title2":/** @type {(inputs: Cloudpage_Feature_Manageusers_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage users`)
},"cloudpage_feature_manageusers_usecase3":/** @type {(inputs: Cloudpage_Feature_Manageusers_Usecase3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If your app requires user accounts or role based permissions, Lovable Cloud has you covered.`)
},"cloudpage_feature_savedata_description2":/** @type {(inputs: Cloudpage_Feature_Savedata_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Store and access all of the information that your app needs.`)
},"cloudpage_feature_savedata_title2":/** @type {(inputs: Cloudpage_Feature_Savedata_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save data & files`)
},"cloudpage_feature_savedata_usecase3":/** @type {(inputs: Cloudpage_Feature_Savedata_Usecase3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This means your app can store messages, photos, customer orders, user profiles, handle file uploads and more.`)
},"cloudpage_featured_subtitle1":/** @type {(inputs: Cloudpage_Featured_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover what others have built with Lovable Cloud & AI`)
},"cloudpage_featured_title1":/** @type {(inputs: Cloudpage_Featured_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured projects`)
},"cloudpage_hero_cta1":/** @type {(inputs: Cloudpage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"cloudpage_hero_scrolltext2":/** @type {(inputs: Cloudpage_Hero_Scrolltext2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"cloudpage_hero_subtitle1":/** @type {(inputs: Cloudpage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backend infrastructure and AI intelligence — ready in one prompt. No configuring integrations, no setup hassle, all in Lovable.`)
},"cloudpage_hero_title1":/** @type {(inputs: Cloudpage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introducing Lovable Cloud & AI`)
},"cloudpage_meta_description1":/** @type {(inputs: Cloudpage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Experience the power of Lovable Cloud & AI. Build, deploy, and scale your applications with cutting-edge cloud infrastructure and artificial intelligence.`)
},"cloudpage_meta_title1":/** @type {(inputs: Cloudpage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Cloud & AI | Build Apps Faster`)
},"cloudpage_video_embedtitle2":/** @type {(inputs: Cloudpage_Video_Embedtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introducing Lovable Cloud & AI`)
},"cloudpage_video_notice1":/** @type {(inputs: Cloudpage_Video_Notice1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This video is recorded in English, with no subtitle or translation capabilities.`)
},"cloudpage_video_title1":/** @type {(inputs: Cloudpage_Video_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meet Lovable Cloud & AI`)
},"commentfeedback_commentthread2":/** @type {(inputs: Commentfeedback_Commentthread2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment thread`)
},"commentfeedback_details1":/** @type {(inputs: Commentfeedback_Details1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
},"commentfeedback_hidedetails2":/** @type {(inputs: Commentfeedback_Hidedetails2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide details`)
},"commentfeedback_pagecomments2":/** @type {(inputs: Commentfeedback_Pagecomments2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page comments`)
},"common_loading":/** @type {(inputs: Common_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"common_showmore1":/** @type {(inputs: Common_Showmore1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
},"communityeventspage_eventsmap_subtitle3":/** @type {(inputs: Communityeventspage_Eventsmap_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All over the world, people are hosting hackathons, buildathons, and workshops where participants come together to build real products with Lovable in a single session. Community organizers, founders, students, creators — every event looks different, but they all share the same energy: a room full of people shipping something real. If you've got an audience and a vision, we want to hear from you.`)
},"communityeventspage_eventsmap_title3":/** @type {(inputs: Communityeventspage_Eventsmap_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builders are gathering everywhere`)
},"communityeventspage_faq10_answer2":/** @type {(inputs: Communityeventspage_Faq10_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absolutely. A declined application doesn't mean no forever — it usually just means the timing or details weren't quite right. If anything has changed or you're planning a new event, we'd love to see another application.`)
},"communityeventspage_faq10_question2":/** @type {(inputs: Communityeventspage_Faq10_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I reapply if my event was declined?`)
},"communityeventspage_faq1_answer2":/** @type {(inputs: Communityeventspage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone passionate about bringing builders together. That includes student organizers, startup founders, developer advocates, community leaders, and more. You don't need event planning experience or a large following.`)
},"communityeventspage_faq1_question2":/** @type {(inputs: Communityeventspage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who can host a Lovable event?`)
},"communityeventspage_faq2_answer2":/** @type {(inputs: Communityeventspage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fill out our application form with details about your event format, audience, and expected number of attendees. We'll get back to you within 3 working days.`)
},"communityeventspage_faq2_question2":/** @type {(inputs: Communityeventspage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I apply?`)
},"communityeventspage_faq3_answer2":/** @type {(inputs: Communityeventspage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. If you're already organizing a hackathon, workshop, or buildathon and want to add Lovable as the building tool, you can apply through the same form.`)
},"communityeventspage_faq3_question2":/** @type {(inputs: Communityeventspage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I already have an event planned. Can I still apply?`)
},"communityeventspage_faq4_answer2":/** @type {(inputs: Communityeventspage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You'll receive a full event kit including Lovable credits for your attendees, a hosting playbook, and marketing materials. You can also opt to have your event featured on the Lovable events map.`)
},"communityeventspage_faq4_question2":/** @type {(inputs: Communityeventspage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What do I get if my event is approved?`)
},"communityeventspage_faq5_answer2":/** @type {(inputs: Communityeventspage_Faq5_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In-person hackathons, buildathons, and workshops focused on building with Lovable, with at least 30 expected participants.`)
},"communityeventspage_faq5_question2":/** @type {(inputs: Communityeventspage_Faq5_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What types of events are supported?`)
},"communityeventspage_faq6_answer2":/** @type {(inputs: Communityeventspage_Faq6_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We primarily support free community events. If your event has a different model, include the details in your application and we'll review it on a case-by-case basis.`)
},"communityeventspage_faq6_question2":/** @type {(inputs: Communityeventspage_Faq6_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do events need to be free to attend?`)
},"communityeventspage_faq7_answer2":/** @type {(inputs: Communityeventspage_Faq7_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detail. Tell us about your format, who you're bringing together, how many people you expect, and how you plan to promote it. Include a link to your registration page if you have one. Still early? Share your vision and we'll go from there.`)
},"communityeventspage_faq7_question2":/** @type {(inputs: Communityeventspage_Faq7_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What makes a strong application?`)
},"communityeventspage_faq8_answer2":/** @type {(inputs: Communityeventspage_Faq8_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most community events range from 30 to 200 participants. If you're planning something larger, get in touch early so we can figure out the best way to support you.`)
},"communityeventspage_faq8_question2":/** @type {(inputs: Communityeventspage_Faq8_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is there a maximum event size?`)
},"communityeventspage_faq9_answer2":/** @type {(inputs: Communityeventspage_Faq9_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We follow up via email within 3 working days. Apply at least 2 weeks before your planned event date so we have time to get you set up.`)
},"communityeventspage_faq9_question2":/** @type {(inputs: Communityeventspage_Faq9_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How will I know if my event was approved?`)
},"communityeventspage_faqtitle3":/** @type {(inputs: Communityeventspage_Faqtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"communityeventspage_hero_primarycta3":/** @type {(inputs: Communityeventspage_Hero_Primarycta3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse events`)
},"communityeventspage_hero_subtitle2":/** @type {(inputs: Communityeventspage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring builders together, anywhere in the world. Apply to host a Lovable community event and we'll help you make it happen.`)
},"communityeventspage_hero_titleline13":/** @type {(inputs: Communityeventspage_Hero_Titleline13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meet us in`)
},"communityeventspage_hero_titleline23":/** @type {(inputs: Communityeventspage_Hero_Titleline23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`person`)
},"communityeventspage_host_cta2":/** @type {(inputs: Communityeventspage_Host_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply to host`)
},"communityeventspage_host_step1_check12":/** @type {(inputs: Communityeventspage_Host_Step1_Check12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable as the primary building tool`)
},"communityeventspage_host_step1_check22":/** @type {(inputs: Communityeventspage_Host_Step1_Check22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30+ participants expected`)
},"communityeventspage_host_step1_check32":/** @type {(inputs: Communityeventspage_Host_Step1_Check32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At least 2 weeks away`)
},"communityeventspage_host_step1_check3_suffix2":/** @type {(inputs: Communityeventspage_Host_Step1_Check3_Suffix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`— so we have time to review your application and get you set up`)
},"communityeventspage_host_step1_intro2":/** @type {(inputs: Communityeventspage_Host_Step1_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before you apply, make sure your event ticks these boxes:`)
},"communityeventspage_host_step1_number2":/** @type {(inputs: Communityeventspage_Host_Step1_Number2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`01`)
},"communityeventspage_host_step1_paragraph12":/** @type {(inputs: Communityeventspage_Host_Step1_Paragraph12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone passionate about bringing builders together. Our hosts include student organizers, startup founders, developer advocates, community leaders, and people who just love Lovable and want to share it.`)
},"communityeventspage_host_step1_paragraph22":/** @type {(inputs: Communityeventspage_Host_Step1_Paragraph22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You don't need event planning experience or a large following.`)
},"communityeventspage_host_step1_subheading2":/** @type {(inputs: Communityeventspage_Host_Step1_Subheading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who can host?`)
},"communityeventspage_host_step1_title2":/** @type {(inputs: Communityeventspage_Host_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your event is a good match`)
},"communityeventspage_host_step2_intro2":/** @type {(inputs: Communityeventspage_Host_Step2_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start shaping your event:`)
},"communityeventspage_host_step2_item12":/** @type {(inputs: Communityeventspage_Host_Step2_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decide on a format`)
},"communityeventspage_host_step2_item1_suffix2":/** @type {(inputs: Communityeventspage_Host_Step2_Item1_Suffix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(hackathon, buildathon, or workshop)`)
},"communityeventspage_host_step2_item22":/** @type {(inputs: Communityeventspage_Host_Step2_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Think about your venue`)
},"communityeventspage_host_step2_item32":/** @type {(inputs: Communityeventspage_Host_Step2_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a date`)
},"communityeventspage_host_step2_item42":/** @type {(inputs: Communityeventspage_Host_Step2_Item42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up a registration page`)
},"communityeventspage_host_step2_number2":/** @type {(inputs: Communityeventspage_Host_Step2_Number2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`02`)
},"communityeventspage_host_step2_paragraph12":/** @type {(inputs: Communityeventspage_Host_Step2_Paragraph12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You own the event, the logistics, and the audience. We help you get there!`)
},"communityeventspage_host_step2_paragraph22":/** @type {(inputs: Communityeventspage_Host_Step2_Paragraph22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not ready to commit to a venue yet? That's fine. Get your concept, audience, and timeline together and apply first. Once you're approved, you can lock in the details. The more planning you do upfront, the faster you can move once you get the green light.`)
},"communityeventspage_host_step2_paragraph32":/** @type {(inputs: Communityeventspage_Host_Step2_Paragraph32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already have an event planned and want to add Lovable as the building tool? That works too. Same application process.`)
},"communityeventspage_host_step2_subheading2":/** @type {(inputs: Communityeventspage_Host_Step2_Subheading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're the organizer`)
},"communityeventspage_host_step2_title2":/** @type {(inputs: Communityeventspage_Host_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan your event`)
},"communityeventspage_host_step3_caption2":/** @type {(inputs: Communityeventspage_Host_Step3_Caption2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The more detail you include, the faster we can review.`)
},"communityeventspage_host_step3_intro2":/** @type {(inputs: Communityeventspage_Host_Step3_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fill out our application form with the details:`)
},"communityeventspage_host_step3_item12":/** @type {(inputs: Communityeventspage_Host_Step3_Item12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kind of event`)
},"communityeventspage_host_step3_item22":/** @type {(inputs: Communityeventspage_Host_Step3_Item22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who it's for`)
},"communityeventspage_host_step3_item32":/** @type {(inputs: Communityeventspage_Host_Step3_Item32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How many people expected`)
},"communityeventspage_host_step3_item42":/** @type {(inputs: Communityeventspage_Host_Step3_Item42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where`)
},"communityeventspage_host_step3_item52":/** @type {(inputs: Communityeventspage_Host_Step3_Item52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When`)
},"communityeventspage_host_step3_number2":/** @type {(inputs: Communityeventspage_Host_Step3_Number2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`03`)
},"communityeventspage_host_step3_title2":/** @type {(inputs: Communityeventspage_Host_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
},"communityeventspage_host_step4_intro2":/** @type {(inputs: Communityeventspage_Host_Step4_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We review every application and get back to you within 3 business days, via email. If approved, we send you everything you need to run your event.`)
},"communityeventspage_host_step4_kit1_description2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unique credit codes for your event. Your participants can start building immediately, with enough credits to build a real, working product during the event.`)
},"communityeventspage_host_step4_kit1_title2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable credits for every participant`)
},"communityeventspage_host_step4_kit2_description2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A detailed guide covering how to promote your event, structure the day, run the hands-on building session, and wrap up. It includes a suggested agenda, social media templates, email copy, slide decks, and talking points. First-time hosts have used it to run events for 100+ people.`)
},"communityeventspage_host_step4_kit2_title2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A hosting playbook`)
},"communityeventspage_host_step4_kit3_description2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready-to-use graphics, templates, and Lovable branding for your event page, social posts, and signage.`)
},"communityeventspage_host_step4_kit3_title2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marketing materials and brand assets`)
},"communityeventspage_host_step4_kit4_description2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approved events go live on our global events map and are shared through Lovable's community channels. Your event may also be promoted on Lovable's social media, giving you reach beyond your own network.`)
},"communityeventspage_host_step4_kit4_title2":/** @type {(inputs: Communityeventspage_Host_Step4_Kit4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your event on the Lovable map`)
},"communityeventspage_host_step4_number2":/** @type {(inputs: Communityeventspage_Host_Step4_Number2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`04`)
},"communityeventspage_host_step4_title2":/** @type {(inputs: Communityeventspage_Host_Step4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get approved and receive your event kit`)
},"communityeventspage_host_step5_description2":/** @type {(inputs: Communityeventspage_Host_Step5_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're all set. Run your event, get people building, and enjoy the day.`)
},"communityeventspage_host_step5_number2":/** @type {(inputs: Communityeventspage_Host_Step5_Number2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`05`)
},"communityeventspage_host_step5_title2":/** @type {(inputs: Communityeventspage_Host_Step5_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host your event`)
},"communityeventspage_host_subtitle2":/** @type {(inputs: Communityeventspage_Host_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Whether you're planning something from scratch or you already have an event in the works, here's how it goes from idea to event day.`)
},"communityeventspage_host_title2":/** @type {(inputs: Communityeventspage_Host_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to host a Lovable event`)
},"communityeventspage_meta_description2":/** @type {(inputs: Communityeventspage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring builders together, anywhere in the world. Host a Lovable event and get credits, swag, marketing materials, and support from our team.`)
},"communityeventspage_meta_og_description2":/** @type {(inputs: Communityeventspage_Meta_Og_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring builders together, anywhere in the world. We'll help you make it happen with credits, swag, and support.`)
},"communityeventspage_meta_og_title2":/** @type {(inputs: Communityeventspage_Meta_Og_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host a lovable event`)
},"communityeventspage_meta_title2":/** @type {(inputs: Communityeventspage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host a lovable event | Community events`)
},"communityeventspage_testimonials_title2":/** @type {(inputs: Communityeventspage_Testimonials_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From the community
with love`)
},"communitypage_gridtestimonial10_description2":/** @type {(inputs: Communitypage_Gridtestimonial10_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being part of the Lovable Campus Leaders community has been an incredible experience, as I'm not only building for myself but also building for others and teaching them how to do the same. Lovable has given me the opportunity to be a representative and catalyst for creativity and innovation, and I'm forever grateful to be someone who transforms ideas into tangible products.`)
},"communitypage_gridtestimonial11_description2":/** @type {(inputs: Communitypage_Gridtestimonial11_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I've grown, connected with incredible builders, and got to shape a product that's giving the 99% a real seat at the table.`)
},"communitypage_gridtestimonial12_description2":/** @type {(inputs: Communitypage_Gridtestimonial12_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As an ex-founder, giving back through a community that's supportive, sharp, and excited to build the future together is the best part!`)
},"communitypage_gridtestimonial13_description2":/** @type {(inputs: Communitypage_Gridtestimonial13_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I've never met so many cool people that are so passionate about changing the world. Each one has a story, a reason to change the world and make it better.`)
},"communitypage_gridtestimonial14_description2":/** @type {(inputs: Communitypage_Gridtestimonial14_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being part of this community, I have truly never seen a more diverse group of people in my life, coming from so many countries, universities, and backgrounds, all united by a passion and vision for Lovable. Simply being surrounded by such ambitious people is so motivating.`)
},"communitypage_gridtestimonial1_description2":/** @type {(inputs: Communitypage_Gridtestimonial1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Lovable community brings together likeminded humans that are thoughtful, enthusiastic and very capable, to embrace the potential and opportunity these tools have given us and share that with others.`)
},"communitypage_gridtestimonial2_description2":/** @type {(inputs: Communitypage_Gridtestimonial2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being part of the Lovable community opens an incredible new window of opportunity to empower teachers to design their own educational experiences for their students`)
},"communitypage_gridtestimonial3_description2":/** @type {(inputs: Communitypage_Gridtestimonial3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The powerful and supportive community that has gathered around SheBuilds within Lovable is its greatest strength. It is a truly empowering place where helpfulness and a rich network of connections thrive. My idea wouldn't be a reality without Lovable.`)
},"communitypage_gridtestimonial4_description2":/** @type {(inputs: Communitypage_Gridtestimonial4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being part of the Lovable community means I get to meet new people and help them experience vibe coding, something I genuinely enjoy. Sharing what I love and watching others get excited about it is the best part.`)
},"communitypage_gridtestimonial5_description2":/** @type {(inputs: Communitypage_Gridtestimonial5_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The ambition of the Campus Leaders is nothing short of inspiring. Seeing the resources and investments made by Lovable, it leaves you with no question as to why this is the case.`)
},"communitypage_gridtestimonial6_description2":/** @type {(inputs: Communitypage_Gridtestimonial6_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building real products with AI is no longer just about coding. It is about thinking, structuring, and executing faster than ever. Being part of this community means evolving together and actively building the future.`)
},"communitypage_gridtestimonial7_description2":/** @type {(inputs: Communitypage_Gridtestimonial7_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being a Lovable Community Ambassador is such an incredible opportunity — I'm one of the 99% who never could have started building without Lovable — and as an Ambassador I get to share my passion and the possibilities open to everyone — it's amazing!`)
},"communitypage_gridtestimonial8_description2":/** @type {(inputs: Communitypage_Gridtestimonial8_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somewhere between 'what if we built it?' and 'wait, it actually works', that's where you'll find the Lovable community and I am absolutely one of them now.`)
},"communitypage_gridtestimonial9_description2":/** @type {(inputs: Communitypage_Gridtestimonial9_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being a Campus Leader in the Bay Area has pushed me to build and act on my ideas as part of a community of people who are constantly creating.`)
},"communitypage_testimonials_title1":/** @type {(inputs: Communitypage_Testimonials_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real builders, real community, real impact`)
},"connections_connections":/** @type {(inputs: Connections_ConnectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"connectors_allconnectors1":/** @type {(inputs: Connectors_Allconnectors1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All connectors`)
},"connectors_appconnectionsempty2":/** @type {(inputs: Connectors_Appconnectionsempty2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No connections have been added yet. Ask the Lovable agent if you need help.`)
},"connectors_appconnectionssubtext2":/** @type {(inputs: Connectors_Appconnectionssubtext2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The following services are connected to your application.`)
},"connectors_appconnectionstitle2":/** @type {(inputs: Connectors_Appconnectionstitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App connections`)
},"connectors_chatconnectorssubtext2":/** @type {(inputs: Connectors_Chatconnectorssubtext2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In addition to the connections above you also have access to the following MCPs in the Lovable chat.`)
},"connectors_chatconnectorstitle2":/** @type {(inputs: Connectors_Chatconnectorstitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat connectors`)
},"connectors_pagetitle1":/** @type {(inputs: Connectors_Pagetitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"connectors_projectconnectors1":/** @type {(inputs: Connectors_Projectconnectors1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project connectors`)
},"connectorsbanner_title1":/** @type {(inputs: Connectorsbanner_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect all your tools`)
},"consoleerror_labelbuild2":/** @type {(inputs: Consoleerror_Labelbuild2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build error`)
},"consoleerror_labelcors2":/** @type {(inputs: Consoleerror_Labelcors2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CORS error`)
},"consoleerror_labelgeneric2":/** @type {(inputs: Consoleerror_Labelgeneric2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
},"consoleerror_labelhttpclient3":/** @type {(inputs: Consoleerror_Labelhttpclient3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP client error`)
},"consoleerror_labelhttpserver3":/** @type {(inputs: Consoleerror_Labelhttpserver3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP server error`)
},"consoleerror_labelruntime2":/** @type {(inputs: Consoleerror_Labelruntime2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Runtime error`)
},"consoleerror_labelsupabaseedge3":/** @type {(inputs: Consoleerror_Labelsupabaseedge3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase edge function error`)
},"createform_apikeywarning_description3":/** @type {(inputs: Createform_Apikeywarning_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API keys detected in your message. Create your project first, then connect Lovable Cloud to store API keys securely as secrets instead of including them in messages.`)
},"createform_apikeywarning_dismiss3":/** @type {(inputs: Createform_Apikeywarning_Dismiss3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss warning`)
},"createform_apikeywarning_iconlabel4":/** @type {(inputs: Createform_Apikeywarning_Iconlabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
},"createform_apikeywarning_learnmore4":/** @type {(inputs: Createform_Apikeywarning_Learnmore4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more about security`)
},"createform_apikeywarning_title3":/** @type {(inputs: Createform_Apikeywarning_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sensitive API key detected`)
},"createform_attachfiles2":/** @type {(inputs: Createform_Attachfiles2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach files`)
},"createform_cancel1":/** @type {(inputs: Createform_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"createform_chatmode_togglenewagent4":/** @type {(inputs: Createform_Chatmode_Togglenewagent4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle multi-task`)
},"createform_designsystemfailed3":/** @type {(inputs: Createform_Designsystemfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create design system`)
},"createform_envvars_add2":/** @type {(inputs: Createform_Envvars_Add2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add variable`)
},"createform_envvars_empty2":/** @type {(inputs: Createform_Envvars_Empty2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No environment variables added.`)
},"createform_envvars_keyarialabel4":/** @type {(inputs: Createform_Envvars_Keyarialabel4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Variable ${i?.number} key`)
},"createform_envvars_keyplaceholder3":/** @type {(inputs: Createform_Envvars_Keyplaceholder3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key`)
},"createform_envvars_removearialabel4":/** @type {(inputs: Createform_Envvars_Removearialabel4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove variable ${i?.name}`)
},"createform_envvars_title2":/** @type {(inputs: Createform_Envvars_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Environment variables (optional)`)
},"createform_envvars_valuearialabel4":/** @type {(inputs: Createform_Envvars_Valuearialabel4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Variable ${i?.number} value`)
},"createform_envvars_valueplaceholder3":/** @type {(inputs: Createform_Envvars_Valueplaceholder3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Value`)
},"createform_importcodebase_githubdescription3":/** @type {(inputs: Createform_Importcodebase_Githubdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the GitHub repository URL you want to import.`)
},"createform_importcodebase_invalidurl3":/** @type {(inputs: Createform_Importcodebase_Invalidurl3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a valid GitHub repository URL (e.g., https://github.com/owner/repo)`)
},"createform_importcodebase_repourllabel4":/** @type {(inputs: Createform_Importcodebase_Repourllabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repository URL`)
},"createform_importcodebase_repourlplaceholder4":/** @type {(inputs: Createform_Importcodebase_Repourlplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://github.com/username/repo`)
},"createform_importcodebase_submit2":/** @type {(inputs: Createform_Importcodebase_Submit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import codebase`)
},"createform_importcodebase_title2":/** @type {(inputs: Createform_Importcodebase_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import existing codebase`)
},"createform_importedrepo_labelgithub3":/** @type {(inputs: Createform_Importedrepo_Labelgithub3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imported Repo`)
},"createform_importedrepo_labelzip3":/** @type {(inputs: Createform_Importedrepo_Labelzip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaded ZIP`)
},"createform_importedrepo_removegithub3":/** @type {(inputs: Createform_Importedrepo_Removegithub3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove imported repo`)
},"createform_importedrepo_removezip3":/** @type {(inputs: Createform_Importedrepo_Removezip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove uploaded ZIP`)
},"createform_lovableonlovable_brand3":/** @type {(inputs: Createform_Lovableonlovable_Brand3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable`)
},"createform_lovableonlovable_description3":/** @type {(inputs: Createform_Lovableonlovable_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This copies the Lovable repository into your new project — think of it as a remix! The preview can take 5+ minutes to show up, but feel free to ask the agent for changes right away.`)
},"createform_lovableonlovable_hint3":/** @type {(inputs: Createform_Lovableonlovable_Hint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build with Lovable on Lovable runtime`)
},"createform_lovableonlovable_togglearialabel5":/** @type {(inputs: Createform_Lovableonlovable_Togglearialabel5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle Lovable project template`)
},"createform_switchworkspace_descriptiondefault3":/** @type {(inputs: Createform_Switchworkspace_Descriptiondefault3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a workspace where you have permission to create projects.`)
},"createform_switchworkspace_descriptionwithreason4":/** @type {(inputs: Createform_Switchworkspace_Descriptionwithreason4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.reason} Select a workspace where you have editor access or higher.`)
},"createform_switchworkspace_title2":/** @type {(inputs: Createform_Switchworkspace_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch workspace`)
},"createform_templatesdialog_createdesignsystem4":/** @type {(inputs: Createform_Templatesdialog_Createdesignsystem4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create design system`)
},"createform_templatesdialog_designsystemdescription4":/** @type {(inputs: Createform_Templatesdialog_Designsystemdescription4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Select a design system from <strong>${i?.name}</strong> and tell Lovable how to use it. Set projects as design systems in project settings.`)
},"createform_templatesdialog_emptydesignsystem4":/** @type {(inputs: Createform_Templatesdialog_Emptydesignsystem4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set a project as a design system in project settings.`)
},"createform_templatesdialog_emptytemplate3":/** @type {(inputs: Createform_Templatesdialog_Emptytemplate3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set a project as a template in project settings.`)
},"createform_templatesdialog_loaderror3":/** @type {(inputs: Createform_Templatesdialog_Loaderror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load projects`)
},"createform_templatesdialog_nosearchresults4":/** @type {(inputs: Createform_Templatesdialog_Nosearchresults4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matches found.`)
},"createform_templatesdialog_retry2":/** @type {(inputs: Createform_Templatesdialog_Retry2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"createform_templatesdialog_searchdesignsystems4":/** @type {(inputs: Createform_Templatesdialog_Searchdesignsystems4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search design systems`)
},"createform_templatesdialog_searchtemplates3":/** @type {(inputs: Createform_Templatesdialog_Searchtemplates3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search templates`)
},"createform_templatesdialog_templatedescription3":/** @type {(inputs: Createform_Templatesdialog_Templatedescription3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Select a project from <strong>${i?.name}</strong> and tell Lovable how to use it. Set projects as templates in project settings.`)
},"createform_templatesdialog_usedesignsystem4":/** @type {(inputs: Createform_Templatesdialog_Usedesignsystem4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a design system`)
},"createform_templatesdialog_usetemplate3":/** @type {(inputs: Createform_Templatesdialog_Usetemplate3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a template`)
},"createform_toast_attachmentsremovedsensitive3":/** @type {(inputs: Createform_Toast_Attachmentsremovedsensitive3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attachments removed: contained sensitive data`)
},"createform_toast_attachmentsremovedsensitive_description3":/** @type {(inputs: Createform_Toast_Attachmentsremovedsensitive_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Re-attach a clean file and try again.`)
},"createform_toast_folderaddfailed3":/** @type {(inputs: Createform_Toast_Folderaddfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project created successfully, but failed to add it to the folder.`)
},"createform_toast_highdemand2":/** @type {(inputs: Createform_Toast_Highdemand2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`High demand! Please try again in a moment.`)
},"createform_toast_messageblocked_descriptiondefault3":/** @type {(inputs: Createform_Toast_Messageblocked_Descriptiondefault3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your message and try again.`)
},"createform_toast_messageblockedsensitive3":/** @type {(inputs: Createform_Toast_Messageblockedsensitive3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message blocked: contains sensitive data`)
},"createform_toast_messageblockedsensitive_descriptionattachments4":/** @type {(inputs: Createform_Toast_Messageblockedsensitive_Descriptionattachments4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flagged attachments were also removed. Edit your message and try again.`)
},"createform_toast_notauthenticated2":/** @type {(inputs: Createform_Toast_Notauthenticated2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not authenticated`)
},"createform_toast_workspacenotfound3":/** @type {(inputs: Createform_Toast_Workspacenotfound3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We had trouble finding your workspace.`)
},"createform_toast_workspacenotfound_description3":/** @type {(inputs: Createform_Toast_Workspacenotfound_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again later or contact support if the problem persists.`)
},"createform_togglemodeshortcut3":/** @type {(inputs: Createform_Togglemodeshortcut3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle with <kbd>alt P</kbd>`)
},"createform_unpublishedlibrary_contactadmin3":/** @type {(inputs: Createform_Unpublishedlibrary_Contactadmin3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact a workspace admin to create an initial release.`)
},"createform_unpublishedlibrary_createreleaseprompt4":/** @type {(inputs: Createform_Unpublishedlibrary_Createreleaseprompt4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`<link>Create an initial release</link> to make it available.`)
},"createform_uploadzip_description2":/** @type {(inputs: Createform_Uploadzip_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload a .zip file containing your project (max 1GB).`)
},"createform_uploadzip_dragdrop3":/** @type {(inputs: Createform_Uploadzip_Dragdrop3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag and drop or <browse>browse</browse>`)
},"createform_uploadzip_errornotzip4":/** @type {(inputs: Createform_Uploadzip_Errornotzip4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please select a .zip file`)
},"createform_uploadzip_errortoolarge4":/** @type {(inputs: Createform_Uploadzip_Errortoolarge4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File is too large (max 1GB)`)
},"createform_uploadzip_filelabel3":/** @type {(inputs: Createform_Uploadzip_Filelabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip file`)
},"createform_uploadzip_selectfile3":/** @type {(inputs: Createform_Uploadzip_Selectfile3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select file`)
},"createform_viewerplaceholder2":/** @type {(inputs: Createform_Viewerplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viewers can only view existing projects`)
},"createformsettingsmenu_automodel4":/** @type {(inputs: Createformsettingsmenu_Automodel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`auto`)
},"createformsettingsmenu_mode3":/** @type {(inputs: Createformsettingsmenu_Mode3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mode`)
},"createformsettingsmenu_model3":/** @type {(inputs: Createformsettingsmenu_Model3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
},"createformsettingsmenu_trigger3":/** @type {(inputs: Createformsettingsmenu_Trigger3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Composer settings`)
},"currentviewcontext_annotation2":/** @type {(inputs: Currentviewcontext_Annotation2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annotation`)
},"currentviewcontext_removeannotation3":/** @type {(inputs: Currentviewcontext_Removeannotation3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove annotation from chat`)
},"currentviewcontext_removefromcontext4":/** @type {(inputs: Currentviewcontext_Removefromcontext4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name} from context`)
},"dashboard_addtofavorites2":/** @type {(inputs: Dashboard_Addtofavorites2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to favorites`)
},"dashboard_allworkspaces1":/** @type {(inputs: Dashboard_Allworkspaces1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All workspaces`)
},"dashboard_analytics":/** @type {(inputs: Dashboard_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analytics`)
},"dashboard_chats":/** @type {(inputs: Dashboard_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
},"dashboard_collapsesection1":/** @type {(inputs: Dashboard_Collapsesection1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Collapse ${i?.label}`)
},"dashboard_continuetoplan2":/** @type {(inputs: Dashboard_Continuetoplan2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue to plan`)
},"dashboard_copyprojectlink2":/** @type {(inputs: Dashboard_Copyprojectlink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy project link`)
},"dashboard_copypublishedapplink3":/** @type {(inputs: Dashboard_Copypublishedapplink3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy published app link`)
},"dashboard_createnewworkspace2":/** @type {(inputs: Dashboard_Createnewworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create new workspace`)
},"dashboard_createworkspace1":/** @type {(inputs: Dashboard_Createworkspace1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create workspace`)
},"dashboard_creditsamount1":/** @type {(inputs: Dashboard_Creditsamount1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.amount} credits`)
},"dashboard_creditsdailybuild2":/** @type {(inputs: Dashboard_Creditsdailybuild2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily build credits`)
},"dashboard_creditsdailybuildinfo3":/** @type {(inputs: Dashboard_Creditsdailybuildinfo3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily build credits info`)
},"dashboard_creditsleft1":/** @type {(inputs: Dashboard_Creditsleft1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.amount} left`)
},"dashboard_creditsleftword2":/** @type {(inputs: Dashboard_Creditsleftword2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`left`)
},"dashboard_creditspersonalcredits2":/** @type {(inputs: Dashboard_Creditspersonalcredits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal credits`)
},"dashboard_creditspersonalusage2":/** @type {(inputs: Dashboard_Creditspersonalusage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal usage`)
},"dashboard_creditsteam1":/** @type {(inputs: Dashboard_Creditsteam1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team credits`)
},"dashboard_creditsusedword2":/** @type {(inputs: Dashboard_Creditsusedword2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`used`)
},"dashboard_expandsection1":/** @type {(inputs: Dashboard_Expandsection1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Expand ${i?.label}`)
},"dashboard_filterrecents1":/** @type {(inputs: Dashboard_Filterrecents1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter recents`)
},"dashboard_findworkspaces1":/** @type {(inputs: Dashboard_Findworkspaces1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find workspaces`)
},"dashboard_goback1":/** @type {(inputs: Dashboard_Goback1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go back`)
},"dashboard_invitemembers1":/** @type {(inputs: Dashboard_Invitemembers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite members`)
},"dashboard_invitemembersshort2":/** @type {(inputs: Dashboard_Invitemembersshort2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite`)
},"dashboard_library":/** @type {(inputs: Dashboard_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Library`)
},"dashboard_mainmenu1":/** @type {(inputs: Dashboard_Mainmenu1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Main menu`)
},"dashboard_membercount1":/** @type {(inputs: Dashboard_Membercount1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} member`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} members`);
	return /** @type {LocalizedString} */ ("dashboard_memberCount");
},"dashboard_moreoptionsfor2":/** @type {(inputs: Dashboard_Moreoptionsfor2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`More options for ${i?.name}`)
},"dashboard_movetofolder2":/** @type {(inputs: Dashboard_Movetofolder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move to folder`)
},"dashboard_newchat1":/** @type {(inputs: Dashboard_Newchat1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New chat`)
},"dashboard_openinnewtab3":/** @type {(inputs: Dashboard_Openinnewtab3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open in new tab`)
},"dashboard_projectactions1":/** @type {(inputs: Dashboard_Projectactions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project actions`)
},"dashboard_remix":/** @type {(inputs: Dashboard_RemixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remix`)
},"dashboard_removefromfavorites2":/** @type {(inputs: Dashboard_Removefromfavorites2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove from favorites`)
},"dashboard_shareproject1":/** @type {(inputs: Dashboard_Shareproject1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Share ${i?.name}`)
},"dashboard_star":/** @type {(inputs: Dashboard_StarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Star`)
},"dashboard_themebackground1":/** @type {(inputs: Dashboard_Themebackground1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.theme} background`)
},"dashboard_themedark1":/** @type {(inputs: Dashboard_Themedark1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
},"dashboard_themelight1":/** @type {(inputs: Dashboard_Themelight1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
},"dashboard_themesystem1":/** @type {(inputs: Dashboard_Themesystem1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
},"dashboard_unstar":/** @type {(inputs: Dashboard_UnstarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unstar`)
},"dashboard_viewpublishedsite2":/** @type {(inputs: Dashboard_Viewpublishedsite2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View published site`)
},"dashboard_workspacemenu1":/** @type {(inputs: Dashboard_Workspacemenu1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} workspace menu`)
},"dashboard_workspaceplanlabel2":/** @type {(inputs: Dashboard_Workspaceplanlabel2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.planName} Plan`)
},"dashboardsidebar_accountmenu2":/** @type {(inputs: Dashboardsidebar_Accountmenu2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account menu`)
},"dashboardsidebar_allprojects2":/** @type {(inputs: Dashboardsidebar_Allprojects2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All projects`)
},"dashboardsidebar_allprojectsoptions3":/** @type {(inputs: Dashboardsidebar_Allprojectsoptions3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All projects options`)
},"dashboardsidebar_appearance1":/** @type {(inputs: Dashboardsidebar_Appearance1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appearance`)
},"dashboardsidebar_closesidebar2":/** @type {(inputs: Dashboardsidebar_Closesidebar2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close sidebar`)
},"dashboardsidebar_community1":/** @type {(inputs: Dashboardsidebar_Community1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
},"dashboardsidebar_connectors1":/** @type {(inputs: Dashboardsidebar_Connectors1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"dashboardsidebar_createdbyme3":/** @type {(inputs: Dashboardsidebar_Createdbyme3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created by me`)
},"dashboardsidebar_creditsperreferral3":/** @type {(inputs: Dashboardsidebar_Creditsperreferral3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} credits per paid referral`)
},"dashboardsidebar_dashboard1":/** @type {(inputs: Dashboardsidebar_Dashboard1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
},"dashboardsidebar_documentation1":/** @type {(inputs: Dashboardsidebar_Documentation1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentation`)
},"dashboardsidebar_fastandlight3":/** @type {(inputs: Dashboardsidebar_Fastandlight3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fast and light`)
},"dashboardsidebar_getdesktopapp3":/** @type {(inputs: Dashboardsidebar_Getdesktopapp3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get the desktop app`)
},"dashboardsidebar_homepage1":/** @type {(inputs: Dashboardsidebar_Homepage1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Homepage`)
},"dashboardsidebar_inbox1":/** @type {(inputs: Dashboardsidebar_Inbox1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox`)
},"dashboardsidebar_opensearch2":/** @type {(inputs: Dashboardsidebar_Opensearch2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open search (⌘K)`)
},"dashboardsidebar_opensidebar2":/** @type {(inputs: Dashboardsidebar_Opensidebar2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open sidebar`)
},"dashboardsidebar_profile1":/** @type {(inputs: Dashboardsidebar_Profile1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile`)
},"dashboardsidebar_projects1":/** @type {(inputs: Dashboardsidebar_Projects1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projects`)
},"dashboardsidebar_recents1":/** @type {(inputs: Dashboardsidebar_Recents1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recents`)
},"dashboardsidebar_resources1":/** @type {(inputs: Dashboardsidebar_Resources1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resources`)
},"dashboardsidebar_search1":/** @type {(inputs: Dashboardsidebar_Search1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
},"dashboardsidebar_settings1":/** @type {(inputs: Dashboardsidebar_Settings1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
},"dashboardsidebar_sharedwithme3":/** @type {(inputs: Dashboardsidebar_Sharedwithme3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared with me`)
},"dashboardsidebar_sharelovable2":/** @type {(inputs: Dashboardsidebar_Sharelovable2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share Lovable`)
},"dashboardsidebar_sidebar1":/** @type {(inputs: Dashboardsidebar_Sidebar1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidebar`)
},"dashboardsidebar_signout2":/** @type {(inputs: Dashboardsidebar_Signout2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out`)
},"dashboardsidebar_starred1":/** @type {(inputs: Dashboardsidebar_Starred1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starred`)
},"dashboardsidebar_support1":/** @type {(inputs: Dashboardsidebar_Support1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support`)
},"dashboardsidebar_unlockmorefeatures3":/** @type {(inputs: Dashboardsidebar_Unlockmorefeatures3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlock more features`)
},"deleteaccountdialog_back2":/** @type {(inputs: Deleteaccountdialog_Back2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
},"deleteaccountdialog_cancel2":/** @type {(inputs: Deleteaccountdialog_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"deleteaccountdialog_canceldescription3":/** @type {(inputs: Deleteaccountdialog_Canceldescription3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your account is scheduled for deletion on ${i?.date}. You can cancel this to keep your account.`)
},"deleteaccountdialog_cancelfailed3":/** @type {(inputs: Deleteaccountdialog_Cancelfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to cancel deletion`)
},"deleteaccountdialog_canceling2":/** @type {(inputs: Deleteaccountdialog_Canceling2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canceling...`)
},"deleteaccountdialog_canceltitle3":/** @type {(inputs: Deleteaccountdialog_Canceltitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel account deletion`)
},"deleteaccountdialog_close2":/** @type {(inputs: Deleteaccountdialog_Close2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"deleteaccountdialog_continue2":/** @type {(inputs: Deleteaccountdialog_Continue2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"deleteaccountdialog_deleteaccount3":/** @type {(inputs: Deleteaccountdialog_Deleteaccount3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete account`)
},"deleteaccountdialog_deleteitemdata4":/** @type {(inputs: Deleteaccountdialog_Deleteitemdata4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account and all associated data`)
},"deleteaccountdialog_deleteitemmemberships4":/** @type {(inputs: Deleteaccountdialog_Deleteitemmemberships4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace memberships and invitations`)
},"deleteaccountdialog_deleteitemsubscriptions4":/** @type {(inputs: Deleteaccountdialog_Deleteitemsubscriptions4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your active subscriptions`)
},"deleteaccountdialog_deleteitemworkspaces4":/** @type {(inputs: Deleteaccountdialog_Deleteitemworkspaces4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any workspaces you own, unless you transferred ownership`)
},"deleteaccountdialog_deletewithcountdown4":/** @type {(inputs: Deleteaccountdialog_Deletewithcountdown4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete account (${i?.countdown})`)
},"deleteaccountdialog_deletionscheduledtoast4":/** @type {(inputs: Deleteaccountdialog_Deletionscheduledtoast4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deletion scheduled`)
},"deleteaccountdialog_deletionscheduledtoastdescription5":/** @type {(inputs: Deleteaccountdialog_Deletionscheduledtoastdescription5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account will be deleted in 30 days.`)
},"deleteaccountdialog_emaildescription3":/** @type {(inputs: Deleteaccountdialog_Emaildescription3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type your email address to confirm: ${i?.email}`)
},"deleteaccountdialog_emailtitle3":/** @type {(inputs: Deleteaccountdialog_Emailtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm email`)
},"deleteaccountdialog_introdescription3":/** @type {(inputs: Deleteaccountdialog_Introdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This action is permanent and cannot be undone.`)
},"deleteaccountdialog_introtitle3":/** @type {(inputs: Deleteaccountdialog_Introtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete your account`)
},"deleteaccountdialog_keepaccount3":/** @type {(inputs: Deleteaccountdialog_Keepaccount3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep my account`)
},"deleteaccountdialog_otherreasonarialabel5":/** @type {(inputs: Deleteaccountdialog_Otherreasonarialabel5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Additional reason for account deletion`)
},"deleteaccountdialog_permanentlydeletetitle4":/** @type {(inputs: Deleteaccountdialog_Permanentlydeletetitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently delete:`)
},"deleteaccountdialog_processing2":/** @type {(inputs: Deleteaccountdialog_Processing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing...`)
},"deleteaccountdialog_reasonconfusing3":/** @type {(inputs: Deleteaccountdialog_Reasonconfusing3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It's too confusing`)
},"deleteaccountdialog_reasonduplicate3":/** @type {(inputs: Deleteaccountdialog_Reasonduplicate3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a duplicate account`)
},"deleteaccountdialog_reasonmissingfeatures4":/** @type {(inputs: Deleteaccountdialog_Reasonmissingfeatures4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing features`)
},"deleteaccountdialog_reasonnotuseful4":/** @type {(inputs: Deleteaccountdialog_Reasonnotuseful4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I didn't find the product useful`)
},"deleteaccountdialog_reasonother3":/** @type {(inputs: Deleteaccountdialog_Reasonother3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
},"deleteaccountdialog_reasonprivacy3":/** @type {(inputs: Deleteaccountdialog_Reasonprivacy3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy concerns`)
},"deleteaccountdialog_reasonswitching3":/** @type {(inputs: Deleteaccountdialog_Reasonswitching3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I'm switching to a different product`)
},"deleteaccountdialog_reasontooexpensive4":/** @type {(inputs: Deleteaccountdialog_Reasontooexpensive4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too expensive`)
},"deleteaccountdialog_scheduledfor3":/** @type {(inputs: Deleteaccountdialog_Scheduledfor3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deletion will be scheduled for ${i?.date}.`)
},"deleteaccountdialog_schedulefailed3":/** @type {(inputs: Deleteaccountdialog_Schedulefailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to schedule account deletion`)
},"deleteaccountdialog_tellusmore4":/** @type {(inputs: Deleteaccountdialog_Tellusmore4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell us more (optional)`)
},"deleteaccountdialog_typeemail3":/** @type {(inputs: Deleteaccountdialog_Typeemail3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type your email address to confirm`)
},"deleteaccountdialog_typeworkspacename4":/** @type {(inputs: Deleteaccountdialog_Typeworkspacename4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type the workspace name to confirm`)
},"deleteaccountdialog_whydeleting3":/** @type {(inputs: Deleteaccountdialog_Whydeleting3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why are you deleting your account?`)
},"deleteaccountdialog_workspace2":/** @type {(inputs: Deleteaccountdialog_Workspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace`)
},"deleteaccountdialog_workspacenameplaceholder4":/** @type {(inputs: Deleteaccountdialog_Workspacenameplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace name`)
},"deleteaccountdialog_workspacesdescription3":/** @type {(inputs: Deleteaccountdialog_Workspacesdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You own this workspace. To keep it, transfer ownership to another member before deleting your account.`)
},"deleteaccountdialog_workspacestitle3":/** @type {(inputs: Deleteaccountdialog_Workspacestitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm workspace deletion`)
},"designassetssubmenu_deleteasset4":/** @type {(inputs: Designassetssubmenu_Deleteasset4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete ${i?.name}`)
},"designassetssubmenu_deleteconfirm4":/** @type {(inputs: Designassetssubmenu_Deleteconfirm4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete "${i?.name}" from Figma designs? This will not delete it from Figma.`)
},"designassetssubmenu_deleteerror4":/** @type {(inputs: Designassetssubmenu_Deleteerror4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete Figma design`)
},"designassetssubmenu_deletesuccess4":/** @type {(inputs: Designassetssubmenu_Deletesuccess4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Figma design deleted`)
},"designassetssubmenu_figmadesigns4":/** @type {(inputs: Designassetssubmenu_Figmadesigns4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Figma designs`)
},"designassetssubmenu_filecount4":/** @type {(inputs: Designassetssubmenu_Filecount4Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} file`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} files`);
	return /** @type {LocalizedString} */ ("designAssetsSubMenu_fileCount");
},"designerspage_faq1_answer1":/** @type {(inputs: Designerspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You get full visual control with React and Tailwind to make Lovable apps match your design files exactly. Workspace Themes can be used to keep design standards consistent across projects.`)
},"designerspage_faq1_question1":/** @type {(inputs: Designerspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Will my Lovable apps match my design files?`)
},"designerspage_faq2_answer1":/** @type {(inputs: Designerspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can hand off to developers at any time. Code can sync to GitHub from day one, so developers can pull it, review it, and extend it whenever you're ready.`)
},"designerspage_faq2_question1":/** @type {(inputs: Designerspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I hand off to developers later?`)
},"designerspage_faq3_answer1":/** @type {(inputs: Designerspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New apps are built on TanStack Start, a modern React framework with server-side rendering (SSR), deployed on Cloudflare Workers. All projects use Supabase for database, auth, storage, and realtime. Most apps built before May 2026 run on React and Tailwind CSS, these keep working as before and benefit from pre-rendering for better search visibility.`)
},"designerspage_faq3_question1":/** @type {(inputs: Designerspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What tech stack does Lovable use?`)
},"designerspage_faq4_answer1":/** @type {(inputs: Designerspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Figma prototyping creates clickable prototypes without backend functionality. Lovable differs as it creates a working code with databases, authentication, integrations and APIs. With Lovable you can ship real products to production, not just stakeholder demos.`)
},"designerspage_faq4_question1":/** @type {(inputs: Designerspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How is this different from Figma prototyping?`)
},"designerspage_faq5_answer1":/** @type {(inputs: Designerspage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable differs from Webflow and Framer in that it builds full-stack apps with backends. Webflow and Framer build marketing sites only. Different tools for different jobs.`)
},"designerspage_faq5_question1":/** @type {(inputs: Designerspage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How is this different from Webflow or Framer?`)
},"designerspage_faqtitle2":/** @type {(inputs: Designerspage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"designerspage_feature1_description1":/** @type {(inputs: Designerspage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Static screens don't show what happens when data is missing, a user makes a mistake, or permissions change. Prototype flows with real state, logic, and role-based behavior so you can test interaction decisions, not just visual polish.`)
},"designerspage_feature1_title1":/** @type {(inputs: Designerspage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototype behavior, not just layout`)
},"designerspage_feature2_description1":/** @type {(inputs: Designerspage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most product risk lives in the edge cases: error states, loading, retries, empty dashboards, and partial setup. Prototype those scenarios directly so teams can agree on expected behavior before implementation work begins.`)
},"designerspage_feature2_title1":/** @type {(inputs: Designerspage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design the "unhappy paths"`)
},"designerspage_feature3_description1":/** @type {(inputs: Designerspage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Many products behave differently depending on who's using them. Prototype admin vs member flows, gated actions, and restricted views so stakeholders can evaluate UX tradeoffs and feasibility without a long spec thread.`)
},"designerspage_feature3_title1":/** @type {(inputs: Designerspage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model permissions and access`)
},"designerspage_feature4_description1":/** @type {(inputs: Designerspage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onboarding is where intent meets reality: step order, required inputs, defaults, and drop-off points. Build onboarding flows with branching paths and setup steps so you can evaluate whether the product feels understandable and complete.`)
},"designerspage_feature4_title1":/** @type {(inputs: Designerspage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototype time-to-value`)
},"designerspage_feature5_description1":/** @type {(inputs: Designerspage_Feature5_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design intent often gets lost between Figma frames, tickets, and meetings. A working prototype gives teams a shared reference point: what happens, when it happens, and what changes after each action.`)
},"designerspage_feature5_title1":/** @type {(inputs: Designerspage_Feature5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace interpretation with something clickable`)
},"designerspage_hero_cta1":/** @type {(inputs: Designerspage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"designerspage_hero_h11":/** @type {(inputs: Designerspage_Hero_H11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools for designers`)
},"designerspage_hero_subtitle1":/** @type {(inputs: Designerspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring your vision to life.
Create Lovable experiences.`)
},"designerspage_hero_titleline12":/** @type {(inputs: Designerspage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design real products,`)
},"designerspage_hero_titleline22":/** @type {(inputs: Designerspage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`not mockups`)
},"designerspage_meta_description1":/** @type {(inputs: Designerspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring your designs to life with Lovable. Get full visual control, AI image generation, and production-ready prototypes without waiting on engineering.`)
},"designerspage_meta_title1":/** @type {(inputs: Designerspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Tools for Designers | Best No-Code App Builder for Designers | Lovable`)
},"designerspage_section_title1":/** @type {(inputs: Designerspage_Section_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Screens aren't enough`)
},"designsystemattach_attachbutton3":/** @type {(inputs: Designsystemattach_Attachbutton3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach design system`)
},"designsystemattach_attachconsequencecopy4":/** @type {(inputs: Designsystemattach_Attachconsequencecopy4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Its components and tokens are copied into this project.`)
},"designsystemattach_attachconsequencerework4":/** @type {(inputs: Designsystemattach_Attachconsequencerework4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The AI reworks this project to build with it, which changes your existing code.`)
},"designsystemattach_attacheddescription3":/** @type {(inputs: Designsystemattach_Attacheddescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The design system the AI builds this project with.`)
},"designsystemattach_attaching2":/** @type {(inputs: Designsystemattach_Attaching2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attaching design system…`)
},"designsystemattach_attachtimeouttitle4":/** @type {(inputs: Designsystemattach_Attachtimeouttitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attaching is taking longer than expected`)
},"designsystemattach_cancel2":/** @type {(inputs: Designsystemattach_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"designsystemattach_confirmattachtitle4":/** @type {(inputs: Designsystemattach_Confirmattachtitle4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Attach ${i?.name} as this project's design system?`)
},"designsystemattach_confirmremovetitle4":/** @type {(inputs: Designsystemattach_Confirmremovetitle4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name} as this project's design system?`)
},"designsystemattach_done2":/** @type {(inputs: Designsystemattach_Done2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
},"designsystemattach_emptygrid3":/** @type {(inputs: Designsystemattach_Emptygrid3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No design systems in this workspace. Create one to get started.`)
},"designsystemattach_griddescription3":/** @type {(inputs: Designsystemattach_Griddescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a design system to attach it to this project.`)
},"designsystemattach_loaderror3":/** @type {(inputs: Designsystemattach_Loaderror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load design systems. Check your connection and try again.`)
},"designsystemattach_open2":/** @type {(inputs: Designsystemattach_Open2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
},"designsystemattach_remove2":/** @type {(inputs: Designsystemattach_Remove2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
},"designsystemattach_removeconsequencefiles4":/** @type {(inputs: Designsystemattach_Removeconsequencefiles4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Its files stay under <code>src/design-system</code> but become unmanaged: free to edit, with no adherence contract.`)
},"designsystemattach_removeconsequenceupdates4":/** @type {(inputs: Designsystemattach_Removeconsequenceupdates4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This project will stop receiving updates from this design system.`)
},"designsystemattach_removeerror3":/** @type {(inputs: Designsystemattach_Removeerror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't remove the design system. Please try again.`)
},"designsystemattach_removetimeouttitle4":/** @type {(inputs: Designsystemattach_Removetimeouttitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removing is taking longer than expected`)
},"designsystemattach_retry2":/** @type {(inputs: Designsystemattach_Retry2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
},"designsystemattach_successdescription3":/** @type {(inputs: Designsystemattach_Successdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes are being applied in the chat.`)
},"designsystemattach_successtitle3":/** @type {(inputs: Designsystemattach_Successtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design system attached`)
},"designsystemattach_thislibrary3":/** @type {(inputs: Designsystemattach_Thislibrary3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`this library`)
},"designsystemattach_timeoutdescription3":/** @type {(inputs: Designsystemattach_Timeoutdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It's still finishing in the background. You can close this and check back shortly.`)
},"designsystemattach_title2":/** @type {(inputs: Designsystemattach_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design system`)
},"designsystempublish_majordescription3":/** @type {(inputs: Designsystempublish_Majordescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking changes`)
},"designsystempublish_majortitle3":/** @type {(inputs: Designsystempublish_Majortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Major`)
},"designsystempublish_minordescription3":/** @type {(inputs: Designsystempublish_Minordescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New and compatible`)
},"designsystempublish_minortitle3":/** @type {(inputs: Designsystempublish_Minortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minor`)
},"designsystempublish_patchdescription3":/** @type {(inputs: Designsystempublish_Patchdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixes only`)
},"designsystempublish_patchtitle3":/** @type {(inputs: Designsystempublish_Patchtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
},"designsystempublish_suggested2":/** @type {(inputs: Designsystempublish_Suggested2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggested`)
},"designsystempublish_versionlabel3":/** @type {(inputs: Designsystempublish_Versionlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
},"designsystemsection_attach2":/** @type {(inputs: Designsystemsection_Attach2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach design system`)
},"designsystemsection_consumerdescription3":/** @type {(inputs: Designsystemsection_Consumerdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The design system the AI builds this project with.`)
},"designsystemsection_label2":/** @type {(inputs: Designsystemsection_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design system`)
},"designsystemsection_librarydescription3":/** @type {(inputs: Designsystemsection_Librarydescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This project is a design system used by other projects.`)
},"designsystemsection_manage2":/** @type {(inputs: Designsystemsection_Manage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage design system`)
},"designsystemsection_multiplecount3":/** @type {(inputs: Designsystemsection_Multiplecount3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} design systems`)
},"designsystemsection_nopermission3":/** @type {(inputs: Designsystemsection_Nopermission3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You don't have permission to change this project's design system.`)
},"designsystemsection_open2":/** @type {(inputs: Designsystemsection_Open2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open design system`)
},"devprodonboarding_page1_description2":/** @type {(inputs: Devprodonboarding_Page1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We create a second Test database so you can experiment without affecting your users.`)
},"devprodonboarding_page1_live_description2":/** @type {(inputs: Devprodonboarding_Page1_Live_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real user data, unaffected by your edits`)
},"devprodonboarding_page1_live_label2":/** @type {(inputs: Devprodonboarding_Page1_Live_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
},"devprodonboarding_page1_test_description2":/** @type {(inputs: Devprodonboarding_Page1_Test_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit and experiment here`)
},"devprodonboarding_page1_test_label2":/** @type {(inputs: Devprodonboarding_Page1_Test_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test`)
},"devprodonboarding_page1_title2":/** @type {(inputs: Devprodonboarding_Page1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build without affecting user data`)
},"devprodonboarding_page2_description2":/** @type {(inputs: Devprodonboarding_Page2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When you chat with Lovable, you always build in Test.`)
},"devprodonboarding_page2_footer2":/** @type {(inputs: Devprodonboarding_Page2_Footer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes such as edge functions or migrations stay in Test until you publish. User data is never affected.`)
},"devprodonboarding_page2_title2":/** @type {(inputs: Devprodonboarding_Page2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your changes stay in Test`)
},"devprodonboarding_page3_description2":/** @type {(inputs: Devprodonboarding_Page3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View or edit real user data in the Cloud panel — but changes take effect immediately.`)
},"devprodonboarding_page3_footer_caution2":/** @type {(inputs: Devprodonboarding_Page3_Footer_Caution2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be careful: edits to Live data affect your users immediately.`)
},"devprodonboarding_page3_footer_chat2":/** @type {(inputs: Devprodonboarding_Page3_Footer_Chat2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your chat always builds in Test — switching views doesn't change that.`)
},"devprodonboarding_page3_title2":/** @type {(inputs: Devprodonboarding_Page3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Access Live data anytime`)
},"devprodonboarding_page4_description2":/** @type {(inputs: Devprodonboarding_Page4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your code goes live when you publish. Test data stays in Test.`)
},"devprodonboarding_page4_item_livenotoverwritten4":/** @type {(inputs: Devprodonboarding_Page4_Item_Livenotoverwritten4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live data doesn't get overwritten`)
},"devprodonboarding_page4_item_sync2":/** @type {(inputs: Devprodonboarding_Page4_Item_Sync2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes such as edge functions or migrations sync to Live`)
},"devprodonboarding_page4_item_teststays3":/** @type {(inputs: Devprodonboarding_Page4_Item_Teststays3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test data stays in Test`)
},"devprodonboarding_page4_title2":/** @type {(inputs: Devprodonboarding_Page4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish code, protect data`)
},"devprodonboarding_page5_description2":/** @type {(inputs: Devprodonboarding_Page5_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app is already live. We'll create a Test environment so you can build safely without affecting your users.`)
},"devprodonboarding_page5_enablebutton3":/** @type {(inputs: Devprodonboarding_Page5_Enablebutton3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Live & Test Environments`)
},"devprodonboarding_page5_enabling2":/** @type {(inputs: Devprodonboarding_Page5_Enabling2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabling...`)
},"devprodonboarding_page5_footer_copydata3":/** @type {(inputs: Devprodonboarding_Page5_Footer_Copydata3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We'll copy your current data so you can start experimenting right away.`)
},"devprodonboarding_page5_learnmore3":/** @type {(inputs: Devprodonboarding_Page5_Learnmore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn about environments`)
},"devprodonboarding_page5_success_description2":/** @type {(inputs: Devprodonboarding_Page5_Success_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can now build and experiment safely without affecting your live users.`)
},"devprodonboarding_page5_success_ready2":/** @type {(inputs: Devprodonboarding_Page5_Success_Ready2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test environment is ready`)
},"devprodonboarding_page5_title2":/** @type {(inputs: Devprodonboarding_Page5_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Live and Test Environments`)
},"devprodonboarding_page5_tryagain3":/** @type {(inputs: Devprodonboarding_Page5_Tryagain3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"discordpage_build_titleline12":/** @type {(inputs: Discordpage_Build_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come build`)
},"discordpage_build_titleline22":/** @type {(inputs: Discordpage_Build_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`something Lovable`)
},"discordpage_champions_part11":/** @type {(inputs: Discordpage_Champions_Part11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Champions are the people who show up every day. Not because they have to, but because they genuinely want to help others build. You'll spot them by the Champion`)
},"discordpage_champions_part21":/** @type {(inputs: Discordpage_Champions_Part21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`or Super Champion`)
},"discordpage_champions_part31":/** @type {(inputs: Discordpage_Champions_Part31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`badge next to their username.`)
},"discordpage_champions_title1":/** @type {(inputs: Discordpage_Champions_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meet the Champions`)
},"discordpage_community_card1_label1":/** @type {(inputs: Discordpage_Community_Card1_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active members`)
},"discordpage_community_card1_value1":/** @type {(inputs: Discordpage_Community_Card1_Value1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`160,000+`)
},"discordpage_community_card2_label1":/** @type {(inputs: Discordpage_Community_Card2_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuous activity`)
},"discordpage_community_card2_value1":/** @type {(inputs: Discordpage_Community_Card2_Value1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3,000+ hours`)
},"discordpage_community_card3_label1":/** @type {(inputs: Discordpage_Community_Card3_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone's always on`)
},"discordpage_community_card3_value1":/** @type {(inputs: Discordpage_Community_Card3_Value1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day, night & weekends`)
},"discordpage_community_part11":/** @type {(inputs: Discordpage_Community_Part11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Lovable Discord`)
},"discordpage_community_part21":/** @type {(inputs: Discordpage_Community_Part21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is one of the most active builder communities in the world. At any given moment, someone is shipping`)
},"discordpage_community_part31":/** @type {(inputs: Discordpage_Community_Part31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`someone is sharing a tip`)
},"discordpage_community_part41":/** @type {(inputs: Discordpage_Community_Part41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`and someone else already has the answer you're looking for.`)
},"discordpage_cta_joindiscord2":/** @type {(inputs: Discordpage_Cta_Joindiscord2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the Discord`)
},"discordpage_faq1_answer1":/** @type {(inputs: Discordpage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Lovable Discord is the online home of the Lovable community. It's a space for builders and creators of all skill levels to connect, share their work, and grow together. Whether you're just getting started or building for clients, there's a place for you here.`)
},"discordpage_faq1_question1":/** @type {(inputs: Discordpage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is the Lovable Discord and who is it for?`)
},"discordpage_faq2_answer1":/** @type {(inputs: Discordpage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nope. The Discord is open to everyone. You don't need a Lovable account at all to join and start getting involved.`)
},"discordpage_faq2_question1":/** @type {(inputs: Discordpage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need a paid Lovable account to join?`)
},"discordpage_faq3_answer1":/** @type {(inputs: Discordpage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not at all. The community includes complete beginners and experienced builders alike. What matters most is curiosity and a willingness to help others learn and build.`)
},"discordpage_faq3_question1":/** @type {(inputs: Discordpage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need to be technical?`)
},"discordpage_faq4_answer1":/** @type {(inputs: Discordpage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. The community and Champions are happy to dig into project-specific questions, whether that's a build challenge, an integration, or something that's just not working the way you expected. Note: Discord is not an official support platform. All assistance comes from fellow builders. For official support, visit <supportLink>Lovable support</supportLink>.`)
},"discordpage_faq4_question1":/** @type {(inputs: Discordpage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I get help with my specific project?`)
},"discordpage_faq5_answer1":/** @type {(inputs: Discordpage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A Discord server is like a Slack workspace — a shared space with channels for different topics and purposes. The Lovable server has channels for support, showcasing builds, announcements, and more.`)
},"discordpage_faq5_question1":/** @type {(inputs: Discordpage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What's a Discord "server"?`)
},"discordpage_faq6_answer1":/** @type {(inputs: Discordpage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a Discord account at discord.com if you don't have one, then join the Lovable server at <discordLink>https://discord.gg/lovable-dev</discordLink>. Once you're in, an onboarding flow will help you find your way around.`)
},"discordpage_faq6_question1":/** @type {(inputs: Discordpage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I get started?`)
},"discordpage_faq7_answer1":/** @type {(inputs: Discordpage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Champions are recognized members who've shown leadership, helpfulness, and a genuine commitment to the community over time. Keep showing up, keep helping others, and keep building. The path tends to find people who are already living it.`)
},"discordpage_faq7_question1":/** @type {(inputs: Discordpage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I become a Champion?`)
},"discordpage_faq_title1":/** @type {(inputs: Discordpage_Faq_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"discordpage_hero_subtitle1":/** @type {(inputs: Discordpage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`160,000+ builders are shipping real products together, right now. Ask questions, share what you're building, and find the people who get it.`)
},"discordpage_hero_titleline12":/** @type {(inputs: Discordpage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the online`)
},"discordpage_hero_titleline22":/** @type {(inputs: Discordpage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`community`)
},"discordpage_meta_description1":/** @type {(inputs: Discordpage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join 160,000+ builders in the Lovable Discord. Get help, share what you're building, meet Champions, and build with the community.`)
},"discordpage_meta_title1":/** @type {(inputs: Discordpage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the Lovable Discord | Lovable`)
},"discordpage_most_card1_description1":/** @type {(inputs: Discordpage_Most_Card1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask your question or join Dev Chat Live to get real answers from experienced builders. Get help quickly, skip the tickets, and learn from people who've been there.`)
},"discordpage_most_card1_linklabel2":/** @type {(inputs: Discordpage_Most_Card1_Linklabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`#community-support`)
},"discordpage_most_card1_title1":/** @type {(inputs: Discordpage_Most_Card1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get help`)
},"discordpage_most_card2_description1":/** @type {(inputs: Discordpage_Most_Card2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shipped something? Show it off.
The community celebrates every build, big or small.
And if you want honest feedback, you'll get that too.`)
},"discordpage_most_card2_linklabel2":/** @type {(inputs: Discordpage_Most_Card2_Linklabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`#lovable-built-showcase`)
},"discordpage_most_card2_title1":/** @type {(inputs: Discordpage_Most_Card2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share wins`)
},"discordpage_most_card3_description1":/** @type {(inputs: Discordpage_Most_Card3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live chats with the people building Lovable, every Tuesday and Thursday at 1pm ET. Ask anything, get real answers, and hear what's coming next. The CEO has been known to stop by.`)
},"discordpage_most_card3_linklabel2":/** @type {(inputs: Discordpage_Most_Card3_Linklabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
},"discordpage_most_card3_title1":/** @type {(inputs: Discordpage_Most_Card3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join weekly sessions`)
},"discordpage_most_cardlinkprefix3":/** @type {(inputs: Discordpage_Most_Cardlinkprefix3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join`)
},"discordpage_most_description1":/** @type {(inputs: Discordpage_Most_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Lovable Discord is more than a place to ask questions. It's where builders learn from each other, celebrate wins, and go from stuck to shipped.`)
},"discordpage_most_titleline12":/** @type {(inputs: Discordpage_Most_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to get`)
},"discordpage_most_titleline22":/** @type {(inputs: Discordpage_Most_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`the most out of it`)
},"discordpage_testimonial1_quote1":/** @type {(inputs: Discordpage_Testimonial1_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Lovable Discord community is the right home for builders who want to push each other to realize their creative vision!`)
},"discordpage_testimonial2_quote1":/** @type {(inputs: Discordpage_Testimonial2_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable's Discord community is one of a kind. The drive to build & help is unmatched – you gotta see it to believe it!`)
},"discordpage_testimonial3_quote1":/** @type {(inputs: Discordpage_Testimonial3_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You join the Lovable Discord to fix a bug, get feedback, or share what you built - and you walk out with real support and a few new friends who follow your entire builder journey. I don't build alone anymore.`)
},"discordpage_testimonials_titleline12":/** @type {(inputs: Discordpage_Testimonials_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From the community`)
},"discordpage_testimonials_titleline22":/** @type {(inputs: Discordpage_Testimonials_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`with love`)
},"dismissapikey_description2":/** @type {(inputs: Dismissapikey_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We detected API keys in your message. For security, ask Lovable to manage your secrets instead of including them directly.`)
},"dismissapikey_gotit3":/** @type {(inputs: Dismissapikey_Gotit3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Got it`)
},"dismissapikey_learnmore3":/** @type {(inputs: Dismissapikey_Learnmore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"dismissapikey_sendanyway3":/** @type {(inputs: Dismissapikey_Sendanyway3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send anyway`)
},"dismissapikey_title2":/** @type {(inputs: Dismissapikey_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to send this message?`)
},"dpapage_acknowledge11":/** @type {(inputs: Dpapage_Acknowledge11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This DPA does not establish a joint controllership arrangement under Article 26 of the GDPR.`)
},"dpapage_acknowledge21":/** @type {(inputs: Dpapage_Acknowledge21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each party remains solely responsible for its own compliance with Applicable Data Protection Laws in respect of its separate processing activities.`)
},"dpapage_acknowledge31":/** @type {(inputs: Dpapage_Acknowledge31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable processes Customer Personal Data solely on behalf of and under the instructions of the Customer.`)
},"dpapage_acknowledge41":/** @type {(inputs: Dpapage_Acknowledge41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable may process Service Data, Log Data, aggregated data, and de-identified data as an independent controller solely for analytics, security, billing, and product-development purposes.`)
},"dpapage_acknowledge51":/** @type {(inputs: Dpapage_Acknowledge51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable does not engage in automated decision-making with legal or similarly significant effects on Data Subjects.`)
},"dpapage_annex1_title1":/** @type {(inputs: Dpapage_Annex1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annex 1 - Description of Processing`)
},"dpapage_dpointro2":/** @type {(inputs: Dpapage_Dpointro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We have appointed a Data Protection Officer (DPO) that you can contact at:`)
},"dpapage_intro1":/** @type {(inputs: Dpapage_Intro1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This Data Processing Agreement ("DPA") forms part of the Terms of Service ordered by the Customer under an Order Form (the "Agreement") between Lovable and the Customer.`)
},"dpapage_lastupdated2":/** @type {(inputs: Dpapage_Lastupdated2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last updated: November 6, 2025`)
},"dpapage_meta_description1":/** @type {(inputs: Dpapage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terms outlining how personal data is processed, protected, and handled between parties in compliance with data protection laws.`)
},"dpapage_meta_title1":/** @type {(inputs: Dpapage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Data Processing Agreement`)
},"dpapage_partiesacknowledge2":/** @type {(inputs: Dpapage_Partiesacknowledge2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The parties expressly acknowledge and agree that:`)
},"dpapage_section10_title1":/** @type {(inputs: Dpapage_Section10_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10. Use of Customer Data for Artificial Intelligence and Machine Learning`)
},"dpapage_section11_title1":/** @type {(inputs: Dpapage_Section11_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`11. Return and Deletion`)
},"dpapage_section12_title1":/** @type {(inputs: Dpapage_Section12_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`12. Governing Law and Jurisdiction`)
},"dpapage_section13_title1":/** @type {(inputs: Dpapage_Section13_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`13. Indemnity`)
},"dpapage_section14_title1":/** @type {(inputs: Dpapage_Section14_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14. Liability`)
},"dpapage_section15_title1":/** @type {(inputs: Dpapage_Section15_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`15. US Privacy Laws`)
},"dpapage_section16_title1":/** @type {(inputs: Dpapage_Section16_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16. Miscellaneous`)
},"dpapage_section1_title1":/** @type {(inputs: Dpapage_Section1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1. Definitions`)
},"dpapage_section2_title1":/** @type {(inputs: Dpapage_Section2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2. Subject Matter, Activities and Duration`)
},"dpapage_section3_title1":/** @type {(inputs: Dpapage_Section3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3. Customer Obligations`)
},"dpapage_section4_title1":/** @type {(inputs: Dpapage_Section4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`4. Lovable's Obligations`)
},"dpapage_section5_title1":/** @type {(inputs: Dpapage_Section5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5. Security`)
},"dpapage_section6_title1":/** @type {(inputs: Dpapage_Section6_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`6. Data Breach Notification`)
},"dpapage_section7_title1":/** @type {(inputs: Dpapage_Section7_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`7. Sub-processing`)
},"dpapage_section8_title1":/** @type {(inputs: Dpapage_Section8_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`8. International Data Transfers`)
},"dpapage_section9_title1":/** @type {(inputs: Dpapage_Section9_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`9. Service Data`)
},"dpapage_signedversionnote3":/** @type {(inputs: Dpapage_Signedversionnote3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you're on a Business or Enterprise plan, your usage includes our Data Processing Agreement (DPA). A signed version is available`)
},"dpapage_signedversionnote_linktext4":/** @type {(inputs: Dpapage_Signedversionnote_Linktext4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`here`)
},"dpapage_title1":/** @type {(inputs: Dpapage_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data Processing Agreement`)
},"dscreate_fresh_description1":/** @type {(inputs: Dscreate_Fresh_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A blank system Lovable drafts with you.`)
},"dscreate_fresh_panel1":/** @type {(inputs: Dscreate_Fresh_Panel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable scaffolds a working design system from sensible defaults — tokens, base components, and a preview. You refine it in chat afterwards.`)
},"dscreate_fresh_title1":/** @type {(inputs: Dscreate_Fresh_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start fresh`)
},"dscreate_namelabel2":/** @type {(inputs: Dscreate_Namelabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
},"dscreate_nameplaceholder2":/** @type {(inputs: Dscreate_Nameplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My design system`)
},"dscreate_npm_description1":/** @type {(inputs: Dscreate_Npm_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrap a library you already publish.`)
},"dscreate_npm_packagelabel2":/** @type {(inputs: Dscreate_Npm_Packagelabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upstream npm package`)
},"dscreate_npm_panel1":/** @type {(inputs: Dscreate_Npm_Panel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You already have your design system published as an npm package — Lovable extracts its components and types on publish.`)
},"dscreate_npm_privatecheckbox2":/** @type {(inputs: Dscreate_Npm_Privatecheckbox2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It's in a private registry`)
},"dscreate_npm_registryurlerror3":/** @type {(inputs: Dscreate_Npm_Registryurlerror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter an https:// registry URL.`)
},"dscreate_npm_registryurllabel3":/** @type {(inputs: Dscreate_Npm_Registryurllabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registry URL`)
},"dscreate_npm_scopederror2":/** @type {(inputs: Dscreate_Npm_Scopederror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private registries need a scoped package name, e.g. @acme/components.`)
},"dscreate_npm_secretempty2":/** @type {(inputs: Dscreate_Npm_Secretempty2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching build secret.`)
},"dscreate_npm_secrethint_default2":/** @type {(inputs: Dscreate_Npm_Secrethint_Default2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build secret holding your registry token, from Workspace Settings → Build Secrets.`)
},"dscreate_npm_secrethint_loaderror3":/** @type {(inputs: Dscreate_Npm_Secrethint_Loaderror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load this workspace's build secrets — enter the secret's name manually.`)
},"dscreate_npm_secrethint_missing2":/** @type {(inputs: Dscreate_Npm_Secrethint_Missing2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No build secret named “${i?.name}” in this workspace yet — add it in Workspace Settings → Build Secrets, holding your registry token.`)
},"dscreate_npm_secrethint_none2":/** @type {(inputs: Dscreate_Npm_Secrethint_None2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This workspace has no build secrets yet — add one in Workspace Settings → Build Secrets (holding your registry token), then enter its name here.`)
},"dscreate_npm_secretlabel2":/** @type {(inputs: Dscreate_Npm_Secretlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auth token build secret`)
},"dscreate_npm_title1":/** @type {(inputs: Dscreate_Npm_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An npm package`)
},"dscreate_references_description1":/** @type {(inputs: Dscreate_References_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brand assets, screenshots, and component files.`)
},"dscreate_references_title1":/** @type {(inputs: Dscreate_References_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your references`)
},"dscreate_refs_capexceeded2":/** @type {(inputs: Dscreate_Refs_Capexceeded2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You can attach up to ${i?.max} reference files.`)
},"dscreate_refs_dropbrowse2":/** @type {(inputs: Dscreate_Refs_Dropbrowse2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`or browse your computer`)
},"dscreate_refs_droptitle2":/** @type {(inputs: Dscreate_Refs_Droptitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop screenshots, logos or component files`)
},"dscreate_refs_helper1":/** @type {(inputs: Dscreate_Refs_Helper1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable reads these once to draft tokens and starter components. Everything stays editable.`)
},"dscreate_refs_rejected1":/** @type {(inputs: Dscreate_Refs_Rejected1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some files were skipped — only images and component or style files under 5 MB are supported.`)
},"dscreate_refs_removefile2":/** @type {(inputs: Dscreate_Refs_Removefile2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name}`)
},"dscreate_startfromlabel3":/** @type {(inputs: Dscreate_Startfromlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start from`)
},"dscreate_submit1":/** @type {(inputs: Dscreate_Submit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create system`)
},"dscreate_title1":/** @type {(inputs: Dscreate_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New design system`)
},"dscreate_uploadallfailed3":/** @type {(inputs: Dscreate_Uploadallfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't upload your reference files — creating the design system without them.`)
},"dscreate_uploadsomefailed3":/** @type {(inputs: Dscreate_Uploadsomefailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some reference files couldn't be uploaded — continuing with the rest.`)
},"earnfreecredits_getfreecredits4":/** @type {(inputs: Earnfreecredits_Getfreecredits4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get free credits`)
},"editfolderdialog_accessinfolabel4":/** @type {(inputs: Editfolderdialog_Accessinfolabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How folder visibility works`)
},"editfolderdialog_accessinfotooltip4":/** @type {(inputs: Editfolderdialog_Accessinfotooltip4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All projects and subfolders inherit the visibility of the parent folder`)
},"editmessagecard_busyhint3":/** @type {(inputs: Editmessagecard_Busyhint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cannot revert while operation in progress (e.g., a chat request)`)
},"editmessagecard_busytoastdescription4":/** @type {(inputs: Editmessagecard_Busytoastdescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please wait for the current operation to complete.`)
},"editmessagecard_busytoasttitle4":/** @type {(inputs: Editmessagecard_Busytoasttitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cannot revert while operation in progress`)
},"editmessagecard_cancel2":/** @type {(inputs: Editmessagecard_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"editmessagecard_description2":/** @type {(inputs: Editmessagecard_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your message will be updated, and the conversation continues from here. Changes after this point stay in the chat and can be reapplied anytime.`)
},"editmessagecard_reverting2":/** @type {(inputs: Editmessagecard_Reverting2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reverting...`)
},"editmessagecard_submit2":/** @type {(inputs: Editmessagecard_Submit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revert and resend`)
},"editmessagecard_title2":/** @type {(inputs: Editmessagecard_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revert and resend message?`)
},"editor_addcomment1":/** @type {(inputs: Editor_Addcomment1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a comment`)
},"editor_bookmarkinhistory2":/** @type {(inputs: Editor_Bookmarkinhistory2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bookmark in history`)
},"editor_chatactions1":/** @type {(inputs: Editor_Chatactions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat actions`)
},"editor_classicchatnudgedescription3":/** @type {(inputs: Editor_Classicchatnudgedescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to multi-task mode to keep ideating and planning faster.`)
},"editor_classicchatviewing2":/** @type {(inputs: Editor_Classicchatviewing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're viewing the classic chat`)
},"editor_closesidebar1":/** @type {(inputs: Editor_Closesidebar1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close sidebar`)
},"editor_copymessage1":/** @type {(inputs: Editor_Copymessage1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy message`)
},"editor_currentpageswitchpages3":/** @type {(inputs: Editor_Currentpageswitchpages3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.routeLabel} — current page, switch pages`)
},"editor_desktopview1":/** @type {(inputs: Editor_Desktopview1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desktop view`)
},"editor_dismissnotice1":/** @type {(inputs: Editor_Dismissnotice1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss notice`)
},"editor_dragtoresize2":/** @type {(inputs: Editor_Dragtoresize2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag to resize`)
},"editor_drawannotation1":/** @type {(inputs: Editor_Drawannotation1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draw annotation`)
},"editor_editmessage1":/** @type {(inputs: Editor_Editmessage1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit message`)
},"editor_edittextinline2":/** @type {(inputs: Editor_Edittextinline2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit text inline`)
},"editor_enable":/** @type {(inputs: Editor_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable`)
},"editor_enablenotifications1":/** @type {(inputs: Editor_Enablenotifications1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable notifications`)
},"editor_error":/** @type {(inputs: Editor_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
},"editor_helpful":/** @type {(inputs: Editor_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helpful`)
},"editor_homepage":/** @type {(inputs: Editor_HomepageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Homepage`)
},"editor_information":/** @type {(inputs: Editor_InformationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Information`)
},"editor_moreinfo1":/** @type {(inputs: Editor_Moreinfo1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More info`)
},"editor_moreoptions1":/** @type {(inputs: Editor_Moreoptions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More options`)
},"editor_nothelpful1":/** @type {(inputs: Editor_Nothelpful1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not helpful`)
},"editor_notificationsdescriptionpending2":/** @type {(inputs: Editor_Notificationsdescriptionpending2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get notified when Lovable needs your input or completes a task.`)
},"editor_notificationsdescriptiontaskonly3":/** @type {(inputs: Editor_Notificationsdescriptiontaskonly3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get notified when Lovable completes a task.`)
},"editor_notificationsenabledtoast2":/** @type {(inputs: Editor_Notificationsenabledtoast2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications enabled`)
},"editor_openinnewtab3":/** @type {(inputs: Editor_Openinnewtab3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open in new tab`)
},"editor_opensidebar1":/** @type {(inputs: Editor_Opensidebar1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open sidebar`)
},"editor_previewinteractions1":/** @type {(inputs: Editor_Previewinteractions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview interactions`)
},"editor_publish":/** @type {(inputs: Editor_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish`)
},"editor_refresh":/** @type {(inputs: Editor_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refresh`)
},"editor_removebookmarkfromhistory3":/** @type {(inputs: Editor_Removebookmarkfromhistory3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove bookmark from history`)
},"editor_selectelements1":/** @type {(inputs: Editor_Selectelements1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select elements`)
},"editor_sendmessage1":/** @type {(inputs: Editor_Sendmessage1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send message`)
},"editor_share":/** @type {(inputs: Editor_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share`)
},"editor_startvoicerecording2":/** @type {(inputs: Editor_Startvoicerecording2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start voice recording`)
},"editor_stoprecording1":/** @type {(inputs: Editor_Stoprecording1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop recording`)
},"editor_switchtonewagent3":/** @type {(inputs: Editor_Switchtonewagent3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to multi-task mode`)
},"editor_toggledebugmode2":/** @type {(inputs: Editor_Toggledebugmode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle debug mode`)
},"editor_toolbaroptions1":/** @type {(inputs: Editor_Toolbaroptions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toolbar options`)
},"editor_undolatestedit2":/** @type {(inputs: Editor_Undolatestedit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo latest edit`)
},"editor_untitled":/** @type {(inputs: Editor_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled`)
},"editor_viewhistory1":/** @type {(inputs: Editor_Viewhistory1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View history`)
},"editor_warning":/** @type {(inputs: Editor_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
},"editornav_acceptdraft2":/** @type {(inputs: Editornav_Acceptdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accept draft`)
},"editornav_backtolatest3":/** @type {(inputs: Editornav_Backtolatest3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to latest`)
},"editornav_bookmarks1":/** @type {(inputs: Editornav_Bookmarks1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bookmarks`)
},"editornav_cancelrename2":/** @type {(inputs: Editornav_Cancelrename2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel rename`)
},"editornav_checkingpermissions2":/** @type {(inputs: Editornav_Checkingpermissions2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking permissions`)
},"editornav_classicchat2":/** @type {(inputs: Editornav_Classicchat2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Classic chat`)
},"editornav_close1":/** @type {(inputs: Editornav_Close1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"editornav_createdraft2":/** @type {(inputs: Editornav_Createdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a draft`)
},"editornav_createnewdraft3":/** @type {(inputs: Editornav_Createnewdraft3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create new draft`)
},"editornav_creatingdraft2":/** @type {(inputs: Editornav_Creatingdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating draft`)
},"editornav_deletedraft2":/** @type {(inputs: Editornav_Deletedraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete draft`)
},"editornav_draftagentawaitinginput4":/** @type {(inputs: Editornav_Draftagentawaitinginput4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A draft agent needs your input`)
},"editornav_draftagentworking3":/** @type {(inputs: Editornav_Draftagentworking3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A draft agent is working`)
},"editornav_drafthasnoeditstopublish6":/** @type {(inputs: Editornav_Drafthasnoeditstopublish6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This draft has no changes to publish yet`)
},"editornav_draftname2":/** @type {(inputs: Editornav_Draftname2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft name`)
},"editornav_draftnotreadytopublish5":/** @type {(inputs: Editornav_Draftnotreadytopublish5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This draft isn't ready to publish yet`)
},"editornav_draftoperationinprogress4":/** @type {(inputs: Editornav_Draftoperationinprogress4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A draft operation is in progress`)
},"editornav_drafts1":/** @type {(inputs: Editornav_Drafts1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drafts`)
},"editornav_draftshaveupdates3":/** @type {(inputs: Editornav_Draftshaveupdates3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drafts have new updates`)
},"editornav_exitfullscreen2":/** @type {(inputs: Editornav_Exitfullscreen2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exit fullscreen`)
},"editornav_hidehistory2":/** @type {(inputs: Editornav_Hidehistory2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide history`)
},"editornav_historyunavailableinpreview4":/** @type {(inputs: Editornav_Historyunavailableinpreview4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not available in preview mode`)
},"editornav_loadingdraftbeforepublishing4":/** @type {(inputs: Editornav_Loadingdraftbeforepublishing4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking for draft changes…`)
},"editornav_loadinglivepreview3":/** @type {(inputs: Editornav_Loadinglivepreview3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading Live Preview...`)
},"editornav_lovableonlovableprojectaria5":/** @type {(inputs: Editornav_Lovableonlovableprojectaria5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable on Lovable project`)
},"editornav_mainmenu_copiedtoclipboard4":/** @type {(inputs: Editornav_Mainmenu_Copiedtoclipboard4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied to clipboard`)
},"editornav_mainmenu_copyprojectlink4":/** @type {(inputs: Editornav_Mainmenu_Copyprojectlink4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy project link`)
},"editornav_mainmenu_designsystem3":/** @type {(inputs: Editornav_Mainmenu_Designsystem3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design system`)
},"editornav_mainmenu_details2":/** @type {(inputs: Editornav_Mainmenu_Details2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
},"editornav_mainmenu_gotodashboard4":/** @type {(inputs: Editornav_Mainmenu_Gotodashboard4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Dashboard`)
},"editornav_mainmenu_help2":/** @type {(inputs: Editornav_Mainmenu_Help2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help`)
},"editornav_mainmenu_movetofolder4":/** @type {(inputs: Editornav_Mainmenu_Movetofolder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move to folder`)
},"editornav_mainmenu_remixproject3":/** @type {(inputs: Editornav_Mainmenu_Remixproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remix this project`)
},"editornav_mainmenu_renameproject3":/** @type {(inputs: Editornav_Mainmenu_Renameproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename project`)
},"editornav_mainmenu_settings2":/** @type {(inputs: Editornav_Mainmenu_Settings2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
},"editornav_mainmenu_starproject3":/** @type {(inputs: Editornav_Mainmenu_Starproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Star project`)
},"editornav_mainmenu_unstarproject3":/** @type {(inputs: Editornav_Mainmenu_Unstarproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unstar project`)
},"editornav_mainmenu_usedesignsystem4":/** @type {(inputs: Editornav_Mainmenu_Usedesignsystem4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use this design system`)
},"editornav_more1":/** @type {(inputs: Editornav_More1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More`)
},"editornav_moredraftactions3":/** @type {(inputs: Editornav_Moredraftactions3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More draft actions`)
},"editornav_neededitoraccess3":/** @type {(inputs: Editornav_Neededitoraccess3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need editor access to modify drafts`)
},"editornav_presence_now1":/** @type {(inputs: Editornav_Presence_Now1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Now`)
},"editornav_presence_you1":/** @type {(inputs: Editornav_Presence_You1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (You)`)
},"editornav_previewinglastsavedversion4":/** @type {(inputs: Editornav_Previewinglastsavedversion4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previewing last saved version`)
},"editornav_previewonlycantmodifydrafts5":/** @type {(inputs: Editornav_Previewonlycantmodifydrafts5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview-only viewers can't modify drafts`)
},"editornav_projectprofile_accessrestricted3":/** @type {(inputs: Editornav_Projectprofile_Accessrestricted3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project access restricted`)
},"editornav_projectprofile_loadingproject3":/** @type {(inputs: Editornav_Projectprofile_Loadingproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading project`)
},"editornav_projectprofile_newbadge3":/** @type {(inputs: Editornav_Projectprofile_Newbadge3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
},"editornav_projectprofile_openprofile3":/** @type {(inputs: Editornav_Projectprofile_Openprofile3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Lovable profile`)
},"editornav_projectprofile_projectnotfound4":/** @type {(inputs: Editornav_Projectprofile_Projectnotfound4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project not found`)
},"editornav_projectprofile_publishfirsttooltip4":/** @type {(inputs: Editornav_Projectprofile_Publishfirsttooltip4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish the project before creating a Lovable profile`)
},"editornav_projectprofile_publishtoprofile4":/** @type {(inputs: Editornav_Projectprofile_Publishtoprofile4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish to profile`)
},"editornav_publishdraft2":/** @type {(inputs: Editornav_Publishdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish draft`)
},"editornav_relativetime_daysago3":/** @type {(inputs: Editornav_Relativetime_Daysago3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}d ago`)
},"editornav_relativetime_hoursago3":/** @type {(inputs: Editornav_Relativetime_Hoursago3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}h ago`)
},"editornav_relativetime_justnow3":/** @type {(inputs: Editornav_Relativetime_Justnow3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`just now`)
},"editornav_relativetime_minutesago3":/** @type {(inputs: Editornav_Relativetime_Minutesago3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}m ago`)
},"editornav_renamedraft2":/** @type {(inputs: Editornav_Renamedraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename draft`)
},"editornav_renamedraftfailed3":/** @type {(inputs: Editornav_Renamedraftfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to rename draft`)
},"editornav_returntoview3":/** @type {(inputs: Editornav_Returntoview3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Return to ${i?.viewName}`)
},"editornav_savedraftname3":/** @type {(inputs: Editornav_Savedraftname3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save draft name`)
},"editornav_subview_analytics1":/** @type {(inputs: Editornav_Subview_Analytics1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analytics`)
},"editornav_subview_cloud1":/** @type {(inputs: Editornav_Subview_Cloud1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cloud`)
},"editornav_subview_connectors1":/** @type {(inputs: Editornav_Subview_Connectors1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"editornav_subview_mcp1":/** @type {(inputs: Editornav_Subview_Mcp1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent integrations`)
},"editornav_subview_payments1":/** @type {(inputs: Editornav_Subview_Payments1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payments`)
},"editornav_subview_privacy1":/** @type {(inputs: Editornav_Subview_Privacy1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sensitive data`)
},"editornav_subview_security1":/** @type {(inputs: Editornav_Subview_Security1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
},"editornav_subview_seo1":/** @type {(inputs: Editornav_Subview_Seo1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO & AI search`)
},"editornav_subview_speed1":/** @type {(inputs: Editornav_Subview_Speed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speed`)
},"editornav_switchdraft2":/** @type {(inputs: Editornav_Switchdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch draft`)
},"editornav_switchproject2":/** @type {(inputs: Editornav_Switchproject2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch project`)
},"editornav_syncdraftbeforepublishing4":/** @type {(inputs: Editornav_Syncdraftbeforepublishing4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync the draft to catch up with Base before publishing`)
},"editornav_syncinprogressbeforepublishing5":/** @type {(inputs: Editornav_Syncinprogressbeforepublishing5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wait for the sync to finish before publishing`)
},"editornav_syncwithbase3":/** @type {(inputs: Editornav_Syncwithbase3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync with Base`)
},"editornav_unpublishedchanges2":/** @type {(inputs: Editornav_Unpublishedchanges2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublished changes`)
},"editornav_unpublisheddraft2":/** @type {(inputs: Editornav_Unpublisheddraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublished draft`)
},"editornav_updatesavailable2":/** @type {(inputs: Editornav_Updatesavailable2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates available`)
},"editornav_viewhistory2":/** @type {(inputs: Editornav_Viewhistory2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View history`)
},"editornav_viewname_analytics2":/** @type {(inputs: Editornav_Viewname_Analytics2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analytics`)
},"editornav_viewname_canvas2":/** @type {(inputs: Editornav_Viewname_Canvas2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canvas`)
},"editornav_viewname_code2":/** @type {(inputs: Editornav_Viewname_Code2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
},"editornav_viewname_convos2":/** @type {(inputs: Editornav_Viewname_Convos2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convos`)
},"editornav_viewname_designsystem3":/** @type {(inputs: Editornav_Viewname_Designsystem3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design system`)
},"editornav_viewname_expopreview3":/** @type {(inputs: Editornav_Viewname_Expopreview3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expo preview`)
},"editornav_viewname_expopreviewshort4":/** @type {(inputs: Editornav_Viewname_Expopreviewshort4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expo`)
},"editornav_viewname_files2":/** @type {(inputs: Editornav_Viewname_Files2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files`)
},"editornav_viewname_payments2":/** @type {(inputs: Editornav_Viewname_Payments2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payments`)
},"editornav_viewname_plan2":/** @type {(inputs: Editornav_Viewname_Plan2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan`)
},"editornav_viewname_preview2":/** @type {(inputs: Editornav_Viewname_Preview2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
},"editornav_viewname_security2":/** @type {(inputs: Editornav_Viewname_Security2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
},"editornav_viewname_seoreview3":/** @type {(inputs: Editornav_Viewname_Seoreview3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO & AI search`)
},"editornav_viewname_speed2":/** @type {(inputs: Editornav_Viewname_Speed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speed`)
},"editornav_viewname_tasks2":/** @type {(inputs: Editornav_Viewname_Tasks2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tasks`)
},"enterpriseformpage_disclaimer2":/** @type {(inputs: Enterpriseformpage_Disclaimer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We'll use the information you share to reach out about <lovableLink>lovable.dev</lovableLink> products and services. You can unsubscribe at any time. For details on how we protect your data, check out our <privacyLink>Privacy policy</privacyLink>.`)
},"enterpriseformpage_field_email_label2":/** @type {(inputs: Enterpriseformpage_Field_Email_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Work email`)
},"enterpriseformpage_field_email_placeholder2":/** @type {(inputs: Enterpriseformpage_Field_Email_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. john@company.com`)
},"enterpriseformpage_field_firstname_label3":/** @type {(inputs: Enterpriseformpage_Field_Firstname_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First name`)
},"enterpriseformpage_field_firstname_placeholder3":/** @type {(inputs: Enterpriseformpage_Field_Firstname_Placeholder3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`John`)
},"enterpriseformpage_field_lastname_label3":/** @type {(inputs: Enterpriseformpage_Field_Lastname_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last name`)
},"enterpriseformpage_field_lastname_placeholder3":/** @type {(inputs: Enterpriseformpage_Field_Lastname_Placeholder3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doe`)
},"enterpriseformpage_field_phone_label2":/** @type {(inputs: Enterpriseformpage_Field_Phone_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phone number`)
},"enterpriseformpage_field_phone_placeholder2":/** @type {(inputs: Enterpriseformpage_Field_Phone_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter phone number`)
},"enterpriseformpage_field_problem_label2":/** @type {(inputs: Enterpriseformpage_Field_Problem_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What problems are you trying to solve with Lovable?`)
},"enterpriseformpage_field_problem_placeholder2":/** @type {(inputs: Enterpriseformpage_Field_Problem_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We need to streamline our design approval process and reduce time to deployment...`)
},"enterpriseformpage_field_website_label2":/** @type {(inputs: Enterpriseformpage_Field_Website_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Company's website`)
},"enterpriseformpage_field_website_placeholder2":/** @type {(inputs: Enterpriseformpage_Field_Website_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. company.com`)
},"enterpriseformpage_loading_analyzingsubmission3":/** @type {(inputs: Enterpriseformpage_Loading_Analyzingsubmission3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analyzing your submission...`)
},"enterpriseformpage_loading_crunchingdata3":/** @type {(inputs: Enterpriseformpage_Loading_Crunchingdata3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crunching your data...`)
},"enterpriseformpage_loading_findingrightfit4":/** @type {(inputs: Enterpriseformpage_Loading_Findingrightfit4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finding the right fit...`)
},"enterpriseformpage_loading_preparingnextsteps4":/** @type {(inputs: Enterpriseformpage_Loading_Preparingnextsteps4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparing your next steps...`)
},"enterpriseformpage_loading_settingthingsup4":/** @type {(inputs: Enterpriseformpage_Loading_Settingthingsup4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setting things up...`)
},"enterpriseformpage_meta_description2":/** @type {(inputs: Enterpriseformpage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get in touch with Lovable to learn how we can help your team ship faster with our enterprise AI platform.`)
},"enterpriseformpage_meta_og_description2":/** @type {(inputs: Enterpriseformpage_Meta_Og_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get in touch with Lovable to learn how we can help your team ship faster with our enterprise AI platform.`)
},"enterpriseformpage_meta_og_title2":/** @type {(inputs: Enterpriseformpage_Meta_Og_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise`)
},"enterpriseformpage_meta_title2":/** @type {(inputs: Enterpriseformpage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise | Lovable`)
},"enterpriseformpage_requiredfield3":/** @type {(inputs: Enterpriseformpage_Requiredfield3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`* Required field`)
},"enterpriseformpage_step1_subtitle2":/** @type {(inputs: Enterpriseformpage_Step1_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meet with an Account Executive to see how teams use Lovable Enterprise to turn ideas into real business value, faster.`)
},"enterpriseformpage_step1_title2":/** @type {(inputs: Enterpriseformpage_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Book a personalized product demo`)
},"enterpriseformpage_submit2":/** @type {(inputs: Enterpriseformpage_Submit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit`)
},"enterpriseformpage_submitting2":/** @type {(inputs: Enterpriseformpage_Submitting2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submitting...`)
},"enterpriseformpage_thankyou_checkinbox4":/** @type {(inputs: Enterpriseformpage_Thankyou_Checkinbox4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please check your inbox for a confirmation email from our team.`)
},"enterpriseformpage_thankyou_followup4":/** @type {(inputs: Enterpriseformpage_Thankyou_Followup4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We'll review your information and reach out to you shortly via email with next steps.`)
},"enterpriseformpage_thankyou_returnhome4":/** @type {(inputs: Enterpriseformpage_Thankyou_Returnhome4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Return to home`)
},"enterpriseformpage_thankyou_subtitle3":/** @type {(inputs: Enterpriseformpage_Thankyou_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your request has been successfully submitted.`)
},"enterpriseformpage_thankyou_title3":/** @type {(inputs: Enterpriseformpage_Thankyou_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thank you for your interest in Lovable Enterprise`)
},"enterpriseformpage_toast_fixerrors3":/** @type {(inputs: Enterpriseformpage_Toast_Fixerrors3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please fix the errors in the form before continuing`)
},"enterpriseformpage_toast_submiterror3":/** @type {(inputs: Enterpriseformpage_Toast_Submiterror3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There was a problem submitting your form. Please try again.`)
},"enterpriseformpage_toast_success2":/** @type {(inputs: Enterpriseformpage_Toast_Success2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Form submitted successfully!`)
},"enterpriselandingpage_faq1_answer2":/** @type {(inputs: Enterpriselandingpage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You own the code on your Lovable apps completely, you can sync/export code to GitHub at any point in time. There is no lock-in, use GitHub to review PRs and keep building in your toolchain. Lovable apps are built on a modern tech stack using React, Supabase and Tailwind, that any developer can work with.`)
},"enterpriselandingpage_faq1_question2":/** @type {(inputs: Enterpriselandingpage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does code ownership work?`)
},"enterpriselandingpage_faq2_answer2":/** @type {(inputs: Enterpriselandingpage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is certified through SOC 2 Type II and ISO 27001. Enterprise features include SSO/SAML, SCIM provisioning, role-based access control, and audit logs. We support GDPR compliance.`)
},"enterpriselandingpage_faq2_question2":/** @type {(inputs: Enterpriselandingpage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What security certifications do you have?`)
},"enterpriselandingpage_faq3_answer2":/** @type {(inputs: Enterpriselandingpage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cursor helps engineers write code faster. Lovable lets entire teams build together - PMs, designers and operators create working software while engineers keep control via a standard tech stack and GitHub PRs.`)
},"enterpriselandingpage_faq3_question2":/** @type {(inputs: Enterpriselandingpage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How is Lovable different from Cursor/dev tools?`)
},"enterpriselandingpage_faq4_answer2":/** @type {(inputs: Enterpriselandingpage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise support include priority SLAs with guaranteed response times, white-glove onboarding and workspace configuration, security/compliance review support, and ongoing training to master best practices. You also get a direct line to our Product team for integrations and roadmap input, plus dedicated expert guidance to deploy and scale AI.`)
},"enterpriselandingpage_faq4_question2":/** @type {(inputs: Enterpriselandingpage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What support do enterprise customers get?`)
},"enterpriselandingpage_faq_title2":/** @type {(inputs: Enterpriselandingpage_Faq_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"enterpriselandingpage_feature1_description2":/** @type {(inputs: Enterpriselandingpage_Feature1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product teams create prototypes and working software while engineers maintain standards and review on GitHub.`)
},"enterpriselandingpage_feature1_title2":/** @type {(inputs: Enterpriselandingpage_Feature1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build together without bottlenecks`)
},"enterpriselandingpage_feature2_description2":/** @type {(inputs: Enterpriselandingpage_Feature2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our batteries-included platform provides auth, email, connectors, and hosting so you can go from prototype to production in days.`)
},"enterpriselandingpage_feature2_title2":/** @type {(inputs: Enterpriselandingpage_Feature2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship real tools fast`)
},"enterpriselandingpage_feature3_description2":/** @type {(inputs: Enterpriselandingpage_Feature3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrate your favorite tools and connect context from places like Linear, Atlassian, Notion, n8n, Miro, and more. Code is always owned by you, can be exported to GitHub, and deployed anywhere.`)
},"enterpriselandingpage_feature3_title2":/** @type {(inputs: Enterpriselandingpage_Feature3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plays well with your stack`)
},"enterpriselandingpage_feature4_description2":/** @type {(inputs: Enterpriselandingpage_Feature4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOC 2/ISO 27001 certified with SSO/SAML, role‑based access, audit logs, and workspace‑level brand consistency built in.`)
},"enterpriselandingpage_feature4_title2":/** @type {(inputs: Enterpriselandingpage_Feature4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Govern at enterprise standards`)
},"enterpriselandingpage_features_subtitle2":/** @type {(inputs: Enterpriselandingpage_Features_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn ideas into clickable prototypes and working tools in minutes. Ship them as production-ready apps that fit your internal workflows.`)
},"enterpriselandingpage_features_title2":/** @type {(inputs: Enterpriselandingpage_Features_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build prototypes and internal tools fast`)
},"enterpriselandingpage_hero_cta2":/** @type {(inputs: Enterpriselandingpage_Hero_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get a demo`)
},"enterpriselandingpage_hero_label2":/** @type {(inputs: Enterpriselandingpage_Hero_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for enterprises`)
},"enterpriselandingpage_hero_subtitle2":/** @type {(inputs: Enterpriselandingpage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototype faster, validate early, and ship internal tools and production apps without waiting on engineering.`)
},"enterpriselandingpage_hero_title_faster2":/** @type {(inputs: Enterpriselandingpage_Hero_Title_Faster2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`faster`)
},"enterpriselandingpage_hero_title_ship2":/** @type {(inputs: Enterpriselandingpage_Hero_Title_Ship2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship`)
},"enterpriselandingpage_integrations_cta2":/** @type {(inputs: Enterpriselandingpage_Integrations_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore all integrations`)
},"enterpriselandingpage_integrations_step1_description2":/** @type {(inputs: Enterpriselandingpage_Integrations_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pull context from Jira, Confluence, Notion or Linear to build your prototype and validate with stakeholders before engineering starts.`)
},"enterpriselandingpage_integrations_step1_title2":/** @type {(inputs: Enterpriselandingpage_Integrations_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For prototypes`)
},"enterpriselandingpage_integrations_step2_description2":/** @type {(inputs: Enterpriselandingpage_Integrations_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your CRM, databases, or enterprise systems to build custom dashboards and workflows your teams actually need.`)
},"enterpriselandingpage_integrations_step2_title2":/** @type {(inputs: Enterpriselandingpage_Integrations_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For internal tools`)
},"enterpriselandingpage_integrations_step3_description2":/** @type {(inputs: Enterpriselandingpage_Integrations_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync validated prototypes to GitHub and hand off standard React, Supabase, and Tailwind code.`)
},"enterpriselandingpage_integrations_step3_title2":/** @type {(inputs: Enterpriselandingpage_Integrations_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For customer apps`)
},"enterpriselandingpage_integrations_subtitle2":/** @type {(inputs: Enterpriselandingpage_Integrations_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don't start from scratch. Connect your internal tools to Lovable and build within your context.`)
},"enterpriselandingpage_integrations_title2":/** @type {(inputs: Enterpriselandingpage_Integrations_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrations and ecosystem`)
},"enterpriselandingpage_meta_description2":/** @type {(inputs: Enterpriselandingpage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empower your teams with Lovable's enterprise AI platform. Go from prototype to production with integrations, governance, SSO, and SOC2 security.`)
},"enterpriselandingpage_meta_title2":/** @type {(inputs: Enterpriselandingpage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise App Builder | Collaborative AI App Builder | Lovable`)
},"enterpriselandingpage_resources_changelog_cta2":/** @type {(inputs: Enterpriselandingpage_Resources_Changelog_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_resources_changelog_description2":/** @type {(inputs: Enterpriselandingpage_Resources_Changelog_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Track updates to our terms, DPA, and other legal documents.`)
},"enterpriselandingpage_resources_changelog_title2":/** @type {(inputs: Enterpriselandingpage_Resources_Changelog_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal change log`)
},"enterpriselandingpage_resources_dpa_cta2":/** @type {(inputs: Enterpriselandingpage_Resources_Dpa_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_resources_dpa_description2":/** @type {(inputs: Enterpriselandingpage_Resources_Dpa_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our data processing commitments, security measures, and subprocessor controls.`)
},"enterpriselandingpage_resources_dpa_title2":/** @type {(inputs: Enterpriselandingpage_Resources_Dpa_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data processing`)
},"enterpriselandingpage_resources_legal_cta2":/** @type {(inputs: Enterpriselandingpage_Resources_Legal_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_resources_legal_description2":/** @type {(inputs: Enterpriselandingpage_Resources_Legal_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise agreements, compliance docs and subprocessor lists from Lovable.`)
},"enterpriselandingpage_resources_legal_title2":/** @type {(inputs: Enterpriselandingpage_Resources_Legal_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal overview`)
},"enterpriselandingpage_resources_title2":/** @type {(inputs: Enterpriselandingpage_Resources_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Useful resources`)
},"enterpriselandingpage_resources_tos_cta2":/** @type {(inputs: Enterpriselandingpage_Resources_Tos_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_resources_tos_description2":/** @type {(inputs: Enterpriselandingpage_Resources_Tos_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise agreement covering usage rights, fees, liability, and support terms.`)
},"enterpriselandingpage_resources_tos_title2":/** @type {(inputs: Enterpriselandingpage_Resources_Tos_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terms of service`)
},"enterpriselandingpage_security_cta2":/** @type {(inputs: Enterpriselandingpage_Security_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact sales`)
},"enterpriselandingpage_security_feature12":/** @type {(inputs: Enterpriselandingpage_Security_Feature12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control access with role-based permissions`)
},"enterpriselandingpage_security_feature22":/** @type {(inputs: Enterpriselandingpage_Security_Feature22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise authentication with SSO and SAML`)
},"enterpriselandingpage_security_feature32":/** @type {(inputs: Enterpriselandingpage_Security_Feature32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SCIM provisioning for automated user management`)
},"enterpriselandingpage_security_feature42":/** @type {(inputs: Enterpriselandingpage_Security_Feature42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your code syncs to your GitHub repository`)
},"enterpriselandingpage_security_feature52":/** @type {(inputs: Enterpriselandingpage_Security_Feature52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built on a modern stack including: React, Supabase, and Tailwind`)
},"enterpriselandingpage_security_label2":/** @type {(inputs: Enterpriselandingpage_Security_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security & governance`)
},"enterpriselandingpage_security_title2":/** @type {(inputs: Enterpriselandingpage_Security_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise-grade security`)
},"enterpriselandingpage_support_cta2":/** @type {(inputs: Enterpriselandingpage_Support_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact sales`)
},"enterpriselandingpage_support_feature12":/** @type {(inputs: Enterpriselandingpage_Support_Feature12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priority response times to keep your team productive`)
},"enterpriselandingpage_support_feature22":/** @type {(inputs: Enterpriselandingpage_Support_Feature22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprehensive onboarding to configure your workspace and get building`)
},"enterpriselandingpage_support_feature32":/** @type {(inputs: Enterpriselandingpage_Support_Feature32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongoing training to master Lovable and adopt best practices`)
},"enterpriselandingpage_support_feature42":/** @type {(inputs: Enterpriselandingpage_Support_Feature42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct product team access for custom integrations and roadmap input`)
},"enterpriselandingpage_support_feature52":/** @type {(inputs: Enterpriselandingpage_Support_Feature52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated guidance to deploy and scale AI professionally`)
},"enterpriselandingpage_support_label2":/** @type {(inputs: Enterpriselandingpage_Support_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise plan and support`)
},"enterpriselandingpage_support_title2":/** @type {(inputs: Enterpriselandingpage_Support_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated support for enterprise customers`)
},"enterpriselandingpage_team_designers_cta2":/** @type {(inputs: Enterpriselandingpage_Team_Designers_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_team_designers_feature12":/** @type {(inputs: Enterpriselandingpage_Team_Designers_Feature12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design mode for creative control over layouts, styles, and themes`)
},"enterpriselandingpage_team_designers_feature22":/** @type {(inputs: Enterpriselandingpage_Team_Designers_Feature22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI image generation to quickly explore concepts and directions`)
},"enterpriselandingpage_team_designers_feature32":/** @type {(inputs: Enterpriselandingpage_Team_Designers_Feature32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consistent design standards with workspace themes across projects`)
},"enterpriselandingpage_team_designers_feature42":/** @type {(inputs: Enterpriselandingpage_Team_Designers_Feature42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Production‑ready code, not screenshots or static prototypes`)
},"enterpriselandingpage_team_designers_title2":/** @type {(inputs: Enterpriselandingpage_Team_Designers_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`for designers`)
},"enterpriselandingpage_team_engineering_feature12":/** @type {(inputs: Enterpriselandingpage_Team_Engineering_Feature12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real code, not screenshots (React + Supabase, not PNGs)`)
},"enterpriselandingpage_team_engineering_feature22":/** @type {(inputs: Enterpriselandingpage_Team_Engineering_Feature22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clearer requirements because visual prototypes surface edge cases early`)
},"enterpriselandingpage_team_engineering_feature32":/** @type {(inputs: Enterpriselandingpage_Team_Engineering_Feature32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub sync so you can pull code, review it, and keep building`)
},"enterpriselandingpage_team_engineering_title2":/** @type {(inputs: Enterpriselandingpage_Team_Engineering_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`for engineering`)
},"enterpriselandingpage_team_marketers_cta2":/** @type {(inputs: Enterpriselandingpage_Team_Marketers_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_team_marketers_feature12":/** @type {(inputs: Enterpriselandingpage_Team_Marketers_Feature12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch on‑brand landing pages, internal tools, and experiments quickly`)
},"enterpriselandingpage_team_marketers_feature22":/** @type {(inputs: Enterpriselandingpage_Team_Marketers_Feature22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep everything consistent with shared themes and design standards`)
},"enterpriselandingpage_team_marketers_feature32":/** @type {(inputs: Enterpriselandingpage_Team_Marketers_Feature32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect forms to your existing tools so leads flow straight into your funnel`)
},"enterpriselandingpage_team_marketers_title2":/** @type {(inputs: Enterpriselandingpage_Team_Marketers_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`for marketers`)
},"enterpriselandingpage_team_pm_cta2":/** @type {(inputs: Enterpriselandingpage_Team_Pm_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"enterpriselandingpage_team_pm_feature12":/** @type {(inputs: Enterpriselandingpage_Team_Pm_Feature12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interactive prototypes that look and feel real, in minutes not weeks`)
},"enterpriselandingpage_team_pm_feature22":/** @type {(inputs: Enterpriselandingpage_Team_Pm_Feature22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to real data so demos are credible, not click-through mockups`)
},"enterpriselandingpage_team_pm_feature32":/** @type {(inputs: Enterpriselandingpage_Team_Pm_Feature32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub sync, so your team can keep building on top of what you start`)
},"enterpriselandingpage_team_pm_feature42":/** @type {(inputs: Enterpriselandingpage_Team_Pm_Feature42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your workflow tools (Notion, Linear, Jira) to accelerate development`)
},"enterpriselandingpage_team_pm_title2":/** @type {(inputs: Enterpriselandingpage_Team_Pm_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`for product managers`)
},"enterpriselandingpage_team_title2":/** @type {(inputs: Enterpriselandingpage_Team_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make your team unstoppable`)
},"enterpriselandingpage_testimonial1_authorname3":/** @type {(inputs: Enterpriselandingpage_Testimonial1_Authorname3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sungae Park`)
},"enterpriselandingpage_testimonial1_authortitle3":/** @type {(inputs: Enterpriselandingpage_Testimonial1_Authortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VP Design Digital Transformation & Innovation`)
},"enterpriselandingpage_testimonial1_quote2":/** @type {(inputs: Enterpriselandingpage_Testimonial1_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`"Our Digital Transformation and Innovation (DT&I) team has found in Lovable's AI prototyping tool a partner in our pursuit of imaginative solutions. With it, we can test bold new concepts with a single prompt—work that once required tremendous resources, time, and development effort. Now, we spend less time designing static mockups and more time with clinicians creating human-centered solutions that elevate patient care."`)
},"enterpriselandingpage_testimonial2_authorname3":/** @type {(inputs: Enterpriselandingpage_Testimonial2_Authorname3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sebastian Siemiatkowski`)
},"enterpriselandingpage_testimonial2_authortitle3":/** @type {(inputs: Enterpriselandingpage_Testimonial2_Authortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CEO`)
},"enterpriselandingpage_testimonial2_quote2":/** @type {(inputs: Enterpriselandingpage_Testimonial2_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`"I used to bring an idea to a meeting. Now I bring a Lovable prototype."`)
},"enterpriselandingpage_testimonials_title2":/** @type {(inputs: Enterpriselandingpage_Testimonials_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the next wave of change makers`)
},"eventsmap_cards_next1":/** @type {(inputs: Eventsmap_Cards_Next1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
},"eventsmap_cards_nextpage2":/** @type {(inputs: Eventsmap_Cards_Nextpage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next page`)
},"eventsmap_cards_page1":/** @type {(inputs: Eventsmap_Cards_Page1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page}`)
},"eventsmap_cards_pagination1":/** @type {(inputs: Eventsmap_Cards_Pagination1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagination`)
},"eventsmap_cards_previous1":/** @type {(inputs: Eventsmap_Cards_Previous1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
},"eventsmap_cards_previouspage2":/** @type {(inputs: Eventsmap_Cards_Previouspage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous page`)
},"eventsmap_category_all1":/** @type {(inputs: Eventsmap_Category_All1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
},"eventsmap_category_hackathon1":/** @type {(inputs: Eventsmap_Category_Hackathon1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hackathon`)
},"eventsmap_category_online1":/** @type {(inputs: Eventsmap_Category_Online1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Online`)
},"eventsmap_category_studentevent2":/** @type {(inputs: Eventsmap_Category_Studentevent2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Student event`)
},"eventsmap_category_workshop1":/** @type {(inputs: Eventsmap_Category_Workshop1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workshop`)
},"eventsmap_cluster_count_one1":/** @type {(inputs: Eventsmap_Cluster_Count_One1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} event at this location`)
},"eventsmap_cluster_count_other1":/** @type {(inputs: Eventsmap_Cluster_Count_Other1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} events at this location`)
},"eventsmap_datetbd2":/** @type {(inputs: Eventsmap_Datetbd2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date TBD`)
},"eventsmap_empty1":/** @type {(inputs: Eventsmap_Empty1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No events match the current filters.`)
},"eventsmap_fallback_failed1":/** @type {(inputs: Eventsmap_Fallback_Failed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't load the map right now. The events list is still available.`)
},"eventsmap_fallback_heading1":/** @type {(inputs: Eventsmap_Fallback_Heading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Events around the world`)
},"eventsmap_fallback_unavailable1":/** @type {(inputs: Eventsmap_Fallback_Unavailable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Map unavailable — see the events list instead.`)
},"eventsmap_heading1":/** @type {(inputs: Eventsmap_Heading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Events`)
},"eventsmap_modal_date1":/** @type {(inputs: Eventsmap_Modal_Date1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date`)
},"eventsmap_modal_description1":/** @type {(inputs: Eventsmap_Modal_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
},"eventsmap_modal_host1":/** @type {(inputs: Eventsmap_Modal_Host1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host`)
},"eventsmap_modal_infoheading2":/** @type {(inputs: Eventsmap_Modal_Infoheading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Event info`)
},"eventsmap_modal_location1":/** @type {(inputs: Eventsmap_Modal_Location1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Location`)
},"eventsmap_modal_registration_duplicateregisteredbody3":/** @type {(inputs: Eventsmap_Modal_Registration_Duplicateregisteredbody3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Looks like you've already signed up for this event. Check your email for details.`)
},"eventsmap_modal_registration_duplicateregisteredtitle3":/** @type {(inputs: Eventsmap_Modal_Registration_Duplicateregisteredtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're already registered`)
},"eventsmap_modal_registration_duplicatewaitlistedbody3":/** @type {(inputs: Eventsmap_Modal_Registration_Duplicatewaitlistedbody3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Looks like you've already joined the waitlist for this event. Check your email for details.`)
},"eventsmap_modal_registration_duplicatewaitlistedtitle3":/** @type {(inputs: Eventsmap_Modal_Registration_Duplicatewaitlistedtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're already on the waitlist`)
},"eventsmap_modal_registration_email1":/** @type {(inputs: Eventsmap_Modal_Registration_Email1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
},"eventsmap_modal_registration_emailerror2":/** @type {(inputs: Eventsmap_Modal_Registration_Emailerror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid email address.`)
},"eventsmap_modal_registration_emailplaceholder2":/** @type {(inputs: Eventsmap_Modal_Registration_Emailplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`you@email.com`)
},"eventsmap_modal_registration_error1":/** @type {(inputs: Eventsmap_Modal_Registration_Error1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't complete your registration. Please try again or contact community@lovable.dev for help.`)
},"eventsmap_modal_registration_joinwaitlist2":/** @type {(inputs: Eventsmap_Modal_Registration_Joinwaitlist2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join waitlist`)
},"eventsmap_modal_registration_linkedin1":/** @type {(inputs: Eventsmap_Modal_Registration_Linkedin1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LinkedIn profile`)
},"eventsmap_modal_registration_linkedinerror2":/** @type {(inputs: Eventsmap_Modal_Registration_Linkedinerror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid LinkedIn profile URL.`)
},"eventsmap_modal_registration_linkedinplaceholder2":/** @type {(inputs: Eventsmap_Modal_Registration_Linkedinplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://linkedin.com/in/yourname`)
},"eventsmap_modal_registration_name1":/** @type {(inputs: Eventsmap_Modal_Registration_Name1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
},"eventsmap_modal_registration_nameerror2":/** @type {(inputs: Eventsmap_Modal_Registration_Nameerror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your name.`)
},"eventsmap_modal_registration_nameplaceholder2":/** @type {(inputs: Eventsmap_Modal_Registration_Nameplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full name`)
},"eventsmap_modal_registration_privacylink2":/** @type {(inputs: Eventsmap_Modal_Registration_Privacylink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy Policy`)
},"eventsmap_modal_registration_privacyprefix2":/** @type {(inputs: Eventsmap_Modal_Registration_Privacyprefix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By submitting this form, you agree to Lovable using your personal data to review your application to join a community event and to send you related updates. You can unsubscribe at any time. See our`)
},"eventsmap_modal_registration_register1":/** @type {(inputs: Eventsmap_Modal_Registration_Register1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register`)
},"eventsmap_modal_registration_spotsleft_one2":/** @type {(inputs: Eventsmap_Modal_Registration_Spotsleft_One2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} spot left`)
},"eventsmap_modal_registration_spotsleft_other2":/** @type {(inputs: Eventsmap_Modal_Registration_Spotsleft_Other2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} spots left`)
},"eventsmap_modal_registration_submitting1":/** @type {(inputs: Eventsmap_Modal_Registration_Submitting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submitting...`)
},"eventsmap_modal_registration_successregisteredbody3":/** @type {(inputs: Eventsmap_Modal_Registration_Successregisteredbody3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We'll see you there. Check your email for details.`)
},"eventsmap_modal_registration_successregisteredtitle3":/** @type {(inputs: Eventsmap_Modal_Registration_Successregisteredtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're registered!`)
},"eventsmap_modal_registration_successwaitlistedbody3":/** @type {(inputs: Eventsmap_Modal_Registration_Successwaitlistedbody3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We'll notify you if a spot opens up.`)
},"eventsmap_modal_registration_successwaitlistedtitle3":/** @type {(inputs: Eventsmap_Modal_Registration_Successwaitlistedtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're on the waitlist`)
},"eventsmap_modal_registration_waitlisthelper2":/** @type {(inputs: Eventsmap_Modal_Registration_Waitlisthelper2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full — waitlist available`)
},"eventsmap_modal_visit1":/** @type {(inputs: Eventsmap_Modal_Visit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visit event website`)
},"eventsmap_search_arialabel2":/** @type {(inputs: Eventsmap_Search_Arialabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search events`)
},"eventsmap_search_placeholder1":/** @type {(inputs: Eventsmap_Search_Placeholder1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
},"eventsmap_viewtoggle_cards2":/** @type {(inputs: Eventsmap_Viewtoggle_Cards2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cards view`)
},"eventsmap_viewtoggle_group2":/** @type {(inputs: Eventsmap_Viewtoggle_Group2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display mode`)
},"eventsmap_viewtoggle_map2":/** @type {(inputs: Eventsmap_Viewtoggle_Map2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Map view`)
},"expandablemessage_showless2":/** @type {(inputs: Expandablemessage_Showless2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
},"expandablemessage_showmore2":/** @type {(inputs: Expandablemessage_Showmore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
},"expertspage_cta_viewexperts2":/** @type {(inputs: Expertspage_Cta_Viewexperts2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View Lovable Experts`)
},"expertspage_howitworks_step1_description3":/** @type {(inputs: Expertspage_Howitworks_Step1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell us about your project vision and core features to build`)
},"expertspage_howitworks_step1_title3":/** @type {(inputs: Expertspage_Howitworks_Step1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe Your Project`)
},"expertspage_howitworks_step2_description3":/** @type {(inputs: Expertspage_Howitworks_Step2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We match your application with the perfect builder or you can contact expert builders directly`)
},"expertspage_howitworks_step2_title3":/** @type {(inputs: Expertspage_Howitworks_Step2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get Paired`)
},"expertspage_howitworks_step3_description3":/** @type {(inputs: Expertspage_Howitworks_Step3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your expert builder brings your vision to life`)
},"expertspage_howitworks_step3_title3":/** @type {(inputs: Expertspage_Howitworks_Step3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build Your Project`)
},"expertspage_howitworks_step4_description3":/** @type {(inputs: Expertspage_Howitworks_Step4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your project with Lovable anytime and re-engage with expert builders as needed`)
},"expertspage_howitworks_step4_title3":/** @type {(inputs: Expertspage_Howitworks_Step4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maintain Control`)
},"expertspage_howitworks_title3":/** @type {(inputs: Expertspage_Howitworks_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How It Works`)
},"expertspage_meta_description1":/** @type {(inputs: Expertspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect with verified Lovable experts who can help build your product. Browse our expert partners specializing in web apps, mobile apps, custom design, and more.`)
},"expertspage_meta_title1":/** @type {(inputs: Expertspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Experts - Connect with expert developers and agencies | Lovable`)
},"expertspage_partners_disclaimer1":/** @type {(inputs: Expertspage_Partners_Disclaimer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`*Disclaimer: Lovable Partners are independent entities and are not employees of Lovable. Any services you receive will be provided directly by the Lovable Partner, and Lovable is not responsible for those services.`)
},"expertspage_partners_subtitle1":/** @type {(inputs: Expertspage_Partners_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect directly with our partners below.`)
},"expertspage_partners_title1":/** @type {(inputs: Expertspage_Partners_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our Expert Partners`)
},"externalagentbadge_fromlovable3":/** @type {(inputs: Externalagentbadge_Fromlovable3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent from Lovable`)
},"externalagentbadge_fromslack3":/** @type {(inputs: Externalagentbadge_Fromslack3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent from Slack`)
},"externalagentbadge_fromtelegram3":/** @type {(inputs: Externalagentbadge_Fromtelegram3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sent from Telegram`)
},"externalagentbadge_systemaction3":/** @type {(inputs: Externalagentbadge_Systemaction3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System action`)
},"faqs_questionnotlisted2":/** @type {(inputs: Faqs_Questionnotlisted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I have a question not listed.`)
},"fixerrorbadge_errorheading3":/** @type {(inputs: Fixerrorbadge_Errorheading3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Error ${i?.number}`)
},"fixerrorbadge_fixbuilderrorsplural5":/** @type {(inputs: Fixerrorbadge_Fixbuilderrorsplural5Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Fix build error`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Fix build errors`);
	return /** @type {LocalizedString} */ ("fixErrorBadge_fixBuildErrorsPlural");
},"fixerrorbadge_fixerrorsplural4":/** @type {(inputs: Fixerrorbadge_Fixerrorsplural4Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Fix error`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Fix errors`);
	return /** @type {LocalizedString} */ ("fixErrorBadge_fixErrorsPlural");
},"fixerrorbadge_showless3":/** @type {(inputs: Fixerrorbadge_Showless3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
},"fixerrorbadge_showmore3":/** @type {(inputs: Fixerrorbadge_Showmore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
},"foldercollaboratorsdialog_accessinfolabel4":/** @type {(inputs: Foldercollaboratorsdialog_Accessinfolabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How folder access works`)
},"foldercollaboratorsdialog_accessinfotooltip4":/** @type {(inputs: Foldercollaboratorsdialog_Accessinfotooltip4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder access level gives the same level of access to projects inside it. Folder admins can add projects and people to the folder.`)
},"foldercollaboratorsdialog_manageaccess3":/** @type {(inputs: Foldercollaboratorsdialog_Manageaccess3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage access`)
},"footer_community_affiliates":/** @type {(inputs: Footer_Community_AffiliatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affiliates`)
},"footer_community_becomeapartner2":/** @type {(inputs: Footer_Community_Becomeapartner2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Become a partner`)
},"footer_community_codeofconduct2":/** @type {(inputs: Footer_Community_Codeofconduct2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code of conduct`)
},"footer_community_discord":/** @type {(inputs: Footer_Community_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
},"footer_community_hireapartner2":/** @type {(inputs: Footer_Community_Hireapartner2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hire a Lovable expert`)
},"footer_community_linkedin":/** @type {(inputs: Footer_Community_LinkedinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LinkedIn`)
},"footer_community_reddit":/** @type {(inputs: Footer_Community_RedditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddit`)
},"footer_community_title":/** @type {(inputs: Footer_Community_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
},"footer_community_twitter":/** @type {(inputs: Footer_Community_TwitterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`X / Twitter`)
},"footer_community_youtube":/** @type {(inputs: Footer_Community_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
},"footer_company_brandguidelines1":/** @type {(inputs: Footer_Company_Brandguidelines1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press & media`)
},"footer_company_careers":/** @type {(inputs: Footer_Company_CareersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Careers`)
},"footer_company_enterprise":/** @type {(inputs: Footer_Company_EnterpriseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise`)
},"footer_company_partnerships":/** @type {(inputs: Footer_Company_PartnershipsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partnerships`)
},"footer_company_security":/** @type {(inputs: Footer_Company_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
},"footer_company_title":/** @type {(inputs: Footer_Company_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Company`)
},"footer_company_trustcenter1":/** @type {(inputs: Footer_Company_Trustcenter1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trust center`)
},"footer_label":/** @type {(inputs: Footer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI App Builder`)
},"footer_legal_cookiesettings1":/** @type {(inputs: Footer_Legal_Cookiesettings1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie settings`)
},"footer_legal_desktopappterms2":/** @type {(inputs: Footer_Legal_Desktopappterms2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desktop app terms`)
},"footer_legal_dmcacopyrightpolicy2":/** @type {(inputs: Footer_Legal_Dmcacopyrightpolicy2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA copyright policy`)
},"footer_legal_domainregistrationterms2":/** @type {(inputs: Footer_Legal_Domainregistrationterms2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domain registration terms`)
},"footer_legal_donotsell2":/** @type {(inputs: Footer_Legal_Donotsell2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do not sell or share my personal information`)
},"footer_legal_dpa3":/** @type {(inputs: Footer_Legal_Dpa3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DPA`)
},"footer_legal_enterpriseterms1":/** @type {(inputs: Footer_Legal_Enterpriseterms1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise terms`)
},"footer_legal_platformrules1":/** @type {(inputs: Footer_Legal_Platformrules1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform rules`)
},"footer_legal_privacypolicy1":/** @type {(inputs: Footer_Legal_Privacypolicy1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy policy`)
},"footer_legal_reportabuse1":/** @type {(inputs: Footer_Legal_Reportabuse1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report abuse`)
},"footer_legal_reportsecurity1":/** @type {(inputs: Footer_Legal_Reportsecurity1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report security concerns`)
},"footer_legal_termsconditions1":/** @type {(inputs: Footer_Legal_Termsconditions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General terms`)
},"footer_legal_title":/** @type {(inputs: Footer_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
},"footer_product_changelog":/** @type {(inputs: Footer_Product_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
},"footer_product_designers":/** @type {(inputs: Footer_Product_DesignersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Designers`)
},"footer_product_downloadapps1":/** @type {(inputs: Footer_Product_Downloadapps1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download apps`)
},"footer_product_founders":/** @type {(inputs: Footer_Product_FoundersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Founders`)
},"footer_product_integrations":/** @type {(inputs: Footer_Product_IntegrationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connections`)
},"footer_product_internaltools1":/** @type {(inputs: Footer_Product_Internaltools1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal Tools`)
},"footer_product_marketers":/** @type {(inputs: Footer_Product_MarketersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marketers`)
},"footer_product_ops":/** @type {(inputs: Footer_Product_OpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ops`)
},"footer_product_people":/** @type {(inputs: Footer_Product_PeopleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People`)
},"footer_product_pricing":/** @type {(inputs: Footer_Product_PricingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pricing`)
},"footer_product_productmanagers1":/** @type {(inputs: Footer_Product_Productmanagers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product Managers`)
},"footer_product_prototyping":/** @type {(inputs: Footer_Product_PrototypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototyping`)
},"footer_product_sales":/** @type {(inputs: Footer_Product_SalesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sales`)
},"footer_product_status":/** @type {(inputs: Footer_Product_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
},"footer_product_studentdiscount1":/** @type {(inputs: Footer_Product_Studentdiscount1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Student discount`)
},"footer_product_title":/** @type {(inputs: Footer_Product_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product`)
},"footer_resources_blog":/** @type {(inputs: Footer_Resources_BlogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog`)
},"footer_resources_connectors":/** @type {(inputs: Footer_Resources_ConnectorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"footer_resources_guides":/** @type {(inputs: Footer_Resources_GuidesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guides`)
},"footer_resources_learn":/** @type {(inputs: Footer_Resources_LearnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn`)
},"footer_resources_mcp":/** @type {(inputs: Footer_Resources_McpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP server`)
},"footer_resources_reviews":/** @type {(inputs: Footer_Resources_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
},"footer_resources_sitemap":/** @type {(inputs: Footer_Resources_SitemapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitemap`)
},"footer_resources_support":/** @type {(inputs: Footer_Resources_SupportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support`)
},"footer_resources_templates":/** @type {(inputs: Footer_Resources_TemplatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Templates`)
},"footer_resources_title":/** @type {(inputs: Footer_Resources_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resources`)
},"footer_resources_videos":/** @type {(inputs: Footer_Resources_VideosInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Videos`)
},"footer_title":/** @type {(inputs: Footer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to build?`)
},"founderspage_cofounder_subtitle1":/** @type {(inputs: Founderspage_Cofounder_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours instead of months.`)
},"founderspage_cofounder_title1":/** @type {(inputs: Founderspage_Cofounder_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your AI cofounder and dev team`)
},"founderspage_faq1_answer1":/** @type {(inputs: Founderspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you will not outgrow Lovable. Start building an MVP and scale to full production. Lovable creates a real database, real backend and real integrations. You always own your code and can connect to GitHub anytime.`)
},"founderspage_faq1_question1":/** @type {(inputs: Founderspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Will I outgrow Lovable?`)
},"founderspage_faq2_answer1":/** @type {(inputs: Founderspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable connects to all the tools you need to build a real business. Pull your ideas from Notion to build faster, build your app with a backend on Supabase for database and auth, connect your app to Stripe to enable payments, connect to n8n to access over 400+ tool integrations, or connect to Shopify to build an e-commerce business. Your app works with your existing stack from day one. Learn more about our connectors <connectorsLink>here</connectorsLink>.`)
},"founderspage_faq2_question1":/** @type {(inputs: Founderspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What tools does Lovable connect to?`)
},"founderspage_faq3_answer1":/** @type {(inputs: Founderspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you don't need to know how to code. Build by describing what you want. But if you know code, you can dive into code mode anytime.`)
},"founderspage_faq3_question1":/** @type {(inputs: Founderspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need to know how to code?`)
},"founderspage_faq4_answer1":/** @type {(inputs: Founderspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, many founders and consultants use Lovable to ship client projects. You can fully export your project, which means you can deliver production-ready products that clients can own.`)
},"founderspage_faq4_question1":/** @type {(inputs: Founderspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I use this for client work?`)
},"founderspage_faq5_answer1":/** @type {(inputs: Founderspage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you get stuck, Lovable helps you debug, suggests fixes, and keeps you moving. Lovable also has a <communityLink>community</communityLink> where you'll get support from other founders.`)
},"founderspage_faq5_question1":/** @type {(inputs: Founderspage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What if I get stuck?`)
},"founderspage_faq6_answer1":/** @type {(inputs: Founderspage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, team members or developers can collaborate or access the code of your product at any time. We offer GitHub sync from day one, and a modern tech stack (React + Supabase + Tailwind) that any developer can work with.`)
},"founderspage_faq6_question1":/** @type {(inputs: Founderspage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can my team take over later?`)
},"founderspage_faqtitle2":/** @type {(inputs: Founderspage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"founderspage_feature1_description1":/** @type {(inputs: Founderspage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chatting with Lovable is like talking with a developer. Describe your vision, drop in screenshots, or paste your Notion doc. Lovable takes it from there.`)
},"founderspage_feature1_title1":/** @type {(inputs: Founderspage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build by describing what you want`)
},"founderspage_feature2_description1":/** @type {(inputs: Founderspage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real backend with Lovable Cloud and Supabase gives you Postgres database, authentication, file storage, and real-time features. All auto-provisioned. Connect to 400+ tools via n8n - send emails, sync to your CRM, automate workflows. Add AI to your product with chatbots, image generation, and text analysis.`)
},"founderspage_feature2_title1":/** @type {(inputs: Founderspage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Production infrastructure included`)
},"founderspage_feature3_description1":/** @type {(inputs: Founderspage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tweak layouts, colors, and text with direct visual control. See changes instantly and bring your vision to life exactly as you imagined it.`)
},"founderspage_feature3_title1":/** @type {(inputs: Founderspage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polish it to perfection`)
},"founderspage_feature4_description1":/** @type {(inputs: Founderspage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build on industry-standard frameworks - React + Supabase + Tailwind - and sync to GitHub from day one. Your code, your repository, your rules.`)
},"founderspage_feature4_title1":/** @type {(inputs: Founderspage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modern, standard tech stack`)
},"founderspage_feature5_description1":/** @type {(inputs: Founderspage_Feature5_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom domain, SEO optimization, and security scans are all handled. Go from idea to live project in the same day.`)
},"founderspage_feature5_title1":/** @type {(inputs: Founderspage_Feature5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-click publish`)
},"founderspage_hero_cta1":/** @type {(inputs: Founderspage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building`)
},"founderspage_hero_h11":/** @type {(inputs: Founderspage_Hero_H11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools for founders`)
},"founderspage_hero_subtitle1":/** @type {(inputs: Founderspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is your AI cofounder and development team. Ship your ideas in days, not months — and start building the business you've been dreaming about`)
},"founderspage_hero_titleline12":/** @type {(inputs: Founderspage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build your`)
},"founderspage_hero_titleline22":/** @type {(inputs: Founderspage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dream`)
},"founderspage_meta_description1":/** @type {(inputs: Founderspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build your startup faster with Lovable, your AI cofounder that turns ideas into production-ready apps in days, no technical cofounder needed.`)
},"founderspage_meta_title1":/** @type {(inputs: Founderspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Best No-Code App Builder for Founders | Tools for Founders | Lovable`)
},"founderspage_testimonial1_cta1":/** @type {(inputs: Founderspage_Testimonial1_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From idea to impact: Yannis' journey with Lovable`)
},"founderspage_testimonial1_quote1":/** @type {(inputs: Founderspage_Testimonial1_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When Yannis hit a wall trying to customize newsletters for his marketing clients, he decided to build his own solution. Three days later, PrintPigeon was live—a micro-SaaS that solved his problem and turned into a revenue-generating product. No engineering team, no months of planning. Just a founder who saw a gap and filled it faster than he could have explained the problem to a dev shop.`)
},"founderspage_testimonial2_cta1":/** @type {(inputs: Founderspage_Testimonial2_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From idea to full-blown product in a month`)
},"founderspage_testimonial2_quote1":/** @type {(inputs: Founderspage_Testimonial2_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tom spent years helping people through holistic health coaching, but he had zero coding experience. When he realized his clients needed a better way to track their wellness journey, he built Elora Health in one month and launched it to real customers. The same people who used to ask "can you code?" now ask "how did you ship so fast?"`)
},"founderspage_testimonial3_cta1":/** @type {(inputs: Founderspage_Testimonial3_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How Plinq fights gender-based violence in Brazil`)
},"founderspage_testimonial3_quote1":/** @type {(inputs: Founderspage_Testimonial3_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Brazil, women needed a way to access public criminal data before meeting someone new—information that existed but wasn't easy to find. Sabrine, with no technical background, built Plinq to make that data accessible and help women stay safer. What started as a personal mission became an app with real social impact, built by someone who had never written a line of code.`)
},"founderspage_testimonials_title1":/** @type {(inputs: Founderspage_Testimonials_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real founders, real products, real results`)
},"founderspage_usecase_client_description2":/** @type {(inputs: Founderspage_Usecase_Client_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship for clients faster with full code export. Agencies and freelancers use Lovable to deliver production-ready products.`)
},"founderspage_usecase_client_title2":/** @type {(inputs: Founderspage_Usecase_Client_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client projects`)
},"founderspage_usecase_consumer_description2":/** @type {(inputs: Founderspage_Usecase_Consumer_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch social platforms, community sites, and fitness apps with user profiles, feeds, and real-time interactions.`)
},"founderspage_usecase_consumer_title2":/** @type {(inputs: Founderspage_Usecase_Consumer_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consumer apps`)
},"founderspage_usecase_internal_description2":/** @type {(inputs: Founderspage_Usecase_Internal_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CRMs, admin panels, and analytics dashboards. Build and visualize what your team needs without waiting on developers.`)
},"founderspage_usecase_internal_title2":/** @type {(inputs: Founderspage_Usecase_Internal_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal tools & dashboards`)
},"founderspage_usecase_landing_description2":/** @type {(inputs: Founderspage_Usecase_Landing_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create company sites, portfolios, and waitlist pages with professional design. Custom domains and SEO built in.`)
},"founderspage_usecase_landing_title2":/** @type {(inputs: Founderspage_Usecase_Landing_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landing pages & websites`)
},"founderspage_usecase_marketplace_description2":/** @type {(inputs: Founderspage_Usecase_Marketplace_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create booking platforms, storefronts, and rental marketplaces. Payments, search, and user accounts all work out of the box.`)
},"founderspage_usecase_marketplace_title2":/** @type {(inputs: Founderspage_Usecase_Marketplace_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marketplaces & e-commerce`)
},"founderspage_usecase_saas_description2":/** @type {(inputs: Founderspage_Usecase_Saas_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build subscription platforms, workflow tools, and project management apps. Real auth, databases, and billing included.`)
},"founderspage_usecase_saas_title2":/** @type {(inputs: Founderspage_Usecase_Saas_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`B2B SaaS`)
},"founderspage_usecases_subtitle2":/** @type {(inputs: Founderspage_Usecases_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start from your Notion docs. Connect to Stripe for payments, n8n for automations. Ship with the tools you already use.`)
},"founderspage_usecases_title2":/** @type {(inputs: Founderspage_Usecases_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dream it. Build it. Ship it.`)
},"gettingstarted_creatingproject2":/** @type {(inputs: Gettingstarted_Creatingproject2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating your project...`)
},"gettingstarted_discover_continue1":/** @type {(inputs: Gettingstarted_Discover_Continue1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"gettingstarted_discover_requestfailed2":/** @type {(inputs: Gettingstarted_Discover_Requestfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to send access request. Please try again.`)
},"gettingstarted_name_invalidcharacters2":/** @type {(inputs: Gettingstarted_Name_Invalidcharacters2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name can only contain letters, numbers, spaces, and basic punctuation (- _ . ' · & ( ) | , !)`)
},"gettingstarted_name_label1":/** @type {(inputs: Gettingstarted_Name_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full name`)
},"gettingstarted_name_placeholder1":/** @type {(inputs: Gettingstarted_Name_Placeholder1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your name`)
},"gettingstarted_name_required1":/** @type {(inputs: Gettingstarted_Name_Required1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name is required`)
},"gettingstarted_name_toolong2":/** @type {(inputs: Gettingstarted_Name_Toolong2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name must be less than 100 characters`)
},"gettingstarted_navigation_back1":/** @type {(inputs: Gettingstarted_Navigation_Back1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
},"gettingstarted_next1":/** @type {(inputs: Gettingstarted_Next1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
},"gettingstarted_picktemplate_benefitcustomizable_description3":/** @type {(inputs: Gettingstarted_Picktemplate_Benefitcustomizable_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update the design, content, and features.`)
},"gettingstarted_picktemplate_benefitcustomizable_title3":/** @type {(inputs: Gettingstarted_Picktemplate_Benefitcustomizable_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fully customizable`)
},"gettingstarted_picktemplate_benefitsavetime_description4":/** @type {(inputs: Gettingstarted_Picktemplate_Benefitsavetime_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start from a working project instead.`)
},"gettingstarted_picktemplate_benefitsavetime_title4":/** @type {(inputs: Gettingstarted_Picktemplate_Benefitsavetime_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built to save time`)
},"gettingstarted_picktemplate_benefitstartingpoint_description4":/** @type {(inputs: Gettingstarted_Picktemplate_Benefitstartingpoint_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick the closest match. You're never locked in.`)
},"gettingstarted_picktemplate_benefitstartingpoint_title4":/** @type {(inputs: Gettingstarted_Picktemplate_Benefitstartingpoint_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just a starting point`)
},"gettingstarted_picktemplate_explainer_body2":/** @type {(inputs: Gettingstarted_Picktemplate_Explainer_Body2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Templates are complete projects created with Lovable. Start with one that's close to your idea, then change anything with prompts.`)
},"gettingstarted_picktemplate_explainer_dismiss2":/** @type {(inputs: Gettingstarted_Picktemplate_Explainer_Dismiss2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
},"gettingstarted_picktemplate_explainer_title2":/** @type {(inputs: Gettingstarted_Picktemplate_Explainer_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is a template?`)
},"gettingstarted_picktemplate_skip2":/** @type {(inputs: Gettingstarted_Picktemplate_Skip2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip`)
},"gettingstarted_picktemplate_templatecreativeportfolio_description4":/** @type {(inputs: Gettingstarted_Picktemplate_Templatecreativeportfolio_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Showcase your work in a bold, visual way.`)
},"gettingstarted_picktemplate_templatecreativeportfolio_label4":/** @type {(inputs: Gettingstarted_Picktemplate_Templatecreativeportfolio_Label4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creative portfolio`)
},"gettingstarted_picktemplate_templateeventlandingpage_description5":/** @type {(inputs: Gettingstarted_Picktemplate_Templateeventlandingpage_Description5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Promote conferences, meetups, or launches.`)
},"gettingstarted_picktemplate_templateeventlandingpage_label5":/** @type {(inputs: Gettingstarted_Picktemplate_Templateeventlandingpage_Label5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Event landing page`)
},"gettingstarted_picktemplate_templatepresentationbuilder_description4":/** @type {(inputs: Gettingstarted_Picktemplate_Templatepresentationbuilder_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create beautiful slides with AI.`)
},"gettingstarted_picktemplate_templatepresentationbuilder_label4":/** @type {(inputs: Gettingstarted_Picktemplate_Templatepresentationbuilder_Label4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presentation builder`)
},"gettingstarted_picktemplate_templatesaasdashboard_description4":/** @type {(inputs: Gettingstarted_Picktemplate_Templatesaasdashboard_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage assets, analytics, and your team.`)
},"gettingstarted_picktemplate_templatesaasdashboard_label4":/** @type {(inputs: Gettingstarted_Picktemplate_Templatesaasdashboard_Label4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SaaS dashboard`)
},"gettingstarted_picktemplate_templatevisualmoodboard_description5":/** @type {(inputs: Gettingstarted_Picktemplate_Templatevisualmoodboard_Description5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collect, arrange, and share visual inspiration.`)
},"gettingstarted_picktemplate_templatevisualmoodboard_label5":/** @type {(inputs: Gettingstarted_Picktemplate_Templatevisualmoodboard_Label5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visual mood board`)
},"gettingstarted_projectcreationfailed_description3":/** @type {(inputs: Gettingstarted_Projectcreationfailed_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your project couldn't be created. Please try again from the dashboard.`)
},"gettingstarted_projectcreationfailed_title3":/** @type {(inputs: Gettingstarted_Projectcreationfailed_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create project`)
},"gettingstarted_promptortemplate_scratch_description3":/** @type {(inputs: Gettingstarted_Promptortemplate_Scratch_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe what you want to build and Lovable will create it from scratch.`)
},"gettingstarted_promptortemplate_scratch_title3":/** @type {(inputs: Gettingstarted_Promptortemplate_Scratch_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start from scratch`)
},"gettingstarted_promptortemplate_template_description3":/** @type {(inputs: Gettingstarted_Promptortemplate_Template_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start with a proven template and customize it to fit your idea.`)
},"gettingstarted_promptortemplate_template_title3":/** @type {(inputs: Gettingstarted_Promptortemplate_Template_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a template`)
},"gettingstarted_role_consultant1":/** @type {(inputs: Gettingstarted_Role_Consultant1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultant`)
},"gettingstarted_role_designer1":/** @type {(inputs: Gettingstarted_Role_Designer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Designer`)
},"gettingstarted_role_engineer1":/** @type {(inputs: Gettingstarted_Role_Engineer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Engineer`)
},"gettingstarted_role_founder1":/** @type {(inputs: Gettingstarted_Role_Founder1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Founder`)
},"gettingstarted_role_marketingsales2":/** @type {(inputs: Gettingstarted_Role_Marketingsales2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marketing / Sales`)
},"gettingstarted_role_operations1":/** @type {(inputs: Gettingstarted_Role_Operations1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operations`)
},"gettingstarted_role_other1":/** @type {(inputs: Gettingstarted_Role_Other1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
},"gettingstarted_role_product1":/** @type {(inputs: Gettingstarted_Role_Product1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product`)
},"gettingstarted_stepindicator_label2":/** @type {(inputs: Gettingstarted_Stepindicator_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step indicator`)
},"gettingstarted_stepindicator_steplabel3":/** @type {(inputs: Gettingstarted_Stepindicator_Steplabel3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Step ${i?.current} of ${i?.total}`)
},"gettingstarted_steps_discover_subtitle1":/** @type {(inputs: Gettingstarted_Steps_Discover_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your colleagues are already building with Lovable. You can join their workspace to collaborate.`)
},"gettingstarted_steps_discover_title1":/** @type {(inputs: Gettingstarted_Steps_Discover_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover your team's workspaces`)
},"gettingstarted_steps_name_title1":/** @type {(inputs: Gettingstarted_Steps_Name_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What's your name?`)
},"gettingstarted_steps_promptortemplate_title3":/** @type {(inputs: Gettingstarted_Steps_Promptortemplate_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How would you like to start?`)
},"gettingstarted_steps_role_title1":/** @type {(inputs: Gettingstarted_Steps_Role_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which role fits you best?`)
},"gettingstarted_steps_style_title1":/** @type {(inputs: Gettingstarted_Steps_Style_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick your style`)
},"gettingstarted_steps_teamsize_title2":/** @type {(inputs: Gettingstarted_Steps_Teamsize_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How many people work at your company?`)
},"gettingstarted_style_dark1":/** @type {(inputs: Gettingstarted_Style_Dark1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
},"gettingstarted_style_light1":/** @type {(inputs: Gettingstarted_Style_Light1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
},"gettingstarted_style_themepreviewalt3":/** @type {(inputs: Gettingstarted_Style_Themepreviewalt3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.theme} theme preview`)
},"gettingstarted_submitting1":/** @type {(inputs: Gettingstarted_Submitting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submitting...`)
},"gettingstarted_teamsize_200plus2":/** @type {(inputs: Gettingstarted_Teamsize_200plus2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`200+`)
},"gettingstarted_teamsize_21to2002":/** @type {(inputs: Gettingstarted_Teamsize_21to2002Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`21 - 200`)
},"gettingstarted_teamsize_2to202":/** @type {(inputs: Gettingstarted_Teamsize_2to202Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 - 20`)
},"gettingstarted_teamsize_solo2":/** @type {(inputs: Gettingstarted_Teamsize_Solo2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo`)
},"gitlabselfmanaged_connectstep_authorize3":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Authorize3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authorize with GitLab`)
},"gitlabselfmanaged_connectstep_back3":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Back3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
},"gitlabselfmanaged_connectstep_connecting3":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Connecting3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecting to GitLab...`)
},"gitlabselfmanaged_connectstep_description3":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authorize Lovable to access your GitLab instance.`)
},"gitlabselfmanaged_connectstep_errorconnectfailed5":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Errorconnectfailed5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to connect to GitLab. Please check your credentials and try again.`)
},"gitlabselfmanaged_connectstep_errorsetupfailed5":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Errorsetupfailed5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to complete GitLab setup. Please try again.`)
},"gitlabselfmanaged_connectstep_fetchinggroups4":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Fetchinggroups4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fetching GitLab groups...`)
},"gitlabselfmanaged_connectstep_title3":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to GitLab`)
},"gitlabselfmanaged_connectstep_waitingauth4":/** @type {(inputs: Gitlabselfmanaged_Connectstep_Waitingauth4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for authorization...`)
},"gitlabselfmanaged_prerequisites_cancel2":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"gitlabselfmanaged_prerequisites_continue2":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Continue2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"gitlabselfmanaged_prerequisites_description2":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before connecting your GitLab Self-Managed instance, ensure Lovable can access your server.`)
},"gitlabselfmanaged_prerequisites_ipallowlist4":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Ipallowlist4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP allow list`)
},"gitlabselfmanaged_prerequisites_ipallowlistdescription5":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Ipallowlistdescription5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If your GitLab instance uses IP allow lists or firewall rules, add these IP ranges to ensure Lovable can communicate with your server.`)
},"gitlabselfmanaged_prerequisites_ipnote3":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Ipnote3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ensure these IPs are allowed in your GitLab instance's network or firewall configuration.`)
},"gitlabselfmanaged_prerequisites_title2":/** @type {(inputs: Gitlabselfmanaged_Prerequisites_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prerequisites`)
},"gitlabselfmanaged_setup_applicationid3":/** @type {(inputs: Gitlabselfmanaged_Setup_Applicationid3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application ID`)
},"gitlabselfmanaged_setup_applicationidplaceholder4":/** @type {(inputs: Gitlabselfmanaged_Setup_Applicationidplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your OAuth application ID`)
},"gitlabselfmanaged_setup_applicationsecret3":/** @type {(inputs: Gitlabselfmanaged_Setup_Applicationsecret3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application secret`)
},"gitlabselfmanaged_setup_applicationsecretplaceholder4":/** @type {(inputs: Gitlabselfmanaged_Setup_Applicationsecretplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your OAuth application secret`)
},"gitlabselfmanaged_setup_back2":/** @type {(inputs: Gitlabselfmanaged_Setup_Back2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
},"gitlabselfmanaged_setup_confidential2":/** @type {(inputs: Gitlabselfmanaged_Setup_Confidential2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confidential:`)
},"gitlabselfmanaged_setup_confidentialyes3":/** @type {(inputs: Gitlabselfmanaged_Setup_Confidentialyes3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes`)
},"gitlabselfmanaged_setup_continue2":/** @type {(inputs: Gitlabselfmanaged_Setup_Continue2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"gitlabselfmanaged_setup_copybelow3":/** @type {(inputs: Gitlabselfmanaged_Setup_Copybelow3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy the Application ID and secret below`)
},"gitlabselfmanaged_setup_createapp3":/** @type {(inputs: Gitlabselfmanaged_Setup_Createapp3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a new application with:`)
},"gitlabselfmanaged_setup_description2":/** @type {(inputs: Gitlabselfmanaged_Setup_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your GitLab instance details. You'll need to create an OAuth application in your GitLab admin panel first.`)
},"gitlabselfmanaged_setup_gitlaburl3":/** @type {(inputs: Gitlabselfmanaged_Setup_Gitlaburl3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitLab URL`)
},"gitlabselfmanaged_setup_gitlaburldescription4":/** @type {(inputs: Gitlabselfmanaged_Setup_Gitlaburldescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The URL of your self-hosted GitLab instance`)
},"gitlabselfmanaged_setup_gitlaburlplaceholder4":/** @type {(inputs: Gitlabselfmanaged_Setup_Gitlaburlplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://gitlab.company.com`)
},"gitlabselfmanaged_setup_gotoadmin4":/** @type {(inputs: Gitlabselfmanaged_Setup_Gotoadmin4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to your GitLab instance's Admin > Applications page`)
},"gitlabselfmanaged_setup_grouppath3":/** @type {(inputs: Gitlabselfmanaged_Setup_Grouppath3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group path (optional)`)
},"gitlabselfmanaged_setup_grouppathdescription4":/** @type {(inputs: Gitlabselfmanaged_Setup_Grouppathdescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restrict the namespace picker to a specific group. Useful when using a Group application.`)
},"gitlabselfmanaged_setup_grouppathplaceholder4":/** @type {(inputs: Gitlabselfmanaged_Setup_Grouppathplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`my-org/sub-group`)
},"gitlabselfmanaged_setup_instructionstitle3":/** @type {(inputs: Gitlabselfmanaged_Setup_Instructionstitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setup instructions`)
},"gitlabselfmanaged_setup_redirecturi3":/** @type {(inputs: Gitlabselfmanaged_Setup_Redirecturi3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirect URI:`)
},"gitlabselfmanaged_setup_scopes2":/** @type {(inputs: Gitlabselfmanaged_Setup_Scopes2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scopes:`)
},"gitlabselfmanaged_setup_title2":/** @type {(inputs: Gitlabselfmanaged_Setup_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure GitLab instance`)
},"gptengineerpage_cta2":/** @type {(inputs: Gptengineerpage_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building with Lovable`)
},"gptengineerpage_evolution_text2":/** @type {(inputs: Gptengineerpage_Evolution_Text2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`After gpt-engineer blew up, we wanted to make it more accessible, since the open source tool is meant for developers using their terminal. Therefore we built a commercial web version called gptengineer.app, meant to be used by non-technical users. Around the same time in late 2023, we founded Lovable to tackle the larger mission of creating the last piece of software (software that creates other software).`)
},"gptengineerpage_evolution_title2":/** @type {(inputs: Gptengineerpage_Evolution_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Evolution`)
},"gptengineerpage_footer2":/** @type {(inputs: Gptengineerpage_Footer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Want to explore the open source project? Visit gpt-engineer on GitHub`)
},"gptengineerpage_intro2":/** @type {(inputs: Gptengineerpage_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GPT Engineer was an AI software engineer that evolved into Lovable. Lovable lets you chat to build real websites & web apps, and collaborate on interactive prototypes.`)
},"gptengineerpage_meta_description2":/** @type {(inputs: Gptengineerpage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn about GPT Engineer's evolution into Lovable - from open source innovation to production-ready AI software development platform.`)
},"gptengineerpage_meta_title2":/** @type {(inputs: Gptengineerpage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GPT Engineer and Lovable | The Evolution`)
},"gptengineerpage_note2":/** @type {(inputs: Gptengineerpage_Note2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`gpt-engineer refers to the open source command-line tool available on GitHub. gptengineer.app (often written as GPT Engineer) was our commercial web platform, which has now been rebranded as Lovable, to avoid confusion between the two.`)
},"gptengineerpage_note_label2":/** @type {(inputs: Gptengineerpage_Note_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note:`)
},"gptengineerpage_opensource_text3":/** @type {(inputs: Gptengineerpage_Opensource_Text3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The open source gpt-engineer project continues to have users on GitHub. While Lovable is a for-profit company, gpt-engineer remains a valuable open source tool for the community to explore and experiment with AI-assisted software development.`)
},"gptengineerpage_opensource_title3":/** @type {(inputs: Gptengineerpage_Opensource_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Source Legacy`)
},"gptengineerpage_origins_text2":/** @type {(inputs: Gptengineerpage_Origins_Text2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In mid 2023, before code generation was mainstream, we created gpt-engineer - an open source project exploring how AI could help build software. It became the fastest growing code repository on GitHub to date, and today has over 50,000 stars.`)
},"gptengineerpage_origins_title2":/** @type {(inputs: Gptengineerpage_Origins_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our Origins`)
},"gptengineerpage_title2":/** @type {(inputs: Gptengineerpage_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GPT Engineer is now Lovable`)
},"gptengineerpage_users_text2":/** @type {(inputs: Gptengineerpage_Users_Text2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you're coming from gptengineer.app, your projects and deployments remain unchanged. The only thing that changed was the domain and the branding of our platform. You will have to login again, but can continue to use your existing credentials. Your deployed sites are now also available on lovable.app, in addition to the existing gptengineer.run domain. (We will keep both domains around)`)
},"gptengineerpage_users_title2":/** @type {(inputs: Gptengineerpage_Users_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For our users of gptengineer.app`)
},"gptengineerpage_whylovable_text3":/** @type {(inputs: Gptengineerpage_Whylovable_Text3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The name Lovable reflects our mission to make using and building software a more enjoyable experience. While gpt-engineer focused on creating a toolkit for developers to experiment and develop codegen, Lovable expands this vision to create a complete platform for building and deploying software through natural conversation.`)
},"gptengineerpage_whylovable_title3":/** @type {(inputs: Gptengineerpage_Whylovable_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why Lovable?`)
},"healthcarepage_example1_description1":/** @type {(inputs: Healthcarepage_Example1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help practices monitor and improve their Quality and Outcomes Framework performance with real-time tracking and automated follow-ups.`)
},"healthcarepage_example1_title1":/** @type {(inputs: Healthcarepage_Example1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QOF Progress Tracker`)
},"healthcarepage_example2_description1":/** @type {(inputs: Healthcarepage_Example2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Simplify complex diagnostic decisions with an intelligent system that identifies and recommends required blood tests based on patient conditions.`)
},"healthcarepage_example2_title1":/** @type {(inputs: Healthcarepage_Example2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Smart Blood Test Assistant`)
},"healthcarepage_example3_description1":/** @type {(inputs: Healthcarepage_Example3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empower frontline staff with an intelligent triage system that ensures patients are directed to the right care pathway quickly and efficiently.`)
},"healthcarepage_example3_title1":/** @type {(inputs: Healthcarepage_Example3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patient Triage Navigator`)
},"healthcarepage_examples_subtitle1":/** @type {(inputs: Healthcarepage_Examples_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arun and his colleagues have created more than 20 applications solving real clinical problems:`)
},"healthcarepage_examples_title1":/** @type {(inputs: Healthcarepage_Examples_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Examples of Apps Built with Lovable`)
},"healthcarepage_hero_cta1":/** @type {(inputs: Healthcarepage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building for free`)
},"healthcarepage_hero_subtitle1":/** @type {(inputs: Healthcarepage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join hundreds of NHS clinicians building applications with Lovable`)
},"healthcarepage_hero_title1":/** @type {(inputs: Healthcarepage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build Healthcare Apps Without Code`)
},"healthcarepage_meta_description1":/** @type {(inputs: Healthcarepage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overview of healthcare-related features at Lovable, compliance standards, and responsible use for health-focused applications.`)
},"healthcarepage_meta_title1":/** @type {(inputs: Healthcarepage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No-Code Healthcare App Features & Compliance | Lovable`)
},"healthcarepage_startbuilding_cta2":/** @type {(inputs: Healthcarepage_Startbuilding_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building with Lovable`)
},"healthcarepage_startbuilding_description2":/** @type {(inputs: Healthcarepage_Startbuilding_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See for yourself how you can build Healthcare applications using Lovable.`)
},"healthcarepage_startbuilding_title2":/** @type {(inputs: Healthcarepage_Startbuilding_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start Building Today`)
},"healthcarepage_testimonial_name1":/** @type {(inputs: Healthcarepage_Testimonial_Name1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arun Nadarasa`)
},"healthcarepage_testimonial_quote1":/** @type {(inputs: Healthcarepage_Testimonial_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Working in the Healthcare industry for 12 years, the biggest blocker was knowing how to code - thanks to Lovable you don’t have to anymore”`)
},"healthcarepage_testimonial_role1":/** @type {(inputs: Healthcarepage_Testimonial_Role1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NHS Clinical Entrepreneur programme`)
},"healthcarepage_whatislovable_paragraph13":/** @type {(inputs: Healthcarepage_Whatislovable_Paragraph13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable allows non-programmers to build digital applications without prior coding expertise by simply chatting with an AI and describing what app you want.`)
},"healthcarepage_whatislovable_paragraph23":/** @type {(inputs: Healthcarepage_Whatislovable_Paragraph23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Its success has inspired NHS practitioners to launch a large-scale program for Healthcare innovation, the Clinical AI Hackathon, to build applications with Lovable, with 200+ participants registered across the UK.`)
},"healthcarepage_whatislovable_title3":/** @type {(inputs: Healthcarepage_Whatislovable_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is Lovable?`)
},"healthcheckbrief_close2":/** @type {(inputs: Healthcheckbrief_Close2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"healthcheckbrief_collapse2":/** @type {(inputs: Healthcheckbrief_Collapse2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse Project monitoring findings`)
},"healthcheckbrief_errorignore3":/** @type {(inputs: Healthcheckbrief_Errorignore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to ignore.`)
},"healthcheckbrief_errorissuesunavailable4":/** @type {(inputs: Healthcheckbrief_Errorissuesunavailable4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Issues are not available.`)
},"healthcheckbrief_errorissueunavailable4":/** @type {(inputs: Healthcheckbrief_Errorissueunavailable4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Issue is not available.`)
},"healthcheckbrief_erroropenmessage4":/** @type {(inputs: Healthcheckbrief_Erroropenmessage4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to open existing message.`)
},"healthcheckbrief_errorstartfixing4":/** @type {(inputs: Healthcheckbrief_Errorstartfixing4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to start fixing.`)
},"healthcheckbrief_errorundoignore4":/** @type {(inputs: Healthcheckbrief_Errorundoignore4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to undo ignore.`)
},"healthcheckbrief_ignore2":/** @type {(inputs: Healthcheckbrief_Ignore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignore`)
},"healthcheckbrief_issueignored3":/** @type {(inputs: Healthcheckbrief_Issueignored3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Issue ignored.`)
},"healthcheckbrief_moreinfo3":/** @type {(inputs: Healthcheckbrief_Moreinfo3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More info`)
},"healthcheckbrief_projectmonitoring3":/** @type {(inputs: Healthcheckbrief_Projectmonitoring3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project monitoring`)
},"healthcheckbrief_skip2":/** @type {(inputs: Healthcheckbrief_Skip2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip`)
},"healthcheckbrief_titlelong3":/** @type {(inputs: Healthcheckbrief_Titlelong3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} issue found while you were away`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} issues found while you were away`);
	return /** @type {LocalizedString} */ ("healthCheckBrief_titleLong");
},"healthcheckbrief_titleshort3":/** @type {(inputs: Healthcheckbrief_Titleshort3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} issue found`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} issues found`);
	return /** @type {LocalizedString} */ ("healthCheckBrief_titleShort");
},"healthcheckbrief_trytofix4":/** @type {(inputs: Healthcheckbrief_Trytofix4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix`)
},"healthcheckbrief_undoignore3":/** @type {(inputs: Healthcheckbrief_Undoignore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo ignore issue`)
},"healthcheckbrief_viewissues3":/** @type {(inputs: Healthcheckbrief_Viewissues3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`View issue`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`View issues`);
	return /** @type {LocalizedString} */ ("healthCheckBrief_viewIssues");
},"healthcheckbriefpill_labelone4":/** @type {(inputs: Healthcheckbriefpill_Labelone4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 issue`)
},"healthcheckbriefpill_labelother4":/** @type {(inputs: Healthcheckbriefpill_Labelother4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} issues`)
},"healthcheckbriefpill_tooltipone4":/** @type {(inputs: Healthcheckbriefpill_Tooltipone4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can ask about this issue`)
},"healthcheckbriefpill_tooltipother4":/** @type {(inputs: Healthcheckbriefpill_Tooltipother4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can ask about these issues`)
},"homepage_chatgreetings_02":/** @type {(inputs: Homepage_Chatgreetings_02Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Let's start${i?.name}`)
},"homepage_chatgreetings_12":/** @type {(inputs: Homepage_Chatgreetings_12Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Welcome back${i?.name}`)
},"homepage_chatgreetings_22":/** @type {(inputs: Homepage_Chatgreetings_22Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ready to start${i?.name}?`)
},"homepage_discoverapps2":/** @type {(inputs: Homepage_Discoverapps2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover <gradient>apps</gradient>`)
},"homepage_discovertemplates2":/** @type {(inputs: Homepage_Discovertemplates2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover <gradient>templates</gradient>`)
},"homepage_discovertemplatessubtitle3":/** @type {(inputs: Homepage_Discovertemplatessubtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start your next project with a template`)
},"homepage_firstprompthint_subtitle3":/** @type {(inputs: Homepage_Firstprompthint_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe what you want to build and Lovable will create it from scratch.`)
},"homepage_firstprompthint_title3":/** @type {(inputs: Homepage_Firstprompthint_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write your first prompt`)
},"homepage_greetings_01":/** @type {(inputs: Homepage_Greetings_01Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Let's build something${i?.name}`)
},"homepage_greetings_11":/** @type {(inputs: Homepage_Greetings_11Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ready to build${i?.name}?`)
},"homepage_greetings_21":/** @type {(inputs: Homepage_Greetings_21Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`What should we build${i?.name}?`)
},"homepage_greetings_31":/** @type {(inputs: Homepage_Greetings_31Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`What's on your mind${i?.name}?`)
},"homepage_greetings_41":/** @type {(inputs: Homepage_Greetings_41Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Got an idea${i?.name}?`)
},"homepage_greetings_51":/** @type {(inputs: Homepage_Greetings_51Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`What's the vision${i?.name}?`)
},"homepage_logotrain2":/** @type {(inputs: Homepage_Logotrain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teams from top companies build with Lovable`)
},"homepage_seopill_badge2":/** @type {(inputs: Homepage_Seopill_Badge2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
},"homepage_seopill_label2":/** @type {(inputs: Homepage_Seopill_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Better SEO – Apps built to be found`)
},"homepage_subtitle1":/** @type {(inputs: Homepage_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create apps and websites by chatting with AI`)
},"homepage_title1":/** @type {(inputs: Homepage_Title1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build something ${i?.name}`)
},"importedrepo_fromgithub2":/** @type {(inputs: Importedrepo_Fromgithub2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imported from GitHub`)
},"importedrepo_fromzip2":/** @type {(inputs: Importedrepo_Fromzip2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaded from ZIP`)
},"intentbadge_enablecloud2":/** @type {(inputs: Intentbadge_Enablecloud2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Cloud`)
},"intentbadge_fixallsecurityissues4":/** @type {(inputs: Intentbadge_Fixallsecurityissues4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix all security issues`)
},"intentbadge_fixdependency2":/** @type {(inputs: Intentbadge_Fixdependency2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix dependency`)
},"intentbadge_fixdependencynamed3":/** @type {(inputs: Intentbadge_Fixdependencynamed3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fix dependency: ${i?.name}`)
},"intentbadge_fixselectedsecurityissues4":/** @type {(inputs: Intentbadge_Fixselectedsecurityissues4Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Fix ${i?.count} selected security issue`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Fix ${i?.count} selected security issues`);
	return /** @type {LocalizedString} */ ("intentBadge_fixSelectedSecurityIssues");
},"intentbadge_securityreview2":/** @type {(inputs: Intentbadge_Securityreview2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security review`)
},"intentbadge_securityscan2":/** @type {(inputs: Intentbadge_Securityscan2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security scan`)
},"intentbadge_trytofix3":/** @type {(inputs: Intentbadge_Trytofix3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix`)
},"intentbadge_trytofixtitle4":/** @type {(inputs: Intentbadge_Trytofixtitle4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Try to fix: ${i?.title}`)
},"intentbadge_visualedit2":/** @type {(inputs: Intentbadge_Visualedit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visual edit`)
},"inviteteam_alreadyinvitedcount3":/** @type {(inputs: Inviteteam_Alreadyinvitedcount3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} already invited`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} already invited`);
	return /** @type {LocalizedString} */ ("inviteTeam_alreadyInvitedCount");
},"inviteteam_alreadyinvitedmany3":/** @type {(inputs: Inviteteam_Alreadyinvitedmany3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} and ${i?.count} others have already been invited`)
},"inviteteam_alreadyinvitedone3":/** @type {(inputs: Inviteteam_Alreadyinvitedone3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} has already been invited`)
},"inviteteam_alreadyinvitedtwo3":/** @type {(inputs: Inviteteam_Alreadyinvitedtwo3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email1} and ${i?.email2} have already been invited`)
},"inviteteam_description1":/** @type {(inputs: Inviteteam_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Great things aren't built alone. Add your teammates and start creating together.`)
},"inviteteam_emailsandmore3":/** @type {(inputs: Inviteteam_Emailsandmore3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.emails} and ${i?.count} more`)
},"inviteteam_failed1":/** @type {(inputs: Inviteteam_Failed1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Failed to invite ${i?.emails}.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Failed to invite ${i?.emails}.`);
	return /** @type {LocalizedString} */ ("inviteTeam_failed");
},"inviteteam_imagealt2":/** @type {(inputs: Inviteteam_Imagealt2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite your team`)
},"inviteteam_invite1":/** @type {(inputs: Inviteteam_Invite1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite`)
},"inviteteam_invitedcount2":/** @type {(inputs: Inviteteam_Invitedcount2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} invited`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} invited`);
	return /** @type {LocalizedString} */ ("inviteTeam_invitedCount");
},"inviteteam_partialfailure2":/** @type {(inputs: Inviteteam_Partialfailure2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.summary}; ${i?.count} failed: ${i?.emails}`)
},"inviteteam_skip1":/** @type {(inputs: Inviteteam_Skip1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip`)
},"inviteteam_title1":/** @type {(inputs: Inviteteam_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team up for free`)
},"keepproject_error_description1":/** @type {(inputs: Keepproject_Error_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong on our end. Please try again.`)
},"keepproject_error_retry1":/** @type {(inputs: Keepproject_Error_Retry1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"keepproject_error_title1":/** @type {(inputs: Keepproject_Error_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't keep your project`)
},"keepproject_invalidlink_description2":/** @type {(inputs: Keepproject_Invalidlink_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This keep link may have expired or already been used. Open your project to keep it.`)
},"keepproject_invalidlink_title2":/** @type {(inputs: Keepproject_Invalidlink_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This link is no longer valid`)
},"keepproject_loading_description1":/** @type {(inputs: Keepproject_Loading_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give us a moment while we stop the scheduled deletion.`)
},"keepproject_loading_title1":/** @type {(inputs: Keepproject_Loading_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keeping your project`)
},"keepproject_success_description1":/** @type {(inputs: Keepproject_Success_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We've stopped the scheduled deletion, so you can keep building.`)
},"keepproject_success_openproject2":/** @type {(inputs: Keepproject_Success_Openproject2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open project`)
},"keepproject_success_title1":/** @type {(inputs: Keepproject_Success_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your project has been kept`)
},"lennypage_hero_subtitle1":/** @type {(inputs: Lennypage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lenny’s friends are our friends - it’s time to build your first app.`)
},"lennypage_hero_title1":/** @type {(inputs: Lennypage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable 🤝 Lenny`)
},"lennypage_meta_description1":/** @type {(inputs: Lennypage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lenny's friends are our friends - it's time to build your first app with Lovable.`)
},"lennypage_meta_title1":/** @type {(inputs: Lennypage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable 🤝 Lenny`)
},"lennypage_video1_description1":/** @type {(inputs: Lennypage_Video1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isaak’s full-hour walkthrough & the BuiltwithAI 10-minute tutorial`)
},"lennypage_video1_title1":/** @type {(inputs: Lennypage_Video1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full Tutorial`)
},"lennypage_video2_description1":/** @type {(inputs: Lennypage_Video2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Greg Isenberg & Rasmic on how PMs can build with AI tools`)
},"lennypage_video2_title1":/** @type {(inputs: Lennypage_Video2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For Product Managers`)
},"lennypage_video3_description1":/** @type {(inputs: Lennypage_Video3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kristian & Mark Kashef share their expert prompting strategies`)
},"lennypage_video3_title1":/** @type {(inputs: Lennypage_Video3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompting Guide`)
},"lennypage_videos_title1":/** @type {(inputs: Lennypage_Videos_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Become a top 1% user of AI Software`)
},"linkspage_generatecard_button2":/** @type {(inputs: Linkspage_Generatecard_Button2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate Link`)
},"linkspage_generatecard_copyarialabel4":/** @type {(inputs: Linkspage_Generatecard_Copyarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link`)
},"linkspage_generatecard_noattachments3":/** @type {(inputs: Linkspage_Generatecard_Noattachments3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a prompt to generate a link. Images and web pages are optional.`)
},"linkspage_generatecard_openarialabel4":/** @type {(inputs: Linkspage_Generatecard_Openarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open link`)
},"linkspage_generatecard_resultlabel3":/** @type {(inputs: Linkspage_Generatecard_Resultlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generated Link:`)
},"linkspage_generatecard_title2":/** @type {(inputs: Linkspage_Generatecard_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate Lovable Link`)
},"linkspage_generatecard_uploading2":/** @type {(inputs: Linkspage_Generatecard_Uploading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading...`)
},"linkspage_generatecard_withattachments3":/** @type {(inputs: Linkspage_Generatecard_Withattachments3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} attachment(s) added. Enter a prompt to generate the link.`)
},"linkspage_imagescard_addarialabel4":/** @type {(inputs: Linkspage_Imagescard_Addarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add image`)
},"linkspage_imagescard_hint2":/** @type {(inputs: Linkspage_Imagescard_Hint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste an image URL and press the plus button or Enter`)
},"linkspage_imagescard_pasteurl3":/** @type {(inputs: Linkspage_Imagescard_Pasteurl3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste image URL:`)
},"linkspage_imagescard_title2":/** @type {(inputs: Linkspage_Imagescard_Title2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Images (${i?.current}/${i?.max})`)
},"linkspage_imagescard_uploadedlabel3":/** @type {(inputs: Linkspage_Imagescard_Uploadedlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaded images:`)
},"linkspage_imagescard_uploading2":/** @type {(inputs: Linkspage_Imagescard_Uploading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading image...`)
},"linkspage_meta_description1":/** @type {(inputs: Linkspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate Lovable links with images and prompts`)
},"linkspage_meta_title1":/** @type {(inputs: Linkspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Link Generator`)
},"linkspage_pagescard_addarialabel4":/** @type {(inputs: Linkspage_Pagescard_Addarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add web page`)
},"linkspage_pagescard_addedlabel3":/** @type {(inputs: Linkspage_Pagescard_Addedlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added web pages:`)
},"linkspage_pagescard_hint2":/** @type {(inputs: Linkspage_Pagescard_Hint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste a public web page URL and press the plus button or Enter`)
},"linkspage_pagescard_pasteurl3":/** @type {(inputs: Linkspage_Pagescard_Pasteurl3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste web page URL:`)
},"linkspage_pagescard_removearialabel4":/** @type {(inputs: Linkspage_Pagescard_Removearialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove web page`)
},"linkspage_pagescard_title2":/** @type {(inputs: Linkspage_Pagescard_Title2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Web pages (${i?.current}/${i?.max})`)
},"linkspage_promptcard_placeholder2":/** @type {(inputs: Linkspage_Promptcard_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can use up to 50,000 characters to describe what you want to create with the images.`)
},"linkspage_promptcard_title2":/** @type {(inputs: Linkspage_Promptcard_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your prompt here...`)
},"linkspage_subtitle1":/** @type {(inputs: Linkspage_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create shareable Lovable links with images and prompts that auto-submit when opened`)
},"linkspage_title1":/** @type {(inputs: Linkspage_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Link Generator`)
},"loadingpanel_defaultdescription2":/** @type {(inputs: Loadingpanel_Defaultdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hang tight while we're getting things ready for you`)
},"loadingpanel_defaulttitle2":/** @type {(inputs: Loadingpanel_Defaulttitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"loginsignuptypewriter_prefix2":/** @type {(inputs: Loginsignuptypewriter_Prefix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to build `)
},"loginsignuptypewriter_words_02":/** @type {(inputs: Loginsignuptypewriter_Words_02Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your saas startup.`)
},"loginsignuptypewriter_words_12":/** @type {(inputs: Loginsignuptypewriter_Words_12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your landing page.`)
},"loginsignuptypewriter_words_22":/** @type {(inputs: Loginsignuptypewriter_Words_22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your blog.`)
},"loginsignuptypewriter_words_32":/** @type {(inputs: Loginsignuptypewriter_Words_32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your portfolio.`)
},"loginsignuptypewriter_words_42":/** @type {(inputs: Loginsignuptypewriter_Words_42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`web apps.`)
},"loginsignuptypewriter_words_52":/** @type {(inputs: Loginsignuptypewriter_Words_52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`interactive prototypes.`)
},"loginsignuptypewriter_words_62":/** @type {(inputs: Loginsignuptypewriter_Words_62Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`internal tools.`)
},"loginsignuptypewriter_words_72":/** @type {(inputs: Loginsignuptypewriter_Words_72Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dashboards.`)
},"lovablestats_stat11":/** @type {(inputs: Lovablestats_Stat11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`projects built on Lovable`)
},"lovablestats_stat21":/** @type {(inputs: Lovablestats_Stat21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`new projects built per week on Lovable`)
},"lovablestats_stat31":/** @type {(inputs: Lovablestats_Stat31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`visits per month to Lovable-built projects`)
},"lovablestats_subtitle1":/** @type {(inputs: Lovablestats_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Millions of builders are already turning ideas into reality`)
},"lovablestats_title1":/** @type {(inputs: Lovablestats_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable <gradient>in numbers</gradient>`)
},"lovablewalkthrough_replayarialabel3":/** @type {(inputs: Lovablewalkthrough_Replayarialabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replay video`)
},"lovablewalkthrough_sectiontitle2":/** @type {(inputs: Lovablewalkthrough_Sectiontitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meet Lovable`)
},"lovablewalkthrough_step1description2":/** @type {(inputs: Lovablewalkthrough_Step1description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe the app or website you want to create or drop in screenshots and docs`)
},"lovablewalkthrough_step1title2":/** @type {(inputs: Lovablewalkthrough_Step1title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start with an idea`)
},"lovablewalkthrough_step2description2":/** @type {(inputs: Lovablewalkthrough_Step2description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See your vision transform into a working prototype in real-time as AI builds it for you`)
},"lovablewalkthrough_step2title2":/** @type {(inputs: Lovablewalkthrough_Step2title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Watch it come to life`)
},"lovablewalkthrough_step3description2":/** @type {(inputs: Lovablewalkthrough_Step3description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iterate on your creation with simple feedback and deploy it to the world with one click`)
},"lovablewalkthrough_step3title2":/** @type {(inputs: Lovablewalkthrough_Step3title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refine and ship`)
},"marketerspage_faq1_answer1":/** @type {(inputs: Marketerspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can keep everything on brand by using shared components, styles, and reusable sections across pages, in addition to our design systems feature. Teams can standardize core layouts while still making campaign‑specific edits.`)
},"marketerspage_faq1_question1":/** @type {(inputs: Marketerspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I keep everything on brand?`)
},"marketerspage_faq2_answer1":/** @type {(inputs: Marketerspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you do not need engineering. Marketing teams can draft, iterate, and publish digital experiences independently, and involve engineering only for deeper integrations or advanced workflows.`)
},"marketerspage_faq2_question1":/** @type {(inputs: Marketerspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need engineering?`)
},"marketerspage_faq3_answer1":/** @type {(inputs: Marketerspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable works with common marketing integrations for analytics, tracking, and lead capture. Teams connect it to their CRM and analytics stack depending on how they measure performance and route form submissions. Learn more about our connectors <connectorsLink>here</connectorsLink>.`)
},"marketerspage_faq3_question1":/** @type {(inputs: Marketerspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What integrations work with Lovable?`)
},"marketerspage_faq4_answer1":/** @type {(inputs: Marketerspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable supports SEO fundamentals such as editable metadata and indexable pages. Teams can ship updates quickly while keeping pages structured for search and sharing.`)
},"marketerspage_faq4_question1":/** @type {(inputs: Marketerspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable support SEO?`)
},"marketerspage_faq5_answer1":/** @type {(inputs: Marketerspage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable can replace a CMS for many landing‑page workflows, especially for campaigns that require frequent iteration. Some teams still keep a CMS for blogs or long‑form publishing.`)
},"marketerspage_faq5_question1":/** @type {(inputs: Marketerspage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can Lovable replace our CMS for landing pages?`)
},"marketerspage_faq6_answer1":/** @type {(inputs: Marketerspage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing works through a draft‑to‑live workflow so teams can review changes before they go live. You can also restrict who has permission to publish.`)
},"marketerspage_faq6_question1":/** @type {(inputs: Marketerspage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does publishing work?`)
},"marketerspage_faq7_answer1":/** @type {(inputs: Marketerspage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable supports enterprise‑grade controls such as role‑based access and governed publishing workflows. Teams can limit who can edit, review, and publish.`)
},"marketerspage_faq7_question1":/** @type {(inputs: Marketerspage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable secure for enterprise teams?`)
},"marketerspage_faqtitle2":/** @type {(inputs: Marketerspage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"marketerspage_feature1_description1":/** @type {(inputs: Marketerspage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save $50,000 by using Lovable for landing pages. Build and iterate using your existing design systems to keep everything pixel perfect. No agency fees, CMS constraints, or engineering handoffs.`)
},"marketerspage_feature1_title1":/** @type {(inputs: Marketerspage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch branded landing pages`)
},"marketerspage_feature2_description1":/** @type {(inputs: Marketerspage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go beyond templates to create digital experiences that respond to user input and update dynamically using live data from tools like HubSpot, Notion, and Linear.`)
},"marketerspage_feature2_title1":/** @type {(inputs: Marketerspage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build interactive campaign experiences`)
},"marketerspage_feature3_description1":/** @type {(inputs: Marketerspage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Centralize event schedules, launch messaging, enablement assets, and FAQs in a single portal that stays current without manual coordination across docs and threads.`)
},"marketerspage_feature3_title1":/** @type {(inputs: Marketerspage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give teams one source of truth`)
},"marketerspage_feature4_description1":/** @type {(inputs: Marketerspage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create dashboards for pipeline, campaign performance, and lead flow so stakeholders can self-serve updates without pulling data manually into slides or reworking spreadsheets.`)
},"marketerspage_feature4_title1":/** @type {(inputs: Marketerspage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make performance visible without spreadsheets`)
},"marketerspage_features_title1":/** @type {(inputs: Marketerspage_Features_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What marketing teams ship with Lovable`)
},"marketerspage_hero_cta1":/** @type {(inputs: Marketerspage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Book a demo`)
},"marketerspage_hero_faster1":/** @type {(inputs: Marketerspage_Hero_Faster1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`faster`)
},"marketerspage_hero_h11":/** @type {(inputs: Marketerspage_Hero_H11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools for marketers`)
},"marketerspage_hero_ship1":/** @type {(inputs: Marketerspage_Hero_Ship1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship`)
},"marketerspage_hero_subtitle1":/** @type {(inputs: Marketerspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch on-brand landing pages, interactive campaigns, and digital experiences without engineering bottlenecks.`)
},"marketerspage_meta_description1":/** @type {(inputs: Marketerspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create on-brand landing pages, tools, and campaign products in hours with Lovable's AI. Launch faster, iterate easily, and go live without dev tickets.`)
},"marketerspage_meta_title1":/** @type {(inputs: Marketerspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Tools for Marketers | Best No-Code App Builder for Marketers | Lovable`)
},"marketerspage_step1_description1":/** @type {(inputs: Marketerspage_Step1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch and update pages without engineering bottlenecks.`)
},"marketerspage_step1_title1":/** @type {(inputs: Marketerspage_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speed`)
},"marketerspage_step2_description1":/** @type {(inputs: Marketerspage_Step2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reuse design systems and components so every page stays on brand.`)
},"marketerspage_step2_title1":/** @type {(inputs: Marketerspage_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On-brand`)
},"marketerspage_step3_description1":/** @type {(inputs: Marketerspage_Step3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO-optimized pages designed to drive organic traffic.`)
},"marketerspage_step3_title1":/** @type {(inputs: Marketerspage_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO built-in`)
},"marketerspage_step4_description1":/** @type {(inputs: Marketerspage_Step4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control who can edit and publish so changes don't create risk.`)
},"marketerspage_step4_title1":/** @type {(inputs: Marketerspage_Step4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Governance`)
},"marketerspage_steps_subtitle1":/** @type {(inputs: Marketerspage_Steps_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build, test, and publish digital experiences, without waiting on engineering or cobbling together previous assets, all by just chatting to Lovable.`)
},"marketerspage_steps_title1":/** @type {(inputs: Marketerspage_Steps_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring campaign ideas to life without bottlenecks.`)
},"mcpview_publishpromptcta3":/** @type {(inputs: Mcpview_Publishpromptcta3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish app`)
},"mcpview_publishpromptdescription3":/** @type {(inputs: Mcpview_Publishpromptdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’ll be able to copy your MCP link once your app is live`)
},"mcpview_publishprompttitle3":/** @type {(inputs: Mcpview_Publishprompttitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish your app first`)
},"mcpview_unpublishedsectiondescription3":/** @type {(inputs: Mcpview_Unpublishedsectiondescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let AI tools access and use your Lovable app`)
},"mentiondropdown_assets1":/** @type {(inputs: Mentiondropdown_Assets1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assets`)
},"mentiondropdown_back1":/** @type {(inputs: Mentiondropdown_Back1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
},"mentiondropdown_code1":/** @type {(inputs: Mentiondropdown_Code1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
},"mentiondropdown_connectors1":/** @type {(inputs: Mentiondropdown_Connectors1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"mentiondropdown_filecount2":/** @type {(inputs: Mentiondropdown_Filecount2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} file`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} files`);
	return /** @type {LocalizedString} */ ("mentionDropdown_fileCount");
},"mentiondropdown_files1":/** @type {(inputs: Mentiondropdown_Files1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files`)
},"mentiondropdown_loading1":/** @type {(inputs: Mentiondropdown_Loading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"mentiondropdown_noaccessibleprojects3":/** @type {(inputs: Mentiondropdown_Noaccessibleprojects3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No accessible projects`)
},"mentiondropdown_nomatches2":/** @type {(inputs: Mentiondropdown_Nomatches2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matches found`)
},"mentiondropdown_nomatchingcode3":/** @type {(inputs: Mentiondropdown_Nomatchingcode3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching code files`)
},"mentiondropdown_nomatchingconnectors3":/** @type {(inputs: Mentiondropdown_Nomatchingconnectors3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No connectors available`)
},"mentiondropdown_nomatchingfiles3":/** @type {(inputs: Mentiondropdown_Nomatchingfiles3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching files`)
},"mentiondropdown_projects1":/** @type {(inputs: Mentiondropdown_Projects1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projects`)
},"mentiondropdown_projectsearchhint3":/** @type {(inputs: Mentiondropdown_Projectsearchhint3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type at least ${i?.count} characters to search projects`)
},"messagefeedbackdialog_additionallabel3":/** @type {(inputs: Messagefeedbackdialog_Additionallabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Additional feedback`)
},"messagefeedbackdialog_cancel2":/** @type {(inputs: Messagefeedbackdialog_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"messagefeedbackdialog_categorydesignoff4":/** @type {(inputs: Messagefeedbackdialog_Categorydesignoff4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design is off`)
},"messagefeedbackdialog_categoryforgotcontext4":/** @type {(inputs: Messagefeedbackdialog_Categoryforgotcontext4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot what I told it before`)
},"messagefeedbackdialog_categoryfunctionalitybroken4":/** @type {(inputs: Messagefeedbackdialog_Categoryfunctionalitybroken4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Functionality is broken`)
},"messagefeedbackdialog_categoryother3":/** @type {(inputs: Messagefeedbackdialog_Categoryother3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
},"messagefeedbackdialog_placeholder2":/** @type {(inputs: Messagefeedbackdialog_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This was not helpful because ...`)
},"messagefeedbackdialog_prompt2":/** @type {(inputs: Messagefeedbackdialog_Prompt2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please tell us why this response wasn't helpful to you.`)
},"messagefeedbackdialog_submit2":/** @type {(inputs: Messagefeedbackdialog_Submit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit`)
},"messagefeedbackdialog_title2":/** @type {(inputs: Messagefeedbackdialog_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help us improve`)
},"messagequeue_editingconflict2":/** @type {(inputs: Messagequeue_Editingconflict2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This message is currently being edited or processed`)
},"messagequeue_messagenotfound3":/** @type {(inputs: Messagequeue_Messagenotfound3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message not found`)
},"messagequeue_noactiveedit3":/** @type {(inputs: Messagequeue_Noactiveedit3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You don't have an active edit on this message`)
},"messagequeue_nopermissionmanagequeue4":/** @type {(inputs: Messagequeue_Nopermissionmanagequeue4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You don't have permission to manage the queue`)
},"messagequeue_nopermissionqueuemessages4":/** @type {(inputs: Messagequeue_Nopermissionqueuemessages4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You don't have permission to queue messages`)
},"messagequeue_pausefailed2":/** @type {(inputs: Messagequeue_Pausefailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to pause queue. Please try again`)
},"messagequeue_removemessagesfailed3":/** @type {(inputs: Messagequeue_Removemessagesfailed3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Failed to remove message from queue`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Failed to remove messages from queue`);
	return /** @type {LocalizedString} */ ("messageQueue_removeMessagesFailed");
},"messagequeue_reorderfailed2":/** @type {(inputs: Messagequeue_Reorderfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to reorder queue. Please try again.`)
},"messagequeue_repeatfailed2":/** @type {(inputs: Messagequeue_Repeatfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to repeat message. Please try again.`)
},"messagequeue_starteditingfailed3":/** @type {(inputs: Messagequeue_Starteditingfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to start editing. Please try again.`)
},"messagequeue_unpausefailed2":/** @type {(inputs: Messagequeue_Unpausefailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to unpause queue. Please try again`)
},"messagequeue_updatefailed2":/** @type {(inputs: Messagequeue_Updatefailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update message. Please try again.`)
},"metaappspage_announcement_badge2":/** @type {(inputs: Metaappspage_Announcement_Badge2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
},"metaappspage_announcement_label2":/** @type {(inputs: Metaappspage_Announcement_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Better SEO – Apps built to be found`)
},"metaappspage_costbox_subtitle3":/** @type {(inputs: Metaappspage_Costbox_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare the costs`)
},"metaappspage_hero_subtitle2":/** @type {(inputs: Metaappspage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bringing your ideas to life has never been this easy.`)
},"metaappspage_hero_title2":/** @type {(inputs: Metaappspage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your own apps for a fraction of the cost`)
},"metaappspage_meta_description2":/** @type {(inputs: Metaappspage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bringing your ideas to life has never been this easy.`)
},"metaappspage_meta_og_description2":/** @type {(inputs: Metaappspage_Meta_Og_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bringing your ideas to life has never been this easy.`)
},"metaappspage_meta_og_title2":/** @type {(inputs: Metaappspage_Meta_Og_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your own apps for a fraction of the cost | Lovable`)
},"metaappspage_meta_title2":/** @type {(inputs: Metaappspage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your own apps for a fraction of the cost | Lovable`)
},"metabrpage_hero_subtitle2":/** @type {(inputs: Metabrpage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter code BR-05-125 at checkout for 50% off Pro 100-credit plans`)
},"metabrpage_hero_title2":/** @type {(inputs: Metabrpage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your next big thing starts cheaper than you think. 50% off* month one.`)
},"metabrpage_meta_description2":/** @type {(inputs: Metabrpage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Pro subscribers in Brazil get 50% off the first monthly billing cycle with code REVSP-BR-083.`)
},"metabrpage_meta_og_description2":/** @type {(inputs: Metabrpage_Meta_Og_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redeem code REVSP-BR-083 for 50% off your first month of Pro.`)
},"metabrpage_meta_og_title2":/** @type {(inputs: Metabrpage_Meta_Og_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`50% Off Lovable Pro in Brazil`)
},"metabrpage_meta_title2":/** @type {(inputs: Metabrpage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`50% Off Lovable Pro | Brazil Offer`)
},"metabrpage_terms2":/** @type {(inputs: Metabrpage_Terms2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Available to new Pro subscribers in Brazil only. 50% discount applies to the first billing cycle of a new monthly 100-credit Pro subscription plan. This offer is not valid in conjunction with any other discount or promotion. Standard pricing applies from the second billing cycle onward. Offer valid until 30/6/2026 or while promotional capacity lasts. Lovable reserves the right to modify or withdraw this offer at any time in accordance with applicable law.`)
},"metalppage_cofounder_subtitle2":/** @type {(inputs: Metalppage_Cofounder_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours instead of months.`)
},"metalppage_cofounder_title2":/** @type {(inputs: Metalppage_Cofounder_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your AI cofounder and dev team`)
},"metalppage_faq1_answer2":/** @type {(inputs: Metalppage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you will not outgrow Lovable. Start building an MVP and scale to full production. Lovable creates a real database, real backend and real integrations. You always own your code and can connect to GitHub anytime.`)
},"metalppage_faq1_question2":/** @type {(inputs: Metalppage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Will I outgrow Lovable?`)
},"metalppage_faq2_answer2":/** @type {(inputs: Metalppage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable connects to all the tools you need to build a real business. Pull your ideas from Notion to build faster, build your app with a backend on Supabase for database and auth, connect your app to Stripe to enable payments, connect to n8n to access over 400+ tool integrations, or connect to Shopify to build an e-commerce business. Your app works with your existing stack from day one.`)
},"metalppage_faq2_question2":/** @type {(inputs: Metalppage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What tools does Lovable connect to?`)
},"metalppage_faq3_answer2":/** @type {(inputs: Metalppage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you don't need to know how to code. Build by describing what you want. But if you know code, you can dive into code mode anytime.`)
},"metalppage_faq3_question2":/** @type {(inputs: Metalppage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need to know how to code?`)
},"metalppage_faq4_answer2":/** @type {(inputs: Metalppage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, many founders and consultants use Lovable to ship client projects. You can fully export your project, which means you can deliver production-ready products that clients can own.`)
},"metalppage_faq4_question2":/** @type {(inputs: Metalppage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I use this for client work?`)
},"metalppage_faq5_answer2":/** @type {(inputs: Metalppage_Faq5_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you get stuck, Lovable helps you debug, suggests fixes, and keeps you moving. Lovable also has a <communityLink>community</communityLink> where you'll get support from other founders.`)
},"metalppage_faq5_question2":/** @type {(inputs: Metalppage_Faq5_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What if I get stuck?`)
},"metalppage_faq6_answer2":/** @type {(inputs: Metalppage_Faq6_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, team members or developers can collaborate or access the code of your product at any time. We offer GitHub sync from day one, and a modern tech stack (React + Supabase + Tailwind) that any developer can work with.`)
},"metalppage_faq6_question2":/** @type {(inputs: Metalppage_Faq6_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can my team take over later?`)
},"metalppage_faqtitle3":/** @type {(inputs: Metalppage_Faqtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"metalppage_feature1_description2":/** @type {(inputs: Metalppage_Feature1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chatting with Lovable is like talking with a developer. Describe your vision, drop in screenshots, or paste your Notion doc. Lovable takes it from there.`)
},"metalppage_feature1_title2":/** @type {(inputs: Metalppage_Feature1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build by describing what you want`)
},"metalppage_feature2_description2":/** @type {(inputs: Metalppage_Feature2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real backend with Lovable Cloud and Supabase gives you Postgres database, authentication, file storage, and real-time features. All auto-provisioned. Connect to 400+ tools via n8n - send emails, sync to your CRM, automate workflows. Add AI to your product with chatbots, image generation, and text analysis.`)
},"metalppage_feature2_title2":/** @type {(inputs: Metalppage_Feature2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Production infrastructure included`)
},"metalppage_feature3_description2":/** @type {(inputs: Metalppage_Feature3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tweak layouts, colors, and text with direct visual control. See changes instantly and bring your vision to life exactly as you imagined it.`)
},"metalppage_feature3_title2":/** @type {(inputs: Metalppage_Feature3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polish it to perfection`)
},"metalppage_feature4_description2":/** @type {(inputs: Metalppage_Feature4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build on industry-standard frameworks - React + Supabase + Tailwind - and sync to GitHub from day one. Your code, your repository, your rules.`)
},"metalppage_feature4_title2":/** @type {(inputs: Metalppage_Feature4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modern, standard tech stack`)
},"metalppage_feature5_description2":/** @type {(inputs: Metalppage_Feature5_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom domain, SEO optimization, and security scans are all handled. Go from idea to live project in the same day.`)
},"metalppage_feature5_title2":/** @type {(inputs: Metalppage_Feature5_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-click publish`)
},"metalppage_hero_cta2":/** @type {(inputs: Metalppage_Hero_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign up to start building`)
},"metalppage_hero_subtitle2":/** @type {(inputs: Metalppage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn ideas into working prototypes fast — validate concepts, visualize possibilities, and protect your time and budget.`)
},"metalppage_hero_title2":/** @type {(inputs: Metalppage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From an idea in your head to something you can test`)
},"metalppage_howitworks_subtitle4":/** @type {(inputs: Metalppage_Howitworks_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Four simple steps from sign-up to a live application`)
},"metalppage_howitworks_title4":/** @type {(inputs: Metalppage_Howitworks_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to get started`)
},"metalppage_meta_description2":/** @type {(inputs: Metalppage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn your idea into a working app in minutes. Sign in, describe what you want, and watch Lovable build it in real-time.`)
},"metalppage_meta_og_description2":/** @type {(inputs: Metalppage_Meta_Og_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn your idea into a working app in minutes. No coding required.`)
},"metalppage_meta_og_title2":/** @type {(inputs: Metalppage_Meta_Og_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get Started with Lovable`)
},"metalppage_meta_title2":/** @type {(inputs: Metalppage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get Started with Lovable | From Idea to App`)
},"metalppage_step1_description2":/** @type {(inputs: Metalppage_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In order to start building, we need to create a virtual folder where we save your projects. All your data is safe.`)
},"metalppage_step1_title2":/** @type {(inputs: Metalppage_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in with your email`)
},"metalppage_step2_description2":/** @type {(inputs: Metalppage_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell Lovable what you want to build in plain English. Be as detailed or as brief as you like.`)
},"metalppage_step2_title2":/** @type {(inputs: Metalppage_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe your idea`)
},"metalppage_step3_description2":/** @type {(inputs: Metalppage_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable writes the code, designs the UI, and assembles a working application in real-time.`)
},"metalppage_step3_title2":/** @type {(inputs: Metalppage_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Watch it build`)
},"metalppage_step4_description2":/** @type {(inputs: Metalppage_Step4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refine with follow-up prompts, add features, connect your backend, and publish when you're ready.`)
},"metalppage_step4_title2":/** @type {(inputs: Metalppage_Step4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iterate and ship`)
},"metalppage_stepscard_imagealt4":/** @type {(inputs: Metalppage_Stepscard_Imagealt4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable app builder interface`)
},"metalppage_testimonial1_cta2":/** @type {(inputs: Metalppage_Testimonial1_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From idea to impact: Yannis' journey with Lovable`)
},"metalppage_testimonial1_quote2":/** @type {(inputs: Metalppage_Testimonial1_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When Yannis hit a wall trying to customize newsletters for his marketing clients, he decided to build his own solution. Three days later, PrintPigeon was live—a micro-SaaS that solved his problem and turned into a revenue-generating product. No engineering team, no months of planning. Just a founder who saw a gap and filled it faster than he could have explained the problem to a dev shop.`)
},"metalppage_testimonial2_cta2":/** @type {(inputs: Metalppage_Testimonial2_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From idea to full-blown product in a month`)
},"metalppage_testimonial2_quote2":/** @type {(inputs: Metalppage_Testimonial2_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tom spent years helping people through holistic health coaching, but he had zero coding experience. When he realized his clients needed a better way to track their wellness journey, he built Elora Health in one month and launched it to real customers. The same people who used to ask “can you code?” now ask “how did you ship so fast?”`)
},"metalppage_testimonial3_cta2":/** @type {(inputs: Metalppage_Testimonial3_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How Plinq fights gender-based violence in Brazil`)
},"metalppage_testimonial3_quote2":/** @type {(inputs: Metalppage_Testimonial3_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Brazil, women needed a way to access public criminal data before meeting someone new—information that existed but wasn't easy to find. Sabrine, with no technical background, built Plinq to make that data accessible and help women stay safer. What started as a personal mission became an app with real social impact, built by someone who had never written a line of code.`)
},"metalppage_testimonials_title2":/** @type {(inputs: Metalppage_Testimonials_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real founders, real products, real results`)
},"metalppage_usecase_b2bsaas_description4":/** @type {(inputs: Metalppage_Usecase_B2bsaas_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build subscription platforms, workflow tools, and project management apps. Real auth, databases, and billing included.`)
},"metalppage_usecase_b2bsaas_title4":/** @type {(inputs: Metalppage_Usecase_B2bsaas_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`B2B SaaS`)
},"metalppage_usecase_clientprojects_description4":/** @type {(inputs: Metalppage_Usecase_Clientprojects_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship for clients faster with full code export. Agencies and freelancers use Lovable to deliver production-ready products.`)
},"metalppage_usecase_clientprojects_title4":/** @type {(inputs: Metalppage_Usecase_Clientprojects_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client projects`)
},"metalppage_usecase_consumerapps_description4":/** @type {(inputs: Metalppage_Usecase_Consumerapps_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch social platforms, community sites, and fitness apps with user profiles, feeds, and real-time interactions.`)
},"metalppage_usecase_consumerapps_title4":/** @type {(inputs: Metalppage_Usecase_Consumerapps_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consumer apps`)
},"metalppage_usecase_internaltools_description4":/** @type {(inputs: Metalppage_Usecase_Internaltools_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CRMs, admin panels, and analytics dashboards. Build and visualize what your team needs without waiting on developers.`)
},"metalppage_usecase_internaltools_title4":/** @type {(inputs: Metalppage_Usecase_Internaltools_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal tools & dashboards`)
},"metalppage_usecase_landingpages_description4":/** @type {(inputs: Metalppage_Usecase_Landingpages_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create company sites, portfolios, and waitlist pages with professional design. Custom domains and SEO built in.`)
},"metalppage_usecase_landingpages_title4":/** @type {(inputs: Metalppage_Usecase_Landingpages_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landing pages & websites`)
},"metalppage_usecase_marketplaces_description3":/** @type {(inputs: Metalppage_Usecase_Marketplaces_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create booking platforms, storefronts, and rental marketplaces. Payments, search, and user accounts all work out of the box.`)
},"metalppage_usecase_marketplaces_title3":/** @type {(inputs: Metalppage_Usecase_Marketplaces_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marketplaces & e-commerce`)
},"metalppage_usecases_subtitle3":/** @type {(inputs: Metalppage_Usecases_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start from your Notion docs. Connect to Stripe for payments, n8n for automations. Ship with the tools you already use.`)
},"metalppage_usecases_title3":/** @type {(inputs: Metalppage_Usecases_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dream it. Build it. Ship it.`)
},"metasavingresourcespage_costbox_lovable_cost4":/** @type {(inputs: Metasavingresourcespage_Costbox_Lovable_Cost4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free to start`)
},"metasavingresourcespage_costbox_lovable_description4":/** @type {(inputs: Metasavingresourcespage_Costbox_Lovable_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade for more credits for as little as $25/month.`)
},"metasavingresourcespage_costbox_lovable_label4":/** @type {(inputs: Metasavingresourcespage_Costbox_Lovable_Label4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable`)
},"metasavingresourcespage_costbox_subtitle4":/** @type {(inputs: Metasavingresourcespage_Costbox_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare the cost of getting a website built.`)
},"metasavingresourcespage_costbox_title4":/** @type {(inputs: Metasavingresourcespage_Costbox_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build for a fraction of the cost`)
},"metasavingresourcespage_costbox_traditional_cost4":/** @type {(inputs: Metasavingresourcespage_Costbox_Traditional_Cost4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`$10,000+`)
},"metasavingresourcespage_costbox_traditional_description4":/** @type {(inputs: Metasavingresourcespage_Costbox_Traditional_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hire developers, wait weeks, pay for every change.`)
},"metasavingresourcespage_costbox_traditional_label4":/** @type {(inputs: Metasavingresourcespage_Costbox_Traditional_Label4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The traditional way`)
},"metasavingresourcespage_hero_subtitle3":/** @type {(inputs: Metasavingresourcespage_Hero_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building websites has never been this easy and accessible.`)
},"metasavingresourcespage_hero_title3":/** @type {(inputs: Metasavingresourcespage_Hero_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your own website for a fraction of the cost with Lovable`)
},"metasavingresourcespage_meta_description3":/** @type {(inputs: Metasavingresourcespage_Meta_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building websites has never been this easy and accessible. Get started for free, upgrade for more credits from as little as $25.`)
},"metasavingresourcespage_meta_og_description3":/** @type {(inputs: Metasavingresourcespage_Meta_Og_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building websites has never been this easy and accessible. Get started for free, upgrade for more credits from as little as $25.`)
},"metasavingresourcespage_meta_og_title3":/** @type {(inputs: Metasavingresourcespage_Meta_Og_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your own website for a fraction of the cost with Lovable`)
},"metasavingresourcespage_meta_title3":/** @type {(inputs: Metasavingresourcespage_Meta_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create your own website for a fraction of the cost with Lovable`)
},"metauspage_hero_subtitle2":/** @type {(inputs: Metauspage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter code RVUS-062610 at checkout for 50% off Pro 100-credit plans`)
},"metauspage_hero_title2":/** @type {(inputs: Metauspage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your next big thing starts cheaper than you think. 50% off* month one.`)
},"metauspage_meta_description2":/** @type {(inputs: Metauspage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Pro subscribers in the US get 50% off the first monthly billing cycle with code RVUS-062610.`)
},"metauspage_meta_og_description2":/** @type {(inputs: Metauspage_Meta_Og_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redeem code RVUS-062610 for 50% off your first month of Pro.`)
},"metauspage_meta_og_title2":/** @type {(inputs: Metauspage_Meta_Og_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`50% Off Lovable Pro in the US`)
},"metauspage_meta_title2":/** @type {(inputs: Metauspage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`50% Off Lovable Pro | US Offer`)
},"metauspage_terms2":/** @type {(inputs: Metauspage_Terms2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`*Available to new Pro subscribers in the US only. 50% discount applies to the first billing cycle of a new monthly 100-credit Pro subscription plan. This offer is not valid in conjunction with any other discount or promotion. Standard pricing applies from the second billing cycle onward. Offer valid until 6/30/2026 or while promotional capacity lasts. Lovable reserves the right to modify or withdraw this offer at any time in accordance with applicable law.`)
},"mfasetup_authenticatorapp2":/** @type {(inputs: Mfasetup_Authenticatorapp2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authenticator app`)
},"mfasetup_cancel1":/** @type {(inputs: Mfasetup_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"mfasetup_captchafailed2":/** @type {(inputs: Mfasetup_Captchafailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verification check failed. Please try again.`)
},"mfasetup_codeexpired2":/** @type {(inputs: Mfasetup_Codeexpired2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code expired. Please request a new one.`)
},"mfasetup_codesent2":/** @type {(inputs: Mfasetup_Codesent2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verification code sent`)
},"mfasetup_configured1":/** @type {(inputs: Mfasetup_Configured1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configured`)
},"mfasetup_descriptionchooser2":/** @type {(inputs: Mfasetup_Descriptionchooser2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a method to add. You can add multiple methods.`)
},"mfasetup_descriptionphone2":/** @type {(inputs: Mfasetup_Descriptionphone2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add your phone number to receive 6‑digit codes via SMS.`)
},"mfasetup_descriptiontotp2":/** @type {(inputs: Mfasetup_Descriptiontotp2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan the QR code with your authenticator app, then enter the 6‑digit code.`)
},"mfasetup_enabled1":/** @type {(inputs: Mfasetup_Enabled1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two-factor authentication enabled`)
},"mfasetup_entercode2":/** @type {(inputs: Mfasetup_Entercode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the code`)
},"mfasetup_generating1":/** @type {(inputs: Mfasetup_Generating1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating...`)
},"mfasetup_hidemanualcode3":/** @type {(inputs: Mfasetup_Hidemanualcode3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide manual code`)
},"mfasetup_invalidcode2":/** @type {(inputs: Mfasetup_Invalidcode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid code. Try again`)
},"mfasetup_invalidphone2":/** @type {(inputs: Mfasetup_Invalidphone2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid phone number with country code`)
},"mfasetup_invalidphonenumber3":/** @type {(inputs: Mfasetup_Invalidphonenumber3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid phone number. Please check and try again.`)
},"mfasetup_invalidsixdigit3":/** @type {(inputs: Mfasetup_Invalidsixdigit3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid 6-digit code`)
},"mfasetup_manualcode2":/** @type {(inputs: Mfasetup_Manualcode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manual code?`)
},"mfasetup_manualentrykey3":/** @type {(inputs: Mfasetup_Manualentrykey3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manual entry key`)
},"mfasetup_phone1":/** @type {(inputs: Mfasetup_Phone1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phone`)
},"mfasetup_phonedescription2":/** @type {(inputs: Mfasetup_Phonedescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receive codes via SMS.`)
},"mfasetup_phonenumber2":/** @type {(inputs: Mfasetup_Phonenumber2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phone number`)
},"mfasetup_qrunavailable2":/** @type {(inputs: Mfasetup_Qrunavailable2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR unavailable`)
},"mfasetup_reauthandretry3":/** @type {(inputs: Mfasetup_Reauthandretry3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please reauthenticate and try again`)
},"mfasetup_recommended1":/** @type {(inputs: Mfasetup_Recommended1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recommended`)
},"mfasetup_sendcode2":/** @type {(inputs: Mfasetup_Sendcode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send code`)
},"mfasetup_sendfailed2":/** @type {(inputs: Mfasetup_Sendfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to send verification code. Please try again.`)
},"mfasetup_signinrequired3":/** @type {(inputs: Mfasetup_Signinrequired3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be signed in to enable 2FA`)
},"mfasetup_titlechooser2":/** @type {(inputs: Mfasetup_Titlechooser2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add two‑factor method`)
},"mfasetup_titlephone2":/** @type {(inputs: Mfasetup_Titlephone2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up phone`)
},"mfasetup_titletotp2":/** @type {(inputs: Mfasetup_Titletotp2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up authenticator app`)
},"mfasetup_toomanyrequests3":/** @type {(inputs: Mfasetup_Toomanyrequests3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many attempts. Please wait a few minutes before trying again.`)
},"mfasetup_totpdescription2":/** @type {(inputs: Mfasetup_Totpdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use an app to generate one‑time codes.`)
},"mfasetup_totpstartfailed3":/** @type {(inputs: Mfasetup_Totpstartfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to start TOTP enrollment`)
},"mfasetup_verificationnotready3":/** @type {(inputs: Mfasetup_Verificationnotready3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verification not ready. Please wait a moment and try again.`)
},"mfasetup_verifyandenable3":/** @type {(inputs: Mfasetup_Verifyandenable3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify & Enable`)
},"mfasetup_verifyfailed2":/** @type {(inputs: Mfasetup_Verifyfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to verify code`)
},"mfasetup_verifyfailedretry3":/** @type {(inputs: Mfasetup_Verifyfailedretry3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to verify code. Please try again.`)
},"modelselector_auto1":/** @type {(inputs: Modelselector_Auto1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`auto`)
},"navigation_academy":/** @type {(inputs: Navigation_AcademyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Academy`)
},"navigation_academydescription1":/** @type {(inputs: Navigation_Academydescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn to build with Lovable`)
},"navigation_announcement":/** @type {(inputs: Navigation_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement`)
},"navigation_announcementlink1":/** @type {(inputs: Navigation_Announcementlink1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"navigation_blog":/** @type {(inputs: Navigation_BlogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog`)
},"navigation_blogdescription1":/** @type {(inputs: Navigation_Blogdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ideas, updates, stories.`)
},"navigation_closenavigation1":/** @type {(inputs: Navigation_Closenavigation1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close navigation`)
},"navigation_community":/** @type {(inputs: Navigation_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
},"navigation_connectors":/** @type {(inputs: Navigation_ConnectorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"navigation_connectorsdescription1":/** @type {(inputs: Navigation_Connectorsdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build from what you already use.`)
},"navigation_designersaudience1":/** @type {(inputs: Navigation_Designersaudience1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Designers`)
},"navigation_designersdescription1":/** @type {(inputs: Navigation_Designersdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your designs, built.`)
},"navigation_docs":/** @type {(inputs: Navigation_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Docs`)
},"navigation_docsdescription1":/** @type {(inputs: Navigation_Docsdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything under the hood.`)
},"navigation_enterprise":/** @type {(inputs: Navigation_EnterpriseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise`)
},"navigation_foundersaudience1":/** @type {(inputs: Navigation_Foundersaudience1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Founders`)
},"navigation_foundersdescription1":/** @type {(inputs: Navigation_Foundersdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship before you pitch.`)
},"navigation_getstarted1":/** @type {(inputs: Navigation_Getstarted1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"navigation_guides":/** @type {(inputs: Navigation_GuidesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guides`)
},"navigation_guidesdescription1":/** @type {(inputs: Navigation_Guidesdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn as you build.`)
},"navigation_internaltools1":/** @type {(inputs: Navigation_Internaltools1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal tools`)
},"navigation_internaltoolsdescription2":/** @type {(inputs: Navigation_Internaltoolsdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built for your team.`)
},"navigation_login":/** @type {(inputs: Navigation_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
},"navigation_marketersaudience1":/** @type {(inputs: Navigation_Marketersaudience1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marketers`)
},"navigation_marketersdescription1":/** @type {(inputs: Navigation_Marketersdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch pages in minutes.`)
},"navigation_menu":/** @type {(inputs: Navigation_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Navigation menu`)
},"navigation_openlovable1":/** @type {(inputs: Navigation_Openlovable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Lovable`)
},"navigation_ops":/** @type {(inputs: Navigation_OpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ops`)
},"navigation_opsdescription1":/** @type {(inputs: Navigation_Opsdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools that fit your flow.`)
},"navigation_partners":/** @type {(inputs: Navigation_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partners`)
},"navigation_partnersdescription1":/** @type {(inputs: Navigation_Partnersdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build more together.`)
},"navigation_people":/** @type {(inputs: Navigation_PeopleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People`)
},"navigation_peopledescription1":/** @type {(inputs: Navigation_Peopledescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HR tools your team loves.`)
},"navigation_pricing":/** @type {(inputs: Navigation_PricingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pricing`)
},"navigation_productmanagersaudience2":/** @type {(inputs: Navigation_Productmanagersaudience2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product managers`)
},"navigation_productmanagersdescription2":/** @type {(inputs: Navigation_Productmanagersdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototype, don't spec.`)
},"navigation_prototyping":/** @type {(inputs: Navigation_PrototypingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototyping`)
},"navigation_prototypingdescription1":/** @type {(inputs: Navigation_Prototypingdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proof of concept in hours.`)
},"navigation_resources":/** @type {(inputs: Navigation_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resources`)
},"navigation_sales":/** @type {(inputs: Navigation_SalesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sales`)
},"navigation_salesdescription1":/** @type {(inputs: Navigation_Salesdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build the demo live.`)
},"navigation_security":/** @type {(inputs: Navigation_SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
},"navigation_solutions":/** @type {(inputs: Navigation_SolutionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solutions`)
},"navigation_templates":/** @type {(inputs: Navigation_TemplatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Templates`)
},"navigation_templatesdescription1":/** @type {(inputs: Navigation_Templatesdescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begin with a template.`)
},"navigation_usecases":/** @type {(inputs: Navigation_UsecasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use cases`)
},"navigation_whoisitfor3":/** @type {(inputs: Navigation_Whoisitfor3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who is it for?`)
},"opspage_faq1_answer1":/** @type {(inputs: Opspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can keep everything on brand by using shared components, styles, and reusable sections across pages, in addition to our design systems feature. Teams can standardize core layouts while still making campaign-specific edits.`)
},"opspage_faq1_question1":/** @type {(inputs: Opspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I keep everything on brand?`)
},"opspage_faq2_answer1":/** @type {(inputs: Opspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you do not need engineering. Marketing teams can draft, iterate, and publish independently, and involve engineering only for deeper integrations or advanced workflows.`)
},"opspage_faq2_question1":/** @type {(inputs: Opspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need engineering?`)
},"opspage_faq3_answer1":/** @type {(inputs: Opspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable works with common marketing integrations for analytics, tracking, and lead capture. Teams connect it to their CRM and analytics stack depending on how they measure performance and route form submissions. Learn more about our connectors <connectorsLink>here</connectorsLink>.`)
},"opspage_faq3_question1":/** @type {(inputs: Opspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What integrations work with Lovable?`)
},"opspage_faq4_answer1":/** @type {(inputs: Opspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable supports SEO fundamentals such as editable metadata and indexable pages. Teams can ship updates quickly while keeping pages structured for search and sharing.`)
},"opspage_faq4_question1":/** @type {(inputs: Opspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable support SEO?`)
},"opspage_faq5_answer1":/** @type {(inputs: Opspage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable can replace a CMS for many landing-page workflows, especially for campaigns that require frequent iteration. Some teams still keep a CMS for blogs or long-form publishing.`)
},"opspage_faq5_question1":/** @type {(inputs: Opspage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can Lovable replace our CMS for landing pages?`)
},"opspage_faq6_answer1":/** @type {(inputs: Opspage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing works through a draft-to-live workflow so teams can review changes before they go live. You can also restrict who has permission to publish.`)
},"opspage_faq6_question1":/** @type {(inputs: Opspage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does publishing work?`)
},"opspage_faq7_answer1":/** @type {(inputs: Opspage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable supports enterprise-grade controls such as role-based access and governed publishing workflows. Teams can limit who can edit, review, and publish.`)
},"opspage_faq7_question1":/** @type {(inputs: Opspage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable secure for enterprise teams?`)
},"opspage_faqtitle2":/** @type {(inputs: Opspage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"opspage_feature1_description1":/** @type {(inputs: Opspage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Track throughput, backlog, cycle time, and SLA performance in one view so stakeholders can self-serve status without recurring check-ins.`)
},"opspage_feature1_title1":/** @type {(inputs: Opspage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operational dashboards`)
},"opspage_feature2_description1":/** @type {(inputs: Opspage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capture requests in a structured queue, route them to the right owner, and track status from submission through completion.`)
},"opspage_feature2_title1":/** @type {(inputs: Opspage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intake and triage queues`)
},"opspage_feature3_description1":/** @type {(inputs: Opspage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardize approvals with required inputs, defined reviewers, and audit-ready status tracking—so decisions don't stall in threads.`)
},"opspage_feature3_title1":/** @type {(inputs: Opspage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approval workflows`)
},"opspage_feature4_description1":/** @type {(inputs: Opspage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish searchable runbooks and SOPs tied to real workflows, so execution is consistent even when teams change.`)
},"opspage_feature4_title1":/** @type {(inputs: Opspage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knowledge and runbooks`)
},"opspage_hero_cta1":/** @type {(inputs: Opspage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get a demo`)
},"opspage_hero_subtitle1":/** @type {(inputs: Opspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace status chasing with live dashboards and automated execution, built custom to you.`)
},"opspage_hero_titleline12":/** @type {(inputs: Opspage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automate workflows`)
},"opspage_hero_titleline22":/** @type {(inputs: Opspage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`and visualize data`)
},"opspage_meta_description1":/** @type {(inputs: Opspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace status chasing with live dashboards and automated execution, built custom to you.`)
},"opspage_meta_title1":/** @type {(inputs: Opspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automate workflows and visualize data with Lovable | Lovable`)
},"opspage_overhead_step1_description1":/** @type {(inputs: Opspage_Overhead_Step1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Route requests and trigger handoffs automatically as status changes.`)
},"opspage_overhead_step1_title1":/** @type {(inputs: Opspage_Overhead_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automation`)
},"opspage_overhead_step2_description1":/** @type {(inputs: Opspage_Overhead_Step2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardize decisions with required inputs, defined reviewers, and visible progress.`)
},"opspage_overhead_step2_title1":/** @type {(inputs: Opspage_Overhead_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approvals`)
},"opspage_overhead_step3_description1":/** @type {(inputs: Opspage_Overhead_Step3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monitor execution in dashboards without manual reporting.`)
},"opspage_overhead_step3_title1":/** @type {(inputs: Opspage_Overhead_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibility`)
},"opspage_overhead_subtitle1":/** @type {(inputs: Opspage_Overhead_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ops teams can route requests, standardize approvals, and track execution in dashboards, without relying on manual follow-ups across tools.`)
},"opspage_overhead_title1":/** @type {(inputs: Opspage_Overhead_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reduce operational coordination overhead`)
},"opspage_whatteamsbuild_title3":/** @type {(inputs: Opspage_Whatteamsbuild_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What Ops teams build with Lovable`)
},"paywall_cancel":/** @type {(inputs: Paywall_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"paywall_contactsales1":/** @type {(inputs: Paywall_Contactsales1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact sales`)
},"paywall_creditlimit_opensettings2":/** @type {(inputs: Paywall_Creditlimit_Opensettings2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open settings`)
},"paywall_dismiss":/** @type {(inputs: Paywall_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
},"paywall_featuregate_bizallowexternalcollaborators_subtitle4":/** @type {(inputs: Paywall_Featuregate_Bizallowexternalcollaborators_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allowing external collaborators is only available on Business plans.`)
},"paywall_featuregate_bizapploginmethods_subtitle4":/** @type {(inputs: Paywall_Featuregate_Bizapploginmethods_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuring app login methods is only available on Business plan and above.`)
},"paywall_featuregate_bizbrandedappurls_subtitle4":/** @type {(inputs: Paywall_Featuregate_Bizbrandedappurls_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace-branded app URLs are only available on Business plan and above.`)
},"paywall_featuregate_bizcloudspecificregions_subtitle4":/** @type {(inputs: Paywall_Featuregate_Bizcloudspecificregions_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinning a default region for new projects is only available on Business plan and above.`)
},"paywall_featuregate_bizconnectoradminsonly_subtitle4":/** @type {(inputs: Paywall_Featuregate_Bizconnectoradminsonly_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restricting connector creation to admins is only available on Business plan and above.`)
},"paywall_featuregate_bizdataoptout_subtitle4":/** @type {(inputs: Paywall_Featuregate_Bizdataoptout_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data collection opt-out is only available on Business plan and above.`)
},"paywall_featuregate_bizmcpservers_subtitle3":/** @type {(inputs: Paywall_Featuregate_Bizmcpservers_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP servers access is only available on Business plan and above.`)
},"paywall_featuregate_bizpersonalfolder_subtitle3":/** @type {(inputs: Paywall_Featuregate_Bizpersonalfolder_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal folders are only available on Business plan and above.`)
},"paywall_featuregate_bizpersonalproject_subtitle3":/** @type {(inputs: Paywall_Featuregate_Bizpersonalproject_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a business plan to make a project personal.`)
},"paywall_featuregate_bizsso_subtitle2":/** @type {(inputs: Paywall_Featuregate_Bizsso_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a business plan to add SSO providers.`)
},"paywall_featuregate_biztemplates_subtitle2":/** @type {(inputs: Paywall_Featuregate_Biztemplates_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a business plan to use templates.`)
},"paywall_featuregate_bizwebsiteaccess_subtitle3":/** @type {(inputs: Paywall_Featuregate_Bizwebsiteaccess_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a business plan to make published websites accessible only to logged in workspace members.`)
},"paywall_featuregate_bizworkspacediscovery_subtitle3":/** @type {(inputs: Paywall_Featuregate_Bizworkspacediscovery_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlling workspace discovery by email domain members is only available on Business plan and above.`)
},"paywall_featuregate_bizworkspaceview_subtitle3":/** @type {(inputs: Paywall_Featuregate_Bizworkspaceview_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a business plan to share a project with the workspace as view-only.`)
},"paywall_featuregate_description1":/** @type {(inputs: Paywall_Featuregate_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This feature is not available on your current plan. Visit lovable.dev to manage your account.`)
},"paywall_featuregate_enterprisedesignsystems_subtitle3":/** @type {(inputs: Paywall_Featuregate_Enterprisedesignsystems_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design systems are only available on Enterprise plans.`)
},"paywall_featuregate_enterprisedisablecodedownload_subtitle4":/** @type {(inputs: Paywall_Featuregate_Enterprisedisablecodedownload_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restricting code downloads is only available on Enterprise plans.`)
},"paywall_featuregate_enterprisedisablesharepreview_subtitle4":/** @type {(inputs: Paywall_Featuregate_Enterprisedisablesharepreview_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restricting public preview links is only available on Enterprise plans.`)
},"paywall_featuregate_enterpriseeditorcantransferproject_subtitle5":/** @type {(inputs: Paywall_Featuregate_Enterpriseeditorcantransferproject_Subtitle5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlling whether editors can transfer projects is only available on Enterprise plans.`)
},"paywall_featuregate_enterpriseegressfiltering_subtitle3":/** @type {(inputs: Paywall_Featuregate_Enterpriseegressfiltering_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Network egress filtering is only available on Enterprise plans.`)
},"paywall_featuregate_enterprisepiidatalabeling_subtitle4":/** @type {(inputs: Paywall_Featuregate_Enterprisepiidatalabeling_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PII scanning and data labeling is only available on Enterprise plans.`)
},"paywall_featuregate_enterprisepublishpermissionlevel_subtitle4":/** @type {(inputs: Paywall_Featuregate_Enterprisepublishpermissionlevel_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuring who can publish projects externally is only available on Enterprise plans.`)
},"paywall_featuregate_enterpriserequireworkspaceeditorforprojectediting_subtitle7":/** @type {(inputs: Paywall_Featuregate_Enterpriserequireworkspaceeditorforprojectediting_Subtitle7Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requiring workspace editor access for project editing is only available on Enterprise plans.`)
},"paywall_featuregate_enterpriserestrictinvitations_subtitle3":/** @type {(inputs: Paywall_Featuregate_Enterpriserestrictinvitations_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restricting workspace invitations is only available on Enterprise plans.`)
},"paywall_featuregate_enterprisescim_subtitle2":/** @type {(inputs: Paywall_Featuregate_Enterprisescim_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SCIM provisioning is only available on Enterprise plans.`)
},"paywall_featuregate_prochangeadminrole_subtitle4":/** @type {(inputs: Paywall_Featuregate_Prochangeadminrole_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to change the role to admin.`)
},"paywall_featuregate_prochangecloudinstancesize_subtitle5":/** @type {(inputs: Paywall_Featuregate_Prochangecloudinstancesize_Subtitle5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to change the cloud instance size.`)
},"paywall_featuregate_prochangecollaboratortoadmin_subtitle5":/** @type {(inputs: Paywall_Featuregate_Prochangecollaboratortoadmin_Subtitle5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to change a collaborator's role to admin.`)
},"paywall_featuregate_prochangecollaboratortoviewer_subtitle5":/** @type {(inputs: Paywall_Featuregate_Prochangecollaboratortoviewer_Subtitle5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to change a collaborator's role to viewer.`)
},"paywall_featuregate_prochangeviewerrole_subtitle4":/** @type {(inputs: Paywall_Featuregate_Prochangeviewerrole_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to change the role to viewer.`)
},"paywall_featuregate_procustommcp_subtitle3":/** @type {(inputs: Paywall_Featuregate_Procustommcp_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom MCP servers are available on Pro plan and above.`)
},"paywall_featuregate_prodomainconnect_subtitle3":/** @type {(inputs: Paywall_Featuregate_Prodomainconnect_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to connect a domain.`)
},"paywall_featuregate_prohidebadge_subtitle3":/** @type {(inputs: Paywall_Featuregate_Prohidebadge_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to hide the "Edit with Lovable" badge.`)
},"paywall_featuregate_proprojectmonitoring_subtitle3":/** @type {(inputs: Paywall_Featuregate_Proprojectmonitoring_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project monitoring is only available on Pro plan and above.`)
},"paywall_featuregate_prosendadmincollaborator_subtitle4":/** @type {(inputs: Paywall_Featuregate_Prosendadmincollaborator_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to invite admin collaborators.`)
},"paywall_featuregate_prosendadmininvite_subtitle4":/** @type {(inputs: Paywall_Featuregate_Prosendadmininvite_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to invite admins.`)
},"paywall_featuregate_prosendviewercollaborator_subtitle4":/** @type {(inputs: Paywall_Featuregate_Prosendviewercollaborator_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to invite viewer collaborators.`)
},"paywall_featuregate_prosendviewerinvite_subtitle4":/** @type {(inputs: Paywall_Featuregate_Prosendviewerinvite_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to invite viewers.`)
},"paywall_featuregate_prosupport_subtitle2":/** @type {(inputs: Paywall_Featuregate_Prosupport_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a paid plan to access direct support.`)
},"paywall_featuregate_proviewerinvitelink_subtitle4":/** @type {(inputs: Paywall_Featuregate_Proviewerinvitelink_Subtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be on a pro plan to create a viewer invite link.`)
},"paywall_featuregate_title1":/** @type {(inputs: Paywall_Featuregate_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature unavailable`)
},"paywall_featuregate_upgradetobusiness3":/** @type {(inputs: Paywall_Featuregate_Upgradetobusiness3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade to Business`)
},"paywall_featuregate_upgradetoenterprise3":/** @type {(inputs: Paywall_Featuregate_Upgradetoenterprise3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade to Enterprise`)
},"paywall_featuregate_upgradetopro3":/** @type {(inputs: Paywall_Featuregate_Upgradetopro3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade to Pro`)
},"paywall_loading":/** @type {(inputs: Paywall_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading`)
},"paywall_loadingellipsis1":/** @type {(inputs: Paywall_Loadingellipsis1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"paywall_outofcredits_buildingbig3":/** @type {(inputs: Paywall_Outofcredits_Buildingbig3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building something big?`)
},"paywall_outofcredits_creditrequiredsubtitle4":/** @type {(inputs: Paywall_Outofcredits_Creditrequiredsubtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This action is free and won't use any credits, but your account needs at least one credit available.`)
},"paywall_outofcredits_creditrequiredtitle4":/** @type {(inputs: Paywall_Outofcredits_Creditrequiredtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credit required`)
},"paywall_outofcredits_dailylimittitle4":/** @type {(inputs: Paywall_Outofcredits_Dailylimittitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily limit reached`)
},"paywall_outofcredits_description2":/** @type {(inputs: Paywall_Outofcredits_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've used all your available credits. Visit lovable.dev to manage your account.`)
},"paywall_outofcredits_freedailysubtitle4":/** @type {(inputs: Paywall_Outofcredits_Freedailysubtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've used today's free credits. Upgrade to keep building.`)
},"paywall_outofcredits_freemonthlysubtitle4":/** @type {(inputs: Paywall_Outofcredits_Freemonthlysubtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've used all your free credits this month. Upgrade to keep building.`)
},"paywall_outofcredits_legacydailysubtitle4":/** @type {(inputs: Paywall_Outofcredits_Legacydailysubtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your plan has daily limits. Upgrade to a modern plan with monthly credits.`)
},"paywall_outofcredits_loadfailed3":/** @type {(inputs: Paywall_Outofcredits_Loadfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't load the data needed to upgrade your workspace.`)
},"paywall_outofcredits_monthlylimittitle4":/** @type {(inputs: Paywall_Outofcredits_Monthlylimittitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monthly limit reached`)
},"paywall_outofcredits_needmorecredits4":/** @type {(inputs: Paywall_Outofcredits_Needmorecredits4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Need more credits?`)
},"paywall_outofcredits_nonownerdescription4":/** @type {(inputs: Paywall_Outofcredits_Nonownerdescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only workspace owners and admins can upgrade and add more credits. Send a ping and continue building.`)
},"paywall_outofcredits_nonownermobile4":/** @type {(inputs: Paywall_Outofcredits_Nonownermobile4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only workspace owners and admins can manage the account. Send a ping to notify them.`)
},"paywall_outofcredits_nonownermobileusagelimit6":/** @type {(inputs: Paywall_Outofcredits_Nonownermobileusagelimit6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've reached the usage limit of your current plan. Only workspace owners and admins can manage the account. Send a ping to notify them.`)
},"paywall_outofcredits_owner2":/** @type {(inputs: Paywall_Outofcredits_Owner2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Owner`)
},"paywall_outofcredits_ownernotified3":/** @type {(inputs: Paywall_Outofcredits_Ownernotified3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The workspace owner has been notified.`)
},"paywall_outofcredits_ownernotifieddetail4":/** @type {(inputs: Paywall_Outofcredits_Ownernotifieddetail4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The workspace owner has been notified about the credit shortage.`)
},"paywall_outofcredits_paidmonthlysubtitle4":/** @type {(inputs: Paywall_Outofcredits_Paidmonthlysubtitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've used your monthly credits. Add more to continue this month.`)
},"paywall_outofcredits_pingsent3":/** @type {(inputs: Paywall_Outofcredits_Pingsent3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ping sent!`)
},"paywall_outofcredits_pingsentbutton4":/** @type {(inputs: Paywall_Outofcredits_Pingsentbutton4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ping sent`)
},"paywall_outofcredits_reactivatesubtitle3":/** @type {(inputs: Paywall_Outofcredits_Reactivatesubtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace is inactive. Upgrade to continue building.`)
},"paywall_outofcredits_reactivatetitle3":/** @type {(inputs: Paywall_Outofcredits_Reactivatetitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactivate your workspace`)
},"paywall_outofcredits_refreshhelp3":/** @type {(inputs: Paywall_Outofcredits_Refreshhelp3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please refresh the page and try again. If the problem continues, contact our <support>Support</support>.`)
},"paywall_outofcredits_sendingping3":/** @type {(inputs: Paywall_Outofcredits_Sendingping3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sending...`)
},"paywall_outofcredits_sendping3":/** @type {(inputs: Paywall_Outofcredits_Sendping3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a ping`)
},"paywall_outofcredits_somethingwrong3":/** @type {(inputs: Paywall_Outofcredits_Somethingwrong3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong.`)
},"paywall_outofcredits_title2":/** @type {(inputs: Paywall_Outofcredits_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Out of credits`)
},"paywall_outofcredits_usagelimitreached4":/** @type {(inputs: Paywall_Outofcredits_Usagelimitreached4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage limit reached`)
},"paywall_outofcredits_workspaceoutofcredits5":/** @type {(inputs: Paywall_Outofcredits_Workspaceoutofcredits5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace out of credits`)
},"paywall_upgrade":/** @type {(inputs: Paywall_UpgradeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade`)
},"paywall_upgrade_addmorecredits2":/** @type {(inputs: Paywall_Upgrade_Addmorecredits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add more credits`)
},"paywall_upgrade_alreadyonplanhint3":/** @type {(inputs: Paywall_Upgrade_Alreadyonplanhint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're already on this plan.`)
},"paywall_upgrade_buycredits1":/** @type {(inputs: Paywall_Upgrade_Buycredits1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buy credits`)
},"paywall_upgrade_continuebuilding1":/** @type {(inputs: Paywall_Upgrade_Continuebuilding1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue building`)
},"paywall_upgrade_creditoptions1":/** @type {(inputs: Paywall_Upgrade_Creditoptions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credit options`)
},"paywall_upgrade_creditsamount1":/** @type {(inputs: Paywall_Upgrade_Creditsamount1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`+${i?.amount} credits`)
},"paywall_upgrade_creditspermonth2":/** @type {(inputs: Paywall_Upgrade_Creditspermonth2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.credits} credits/mo · ${i?.price}/mo`)
},"paywall_upgrade_currentplan1":/** @type {(inputs: Paywall_Upgrade_Currentplan1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current plan`)
},"paywall_upgrade_nextbillingcycle2":/** @type {(inputs: Paywall_Upgrade_Nextbillingcycle2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Next billing cycle ${i?.date}`)
},"paywall_upgrade_outofcreditsdescription3":/** @type {(inputs: Paywall_Upgrade_Outofcreditsdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've used all your credits for this period. Visit lovable.dev to manage your account.`)
},"paywall_upgrade_pricesare1":/** @type {(inputs: Paywall_Upgrade_Pricesare1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prices are ${i?.vatText}`)
},"paywall_upgrade_pricingloaderror2":/** @type {(inputs: Paywall_Upgrade_Pricingloaderror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to load pricing. Please try again later.`)
},"paywall_upgrade_processing":/** @type {(inputs: Paywall_Upgrade_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing...`)
},"paywall_upgrade_subscribesave1":/** @type {(inputs: Paywall_Upgrade_Subscribesave1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subscribe & save ${i?.percent}%`)
},"paywall_upgrade_topupcredits2":/** @type {(inputs: Paywall_Upgrade_Topupcredits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top up credits`)
},"paywall_upgrade_topupdescription2":/** @type {(inputs: Paywall_Upgrade_Topupdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Purchase credits on demand. Valid for 12 months.`)
},"paywall_upgrade_topuponlydescription3":/** @type {(inputs: Paywall_Upgrade_Topuponlydescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Purchase additional credits for your workspace`)
},"paywall_upgrade_upgradedescription1":/** @type {(inputs: Paywall_Upgrade_Upgradedescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade your plan for better value, or top up credits one time.`)
},"paywall_upgrade_upgradeplan1":/** @type {(inputs: Paywall_Upgrade_Upgradeplan1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade your plan`)
},"paywall_upgrade_upgradeplanbutton2":/** @type {(inputs: Paywall_Upgrade_Upgradeplanbutton2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade plan`)
},"paywall_upgrade_usagelimitdescription2":/** @type {(inputs: Paywall_Upgrade_Usagelimitdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've reached the usage limit of your current plan. Visit lovable.dev to manage your account.`)
},"paywall_upgradebutton_turnpro2":/** @type {(inputs: Paywall_Upgradebutton_Turnpro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn Pro`)
},"paywall_upgradeto1":/** @type {(inputs: Paywall_Upgradeto1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade to`)
},"paywall_upgradewall_requires1":/** @type {(inputs: Paywall_Upgradewall_Requires1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This feature requires ${i?.plan} plan. Visit lovable.dev to manage your account.`)
},"peoplepage_faq1_answer1":/** @type {(inputs: Peoplepage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable can connect to HRIS systems through APIs and webhooks. You can sync employee data, trigger workflows based on HRIS events, and keep information current without manual updates.`)
},"peoplepage_faq1_question1":/** @type {(inputs: Peoplepage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can Lovable connect to our HRIS?`)
},"peoplepage_faq2_answer1":/** @type {(inputs: Peoplepage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you do not need engineering. People teams can build and publish onboarding flows and resource hubs independently, involving engineers only for deep system integrations.`)
},"peoplepage_faq2_question1":/** @type {(inputs: Peoplepage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need engineering to build HR workflows?`)
},"peoplepage_faq3_answer1":/** @type {(inputs: Peoplepage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can build onboarding flows that include role selection, task sequencing, and progress tracking without third-party onboarding platforms.`)
},"peoplepage_faq3_question1":/** @type {(inputs: Peoplepage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I build employee onboarding flows with Lovable?`)
},"peoplepage_faq4_answer1":/** @type {(inputs: Peoplepage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can set role-based permissions to control access. Define who can view, edit, or publish employee resources, and restrict sensitive information to specific teams or individuals.`)
},"peoplepage_faq4_question1":/** @type {(inputs: Peoplepage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do we control who can see and edit employee information?`)
},"peoplepage_faq5_answer1":/** @type {(inputs: Peoplepage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can unify HR resources, guides, and workflows into a central internal page, functioning as a lightweight employee portal without replacing core intranet systems.`)
},"peoplepage_faq5_question1":/** @type {(inputs: Peoplepage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can Lovable replace our intranet or employee portal?`)
},"peoplepage_faq6_answer1":/** @type {(inputs: Peoplepage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable supports enterprise-grade controls such as role-based access and governed publishing workflows. Teams can limit who can edit, review, and publish.`)
},"peoplepage_faq6_question1":/** @type {(inputs: Peoplepage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable secure for enterprise teams?`)
},"peoplepage_faqtitle2":/** @type {(inputs: Peoplepage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"peoplepage_feature1_description1":/** @type {(inputs: Peoplepage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run onboarding as a tracked workflow. Assign owners, collect required documents, trigger approvals, and monitor completion from offer signed through first week.`)
},"peoplepage_feature1_title1":/** @type {(inputs: Peoplepage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onboarding workflows`)
},"peoplepage_feature2_description1":/** @type {(inputs: Peoplepage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Centralize employee information in one place. Publish policies, benefits, links, and FAQs in a searchable hub that stays current as teams and processes change.`)
},"peoplepage_feature2_title1":/** @type {(inputs: Peoplepage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Employee resource hubs`)
},"peoplepage_feature3_description1":/** @type {(inputs: Peoplepage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardize HR requests and approvals. Collect inputs, route to the right reviewers, and track status for requests like leave, title changes, and expense approvals.`)
},"peoplepage_feature3_title1":/** @type {(inputs: Peoplepage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approval and form workflows`)
},"peoplepage_feature4_description1":/** @type {(inputs: Peoplepage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make people metrics visible without manual reporting. Track onboarding progress, headcount changes, role distribution, and attrition indicators in a dashboard stakeholders can self-serve.`)
},"peoplepage_feature4_title1":/** @type {(inputs: Peoplepage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People metrics dashboards`)
},"peoplepage_feature5_description1":/** @type {(inputs: Peoplepage_Feature5_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a searchable org chart that stays current as teams change. Give employees a clear view of reporting lines, team structure, and ownership without relying on outdated slides or static docs.`)
},"peoplepage_feature5_title1":/** @type {(inputs: Peoplepage_Feature5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Org charts`)
},"peoplepage_features_title1":/** @type {(inputs: Peoplepage_Features_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What people teams build with Lovable`)
},"peoplepage_hero_cta1":/** @type {(inputs: Peoplepage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Book a demo`)
},"peoplepage_hero_newmember2":/** @type {(inputs: Peoplepage_Hero_Newmember2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New member`)
},"peoplepage_hero_onboarding1":/** @type {(inputs: Peoplepage_Hero_Onboarding1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onboarding`)
},"peoplepage_hero_subtitle1":/** @type {(inputs: Peoplepage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make onboarding, requests, and updates easy for you, and every employee.`)
},"peoplepage_hero_titleline12":/** @type {(inputs: Peoplepage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build employee`)
},"peoplepage_hero_titleline22":/** @type {(inputs: Peoplepage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`resource hubs`)
},"peoplepage_meta_description1":/** @type {(inputs: Peoplepage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make onboarding, requests, and updates easy for you, and every employee.`)
},"peoplepage_meta_title1":/** @type {(inputs: Peoplepage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build Employee Resource Hubs with Lovable | Lovable`)
},"peoplepage_scalability_step1_description1":/** @type {(inputs: Peoplepage_Scalability_Step1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run onboarding and HR processes with consistent steps, required inputs, and defined owners, so execution doesn't vary by team.`)
},"peoplepage_scalability_step1_title1":/** @type {(inputs: Peoplepage_Scalability_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardization`)
},"peoplepage_scalability_step2_description1":/** @type {(inputs: Peoplepage_Scalability_Step2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Track progress across onboarding, requests, and approvals in one place, so you can see what's blocked and what needs attention.`)
},"peoplepage_scalability_step2_title1":/** @type {(inputs: Peoplepage_Scalability_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibility`)
},"peoplepage_scalability_step3_description1":/** @type {(inputs: Peoplepage_Scalability_Step3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automate handoffs and reminders so tasks move forward without manual coordination.`)
},"peoplepage_scalability_step3_title1":/** @type {(inputs: Peoplepage_Scalability_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow-through`)
},"peoplepage_scalability_subtitle1":/** @type {(inputs: Peoplepage_Scalability_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People teams can standardize workflows, track status, and keep employee resources current, without running everything through docs and manual follow-ups.`)
},"peoplepage_scalability_title1":/** @type {(inputs: Peoplepage_Scalability_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make people ops scalable`)
},"piiwarning_blockedbody2":/** @type {(inputs: Piiwarning_Blockedbody2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace policy blocks sending sensitive data. Edit your message.`)
},"piiwarning_blockedbodyredactable3":/** @type {(inputs: Piiwarning_Blockedbodyredactable3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace policy blocks sending sensitive data. Edit your message or send a redacted version.`)
},"piiwarning_cancel1":/** @type {(inputs: Piiwarning_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"piiwarning_detectedbody2":/** @type {(inputs: Piiwarning_Detectedbody2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`We detected sensitive information. If you send the original, a finding is recorded in the project's ${i?.tab} for review.`)
},"piiwarning_edit1":/** @type {(inputs: Piiwarning_Edit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
},"piiwarning_fileexamples2":/** @type {(inputs: Piiwarning_Fileexamples2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Examples of the sensitive data found in your file:`)
},"piiwarning_redactedmessage2":/** @type {(inputs: Piiwarning_Redactedmessage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redacted message`)
},"piiwarning_scanningbody2":/** @type {(inputs: Piiwarning_Scanningbody2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking your attachments for sensitive information. This usually takes a few seconds.`)
},"piiwarning_scanningtitle2":/** @type {(inputs: Piiwarning_Scanningtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanning for sensitive data…`)
},"piiwarning_semanticdisabledhint3":/** @type {(inputs: Piiwarning_Semanticdisabledhint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semantically sensitive data can't be redacted. Remove it from the message.`)
},"piiwarning_sendoriginal2":/** @type {(inputs: Piiwarning_Sendoriginal2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send original`)
},"piiwarning_sendredacted2":/** @type {(inputs: Piiwarning_Sendredacted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send redacted`)
},"piiwarning_sensitivedatatab3":/** @type {(inputs: Piiwarning_Sensitivedatatab3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sensitive data tab`)
},"piiwarning_titleblocked2":/** @type {(inputs: Piiwarning_Titleblocked2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sensitive data not allowed`)
},"piiwarning_titledetected2":/** @type {(inputs: Piiwarning_Titledetected2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sensitive data detected`)
},"planmodetoggle_build2":/** @type {(inputs: Planmodetoggle_Build2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
},"planmodetoggle_builddescription3":/** @type {(inputs: Planmodetoggle_Builddescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make changes directly`)
},"planmodetoggle_chat2":/** @type {(inputs: Planmodetoggle_Chat2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat`)
},"planmodetoggle_comingsoon3":/** @type {(inputs: Planmodetoggle_Comingsoon3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coming soon`)
},"planmodetoggle_disableplanmode4":/** @type {(inputs: Planmodetoggle_Disableplanmode4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disable plan mode`)
},"planmodetoggle_enableplanmode4":/** @type {(inputs: Planmodetoggle_Enableplanmode4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable plan mode`)
},"planmodetoggle_feelingstuck3":/** @type {(inputs: Planmodetoggle_Feelingstuck3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feeling stuck?`)
},"planmodetoggle_gotit3":/** @type {(inputs: Planmodetoggle_Gotit3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Got it`)
},"planmodetoggle_plan2":/** @type {(inputs: Planmodetoggle_Plan2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan`)
},"planmodetoggle_plandescription3":/** @type {(inputs: Planmodetoggle_Plandescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discuss before building`)
},"planmodetoggle_stuckpopoverdescription4":/** @type {(inputs: Planmodetoggle_Stuckpopoverdescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use plan mode to create a plan before you build.`)
},"planmodetoggle_togglemultitask4":/** @type {(inputs: Planmodetoggle_Togglemultitask4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle multi-task`)
},"planmodetoggle_togglewith3":/** @type {(inputs: Planmodetoggle_Togglewith3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle with <kbd>alt P</kbd>`)
},"plusmenu_additionalactions2":/** @type {(inputs: Plusmenu_Additionalactions2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Additional actions`)
},"plusmenu_addsupabaseorganization3":/** @type {(inputs: Plusmenu_Addsupabaseorganization3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Supabase organization`)
},"plusmenu_appconnectors_heading2":/** @type {(inputs: Plusmenu_Appconnectors_Heading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Available app connectors`)
},"plusmenu_askadmintoreconnectsupabase5":/** @type {(inputs: Plusmenu_Askadmintoreconnectsupabase5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask an admin of your workspace to reconnect to Supabase`)
},"plusmenu_attach1":/** @type {(inputs: Plusmenu_Attach1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach`)
},"plusmenu_attachfile2":/** @type {(inputs: Plusmenu_Attachfile2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
},"plusmenu_autoenabledinchat4":/** @type {(inputs: Plusmenu_Autoenabledinchat4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-enabled in chat`)
},"plusmenu_checkprojectinsupabase4":/** @type {(inputs: Plusmenu_Checkprojectinsupabase4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check project status in Supabase`)
},"plusmenu_clicktoreconnectsupabase4":/** @type {(inputs: Plusmenu_Clicktoreconnectsupabase4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click to reconnect to Supabase`)
},"plusmenu_codebase1":/** @type {(inputs: Plusmenu_Codebase1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codebase`)
},"plusmenu_createlibraryproject3":/** @type {(inputs: Plusmenu_Createlibraryproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create library project`)
},"plusmenu_createproject2":/** @type {(inputs: Plusmenu_Createproject2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create project`)
},"plusmenu_databases1":/** @type {(inputs: Plusmenu_Databases1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Databases`)
},"plusmenu_design1":/** @type {(inputs: Plusmenu_Design1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design`)
},"plusmenu_designsystems2":/** @type {(inputs: Plusmenu_Designsystems2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design systems`)
},"plusmenu_editdesignsystem3":/** @type {(inputs: Plusmenu_Editdesignsystem3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit design system`)
},"plusmenu_figmadesigns2":/** @type {(inputs: Plusmenu_Figmadesigns2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Figma designs`)
},"plusmenu_lookingformore3":/** @type {(inputs: Plusmenu_Lookingformore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Looking for more`)
},"plusmenu_lovablecloud2":/** @type {(inputs: Plusmenu_Lovablecloud2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Cloud`)
},"plusmenu_manageconnectors2":/** @type {(inputs: Plusmenu_Manageconnectors2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage connectors`)
},"plusmenu_mcp_chatconnections2":/** @type {(inputs: Plusmenu_Mcp_Chatconnections2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat connections`)
},"plusmenu_mcp_localmcps2":/** @type {(inputs: Plusmenu_Mcp_Localmcps2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local MCPs`)
},"plusmenu_mcp_nochatconnections3":/** @type {(inputs: Plusmenu_Mcp_Nochatconnections3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No chat connections found`)
},"plusmenu_mcp_otherdevices2":/** @type {(inputs: Plusmenu_Mcp_Otherdevices2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other devices`)
},"plusmenu_mcp_thisdevice2":/** @type {(inputs: Plusmenu_Mcp_Thisdevice2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This device`)
},"plusmenu_mcp_thismac2":/** @type {(inputs: Plusmenu_Mcp_Thismac2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This Mac`)
},"plusmenu_nodesignsystemsfound4":/** @type {(inputs: Plusmenu_Nodesignsystemsfound4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No design systems found`)
},"plusmenu_noitemsfound3":/** @type {(inputs: Plusmenu_Noitemsfound3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No items found.`)
},"plusmenu_noprojects2":/** @type {(inputs: Plusmenu_Noprojects2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No projects`)
},"plusmenu_notworkspaceadmin3":/** @type {(inputs: Plusmenu_Notworkspaceadmin3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are not an admin of this workspace`)
},"plusmenu_selectdesignsystem3":/** @type {(inputs: Plusmenu_Selectdesignsystem3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select design system`)
},"plusmenu_supabase1":/** @type {(inputs: Plusmenu_Supabase1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase`)
},"plusmenu_useadesignsystem4":/** @type {(inputs: Plusmenu_Useadesignsystem4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a design system`)
},"plusmenu_useatemplate3":/** @type {(inputs: Plusmenu_Useatemplate3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a template`)
},"plusmenu_zippedfolder2":/** @type {(inputs: Plusmenu_Zippedfolder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zipped folder`)
},"previewdeviceselector_showdesktoppreview4":/** @type {(inputs: Previewdeviceselector_Showdesktoppreview4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show desktop preview`)
},"previewdeviceselector_showmobilepreview4":/** @type {(inputs: Previewdeviceselector_Showmobilepreview4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show mobile preview`)
},"previewdeviceselector_showtabletpreview4":/** @type {(inputs: Previewdeviceselector_Showtabletpreview4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show tablet preview`)
},"previewinteractiontoolbar_annotation2":/** @type {(inputs: Previewinteractiontoolbar_Annotation2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annotation`)
},"previewinteractiontoolbar_annotationcount3":/** @type {(inputs: Previewinteractiontoolbar_Annotationcount3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} annotation`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} annotations`);
	return /** @type {LocalizedString} */ ("previewInteractionToolbar_annotationCount");
},"previewinteractiontoolbar_backtopreview4":/** @type {(inputs: Previewinteractiontoolbar_Backtopreview4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Preview`)
},"previewinteractiontoolbar_canvas2":/** @type {(inputs: Previewinteractiontoolbar_Canvas2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canvas`)
},"previewinteractiontoolbar_capturingannotation3":/** @type {(inputs: Previewinteractiontoolbar_Capturingannotation3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capturing annotation...`)
},"previewinteractiontoolbar_clear2":/** @type {(inputs: Previewinteractiontoolbar_Clear2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
},"previewinteractiontoolbar_close2":/** @type {(inputs: Previewinteractiontoolbar_Close2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"previewinteractiontoolbar_describechangefor4":/** @type {(inputs: Previewinteractiontoolbar_Describechangefor4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Describe the change for ${i?.context}`)
},"previewinteractiontoolbar_describechangeplaceholder4":/** @type {(inputs: Previewinteractiontoolbar_Describechangeplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe the change...`)
},"previewinteractiontoolbar_dock2":/** @type {(inputs: Previewinteractiontoolbar_Dock2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dock`)
},"previewinteractiontoolbar_docktoolbar3":/** @type {(inputs: Previewinteractiontoolbar_Docktoolbar3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dock toolbar`)
},"previewinteractiontoolbar_exitvisualeditor4":/** @type {(inputs: Previewinteractiontoolbar_Exitvisualeditor4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exit visual editor`)
},"previewinteractiontoolbar_finishcapturingbeforeexiting5":/** @type {(inputs: Previewinteractiontoolbar_Finishcapturingbeforeexiting5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finish capturing the annotation before exiting.`)
},"previewinteractiontoolbar_hide2":/** @type {(inputs: Previewinteractiontoolbar_Hide2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide`)
},"previewinteractiontoolbar_minimize2":/** @type {(inputs: Previewinteractiontoolbar_Minimize2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimize`)
},"previewinteractiontoolbar_minimizetoolbar3":/** @type {(inputs: Previewinteractiontoolbar_Minimizetoolbar3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimize toolbar`)
},"previewinteractiontoolbar_pendingchanges3":/** @type {(inputs: Previewinteractiontoolbar_Pendingchanges3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending changes`)
},"previewinteractiontoolbar_preparingannotation3":/** @type {(inputs: Previewinteractiontoolbar_Preparingannotation3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparing annotation...`)
},"previewinteractiontoolbar_queue2":/** @type {(inputs: Previewinteractiontoolbar_Queue2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue`)
},"previewinteractiontoolbar_queueing2":/** @type {(inputs: Previewinteractiontoolbar_Queueing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queueing...`)
},"previewinteractiontoolbar_redo2":/** @type {(inputs: Previewinteractiontoolbar_Redo2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redo`)
},"previewinteractiontoolbar_removeannotationfromchat5":/** @type {(inputs: Previewinteractiontoolbar_Removeannotationfromchat5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove annotation from chat`)
},"previewinteractiontoolbar_saveordiscardbeforeleaving6":/** @type {(inputs: Previewinteractiontoolbar_Saveordiscardbeforeleaving6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save or discard changes before leaving visual mode`)
},"previewinteractiontoolbar_selectioncount3":/** @type {(inputs: Previewinteractiontoolbar_Selectioncount3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} selection`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} selections`);
	return /** @type {LocalizedString} */ ("previewInteractionToolbar_selectionCount");
},"previewinteractiontoolbar_send2":/** @type {(inputs: Previewinteractiontoolbar_Send2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send`)
},"previewinteractiontoolbar_sending2":/** @type {(inputs: Previewinteractiontoolbar_Sending2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sending...`)
},"previewinteractiontoolbar_sendingchanges3":/** @type {(inputs: Previewinteractiontoolbar_Sendingchanges3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sending changes...`)
},"previewinteractiontoolbar_shortcuts2":/** @type {(inputs: Previewinteractiontoolbar_Shortcuts2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shortcuts`)
},"previewinteractiontoolbar_showarialabel4":/** @type {(inputs: Previewinteractiontoolbar_Showarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show preview toolbar`)
},"previewinteractiontoolbar_textchanges3":/** @type {(inputs: Previewinteractiontoolbar_Textchanges3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text changes`)
},"previewinteractiontoolbar_theme2":/** @type {(inputs: Previewinteractiontoolbar_Theme2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme`)
},"previewinteractiontoolbar_themeauto3":/** @type {(inputs: Previewinteractiontoolbar_Themeauto3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto`)
},"previewinteractiontoolbar_themedark3":/** @type {(inputs: Previewinteractiontoolbar_Themedark3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
},"previewinteractiontoolbar_themelight3":/** @type {(inputs: Previewinteractiontoolbar_Themelight3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
},"previewinteractiontoolbar_typemessagetoqueue5":/** @type {(inputs: Previewinteractiontoolbar_Typemessagetoqueue5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type a message to queue`)
},"previewinteractiontoolbar_unavailableoncanvas4":/** @type {(inputs: Previewinteractiontoolbar_Unavailableoncanvas4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unavailable on Canvas for now`)
},"previewinteractiontoolbar_undo2":/** @type {(inputs: Previewinteractiontoolbar_Undo2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
},"previewinteractiontoolbar_unreadcomments3":/** @type {(inputs: Previewinteractiontoolbar_Unreadcomments3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`You have ${i?.count} unread comment`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`You have ${i?.count} unread comments`);
	return /** @type {LocalizedString} */ ("previewInteractionToolbar_unreadComments");
},"previewinteractiontoolbar_unreadcommentsarialabel5":/** @type {(inputs: Previewinteractiontoolbar_Unreadcommentsarialabel5Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} unread comment`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} unread comments`);
	return /** @type {LocalizedString} */ ("previewInteractionToolbar_unreadCommentsAriaLabel");
},"previewinteractiontoolbar_view2":/** @type {(inputs: Previewinteractiontoolbar_View2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
},"previewinteractiontoolbar_waitforchangesbeforeexiting6":/** @type {(inputs: Previewinteractiontoolbar_Waitforchangesbeforeexiting6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wait for changes to finish sending before exiting.`)
},"pricingpage_education_individual_cta1":/** @type {(inputs: Pricingpage_Education_Individual_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"pricingpage_education_institutions_cta1":/** @type {(inputs: Pricingpage_Education_Institutions_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact sales`)
},"pricingpage_education_institutions_description1":/** @type {(inputs: Pricingpage_Education_Institutions_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Billing and administrative controls for universities and colleges.`)
},"pricingpage_education_institutions_title1":/** @type {(inputs: Pricingpage_Education_Institutions_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for campus`)
},"pricingpage_education_k12_cta1":/** @type {(inputs: Pricingpage_Education_K12_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"pricingpage_education_k12_description1":/** @type {(inputs: Pricingpage_Education_K12_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compliant access & curriculum for schools in partnership with imagi.`)
},"pricingpage_education_k12_title1":/** @type {(inputs: Pricingpage_Education_K12_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for kids`)
},"pricingpage_faq_a11":/** @type {(inputs: Pricingpage_Faq_A11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is an AI software engineer, which enables anyone to build for the web. Simply chat to instantly build websites and web apps, with no technical knowledge needed.`)
},"pricingpage_faq_a2_free1":/** @type {(inputs: Pricingpage_Faq_A2_Free1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The free plan includes a daily grant of 5 build credits (up to 30 a month), plus monthly grants of 20 Cloud credits. The free plan also grants 4 credits usable by AI features built into user apps, to try the feature before subscribing.`)
},"pricingpage_faq_a2_intro1":/** @type {(inputs: Pricingpage_Faq_A2_Intro1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starting to build on Lovable is free.`)
},"pricingpage_faq_a2_subscription1":/** @type {(inputs: Pricingpage_Faq_A2_Subscription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paid subscribers get their plan's credits added to their balance monthly. This balance can be used flexibly to cover building, Cloud, and AI features in user apps. On top, subscriptions include daily grants of 5 build credits and a monthly grant of 20 Cloud credits.`)
},"pricingpage_faq_a3_buildintro2":/** @type {(inputs: Pricingpage_Faq_A3_Buildintro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For building, pricing varies by mode:`)
},"pricingpage_faq_a3_chatmode2":/** @type {(inputs: Pricingpage_Faq_A3_Chatmode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan Mode:`)
},"pricingpage_faq_a3_chatmodedesc3":/** @type {(inputs: Pricingpage_Faq_A3_Chatmodedesc3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 credit per message`)
},"pricingpage_faq_a3_defaultmode2":/** @type {(inputs: Pricingpage_Faq_A3_Defaultmode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Default Mode:`)
},"pricingpage_faq_a3_defaultmodedesc3":/** @type {(inputs: Pricingpage_Faq_A3_Defaultmodedesc3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`credits vary based on task complexity`)
},"pricingpage_faq_a3_example1prompt2":/** @type {(inputs: Pricingpage_Faq_A3_Example1prompt2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make the button gray`)
},"pricingpage_faq_a3_example1work2":/** @type {(inputs: Pricingpage_Faq_A3_Example1work2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates the button styles`)
},"pricingpage_faq_a3_example2prompt2":/** @type {(inputs: Pricingpage_Faq_A3_Example2prompt2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the footer`)
},"pricingpage_faq_a3_example2work2":/** @type {(inputs: Pricingpage_Faq_A3_Example2work2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removes the footer component`)
},"pricingpage_faq_a3_example3prompt2":/** @type {(inputs: Pricingpage_Faq_A3_Example3prompt2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add authentication with sign up and login`)
},"pricingpage_faq_a3_example3work2":/** @type {(inputs: Pricingpage_Faq_A3_Example3work2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adds authentication pages and logic, updates routes`)
},"pricingpage_faq_a3_example4prompt2":/** @type {(inputs: Pricingpage_Faq_A3_Example4prompt2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build me a landing page, use images`)
},"pricingpage_faq_a3_example4work2":/** @type {(inputs: Pricingpage_Faq_A3_Example4work2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creates a landing page with 3 generated images, theme, and 5 sections`)
},"pricingpage_faq_a3_exampleintro2":/** @type {(inputs: Pricingpage_Faq_A3_Exampleintro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Here are some example prompts and their cost:`)
},"pricingpage_faq_a3_grants1":/** @type {(inputs: Pricingpage_Faq_A3_Grants1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In addition to your credit balance, Pro and Business subscriptions include grants for building and hosting with Cloud.`)
},"pricingpage_faq_a3_intro1":/** @type {(inputs: Pricingpage_Faq_A3_Intro1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paid plans have access to a credit balance. Credits from your balance can be used in Lovable for building by sending messages to Lovable, hosting with Cloud, and offering AI features to users as part of your app.`)
},"pricingpage_faq_a3_tableheadercredits3":/** @type {(inputs: Pricingpage_Faq_A3_Tableheadercredits3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits`)
},"pricingpage_faq_a3_tableheaderprompt3":/** @type {(inputs: Pricingpage_Faq_A3_Tableheaderprompt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User Prompt`)
},"pricingpage_faq_a3_tableheaderwork3":/** @type {(inputs: Pricingpage_Faq_A3_Tableheaderwork3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Work Done`)
},"pricingpage_faq_a3_viewcost2":/** @type {(inputs: Pricingpage_Faq_A3_Viewcost2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can see the cost of each message in the message history by hovering over the three dots of an message.`)
},"pricingpage_faq_a3_viewcostalt3":/** @type {(inputs: Pricingpage_Faq_A3_Viewcostalt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View credits cost on each message`)
},"pricingpage_faq_a51":/** @type {(inputs: Pricingpage_Faq_A51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You do. You own your code, which means the apps, websites, and other projects you build with Lovable, customer data stored in Lovable, as well as any AI output you generate in Lovable. (This is subject to any third-party rights in the underlying AI models.)`)
},"pricingpage_faq_a81":/** @type {(inputs: Pricingpage_Faq_A81Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, we offer a student discount for students with a valid student email. You can read more and claim your discount on <link>lovable.dev/students</link>. Make sure you are logged in with your university email address.`)
},"pricingpage_faq_a91":/** @type {(inputs: Pricingpage_Faq_A91Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the community on <discord>Discord</discord> or read up more on our <docs>documentation</docs>.`)
},"pricingpage_faq_a_businesscost_features2":/** @type {(inputs: Pricingpage_Faq_A_Businesscost_Features2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The higher price reflects the additional features Business adds on top of Pro for teams and larger organizations.`)
},"pricingpage_faq_a_businesscost_usage2":/** @type {(inputs: Pricingpage_Faq_A_Businesscost_Usage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Important: The cost for running their app and for AI features built into apps is the same for Business and Pro subscribers and not more expensive on the business plan. Since credits are priced higher on business plans, user who switch from Pro to Business plans will therefore see a decrease in credit usage for Run and AI cost in plan usage details.`)
},"pricingpage_faq_a_cloudcost_intro2":/** @type {(inputs: Pricingpage_Faq_A_Cloudcost_Intro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For most users with smaller or new apps, hosting (running an app on Lovable) does not cost anything: In most cases, the cost to publish, view, and keep your app running will be minimal and fully covered by the included grant that comes with your subscription.`)
},"pricingpage_faq_a_cloudcost_readmore3":/** @type {(inputs: Pricingpage_Faq_A_Cloudcost_Readmore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`<link>Learn more here</link>`)
},"pricingpage_faq_a_cloudcost_traffic2":/** @type {(inputs: Pricingpage_Faq_A_Cloudcost_Traffic2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apps that reach significant visitor traffic and/or size may start incurring cost on top of the included grant, which is covered by your credit balance.`)
},"pricingpage_faq_a_creditexpiry2":/** @type {(inputs: Pricingpage_Faq_A_Creditexpiry2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. If unused, monthly plan credits expire two (2) months after they're issued, and annual plan credits expire one (1) month after your annual period ends. Top-up credits last twelve (12) months from purchase. Included grants of daily build credits expire at the end of each day and don't roll over.`)
},"pricingpage_faq_a_creditrefund2":/** @type {(inputs: Pricingpage_Faq_A_Creditrefund2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Credits aren't refundable or redeemable for cash or any other value.`)
},"pricingpage_faq_a_credittermination2":/** @type {(inputs: Pricingpage_Faq_A_Credittermination2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you cancel your plan, you can keep using your remaining credits until the end of your current billing period. After that, your plan switches to Free and you only have access to grants included in the free plan. If your workspace has unused paid credits left, they will reactivate if you re-subscribe to any plan at any point before expiry.`)
},"pricingpage_faq_a_creditterminationfraud3":/** @type {(inputs: Pricingpage_Faq_A_Creditterminationfraud3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In very rare instances we had to close user accounts due to fraud or other breach of our Terms. In such cases, any remaining credits are deleted, unless otherwise required by the law.`)
},"pricingpage_faq_a_creditwhatis3":/** @type {(inputs: Pricingpage_Faq_A_Creditwhatis3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits are units Lovable uses to measure and pay for usage across your workspace. Credits let you build apps, run deployed apps, and power AI features from one balance. The value of a credit and the rate at which they are consumed for a given action depend on your subscription plan and the feature used, and credits are not necessarily equal in value across different plans.`)
},"pricingpage_faq_q11":/** @type {(inputs: Pricingpage_Faq_Q11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is Lovable and how does it work?`)
},"pricingpage_faq_q21":/** @type {(inputs: Pricingpage_Faq_Q21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is included in free and paid plans?`)
},"pricingpage_faq_q31":/** @type {(inputs: Pricingpage_Faq_Q31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I use credits in Lovable?`)
},"pricingpage_faq_q51":/** @type {(inputs: Pricingpage_Faq_Q51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who owns the projects and code?`)
},"pricingpage_faq_q81":/** @type {(inputs: Pricingpage_Faq_Q81Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do you offer a student discount?`)
},"pricingpage_faq_q91":/** @type {(inputs: Pricingpage_Faq_Q91Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where can I find out more?`)
},"pricingpage_faq_q_businesscost2":/** @type {(inputs: Pricingpage_Faq_Q_Businesscost2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why is the Business plan more expensive?`)
},"pricingpage_faq_q_cloudcost2":/** @type {(inputs: Pricingpage_Faq_Q_Cloudcost2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How much does it cost to run my app on Lovable?`)
},"pricingpage_faq_q_creditexpiry2":/** @type {(inputs: Pricingpage_Faq_Q_Creditexpiry2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do credits expire?`)
},"pricingpage_faq_q_creditrefund2":/** @type {(inputs: Pricingpage_Faq_Q_Creditrefund2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are credits refundable?`)
},"pricingpage_faq_q_credittermination2":/** @type {(inputs: Pricingpage_Faq_Q_Credittermination2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What happens to my credits if my subscription ends?`)
},"pricingpage_faq_q_creditwhatis3":/** @type {(inputs: Pricingpage_Faq_Q_Creditwhatis3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is a credit?`)
},"pricingpage_faq_relatedplanscredits3":/** @type {(inputs: Pricingpage_Faq_Relatedplanscredits3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plans and credits`)
},"pricingpage_faq_relatedtitle2":/** @type {(inputs: Pricingpage_Faq_Relatedtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Related articles`)
},"pricingpage_faq_title1":/** @type {(inputs: Pricingpage_Faq_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"pricingpage_giftcards_description2":/** @type {(inputs: Pricingpage_Giftcards_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a gift card to your friends.`)
},"pricingpage_giftcards_imagealt3":/** @type {(inputs: Pricingpage_Giftcards_Imagealt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gift cards`)
},"pricingpage_giftcards_seeall3":/** @type {(inputs: Pricingpage_Giftcards_Seeall3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See all gift cards`)
},"pricingpage_giftcards_title2":/** @type {(inputs: Pricingpage_Giftcards_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gift cards`)
},"pricingpage_heading1":/** @type {(inputs: Pricingpage_Heading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pricing`)
},"pricingpage_meta_description1":/** @type {(inputs: Pricingpage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare Lovable's transparent pricing plans for individuals and teams. Choose the right option to build apps, internal tools, and prototypes faster.`)
},"pricingpage_meta_title1":/** @type {(inputs: Pricingpage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Pricing`)
},"pricingpage_securitybadges_description2":/** @type {(inputs: Pricingpage_Securitybadges_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise-grade security and compliance certifications`)
},"pricingpage_securitybadges_learnmore3":/** @type {(inputs: Pricingpage_Securitybadges_Learnmore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"pricingpage_securitybadges_title2":/** @type {(inputs: Pricingpage_Securitybadges_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security and compliance`)
},"pricingpage_studentdiscount_description2":/** @type {(inputs: Pricingpage_Studentdiscount_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify student status and get access to up to 50% off Lovable Pro.`)
},"pricingpage_studentdiscount_title2":/** @type {(inputs: Pricingpage_Studentdiscount_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for students`)
},"pricingpage_subtitle1":/** @type {(inputs: Pricingpage_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start for free. Upgrade to get the capacity that exactly matches your team's needs.`)
},"pricingplans_additionalcredits2":/** @type {(inputs: Pricingplans_Additionalcredits2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`+${i?.amount} additional credits`)
},"pricingplans_additionalcreditstyped3":/** @type {(inputs: Pricingplans_Additionalcreditstyped3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`+${i?.amount} additional ${i?.planName} credits`)
},"pricingplans_allbusinessfeatures3":/** @type {(inputs: Pricingplans_Allbusinessfeatures3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Business features`)
},"pricingplans_allfreefeatures3":/** @type {(inputs: Pricingplans_Allfreefeatures3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Free features`)
},"pricingplans_allprofeatures3":/** @type {(inputs: Pricingplans_Allprofeatures3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Pro features`)
},"pricingplans_annualsavingshint3":/** @type {(inputs: Pricingplans_Annualsavingshint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 months free`)
},"pricingplans_billedannually2":/** @type {(inputs: Pricingplans_Billedannually2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`billed annually`)
},"pricingplans_bookdemo2":/** @type {(inputs: Pricingplans_Bookdemo2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Book a demo`)
},"pricingplans_business_designtemplates2":/** @type {(inputs: Pricingplans_Business_Designtemplates2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design templates`)
},"pricingplans_business_includedgrantstooltip3":/** @type {(inputs: Pricingplans_Business_Includedgrantstooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 credits to build (daily)
4 credits for AI (monthly)
20 credits for Cloud (monthly)`)
},"pricingplans_business_internalpublish2":/** @type {(inputs: Pricingplans_Business_Internalpublish2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal publish`)
},"pricingplans_business_internalpublishtooltip3":/** @type {(inputs: Pricingplans_Business_Internalpublishtooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish websites that are only accessible to logged in workspace members.`)
},"pricingplans_business_monthlycredits2":/** @type {(inputs: Pricingplans_Business_Monthlycredits2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} monthly credits`)
},"pricingplans_business_monthlycreditstooltip3":/** @type {(inputs: Pricingplans_Business_Monthlycreditstooltip3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} credits per month + 5 daily credits that reset each day`)
},"pricingplans_business_personalprojects2":/** @type {(inputs: Pricingplans_Business_Personalprojects2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal projects`)
},"pricingplans_business_personalprojectstooltip3":/** @type {(inputs: Pricingplans_Business_Personalprojectstooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projects that are not visible to other members in your workspace.`)
},"pricingplans_business_prioritysupport2":/** @type {(inputs: Pricingplans_Business_Prioritysupport2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priority support`)
},"pricingplans_business_rolebasedaccess3":/** @type {(inputs: Pricingplans_Business_Rolebasedaccess3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Role-based access`)
},"pricingplans_business_securitycenter2":/** @type {(inputs: Pricingplans_Business_Securitycenter2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security center`)
},"pricingplans_business_sso1":/** @type {(inputs: Pricingplans_Business_Sso1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSO`)
},"pricingplans_business_teamworkspace2":/** @type {(inputs: Pricingplans_Business_Teamworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team workspace`)
},"pricingplans_business_title1":/** @type {(inputs: Pricingplans_Business_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advanced controls and power features for growing departments`)
},"pricingplans_businesscreditselectlabel4":/** @type {(inputs: Pricingplans_Businesscreditselectlabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Business credits`)
},"pricingplans_businesscreditswithlimit4":/** @type {(inputs: Pricingplans_Businesscreditswithlimit4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`<count>${i?.limit}</count> Business credits`)
},"pricingplans_contactadmin2":/** @type {(inputs: Pricingplans_Contactadmin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact admin`)
},"pricingplans_contactadmintooltip3":/** @type {(inputs: Pricingplans_Contactadmintooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be a workspace admin to manage plans`)
},"pricingplans_creditsdropdownlabel3":/** @type {(inputs: Pricingplans_Creditsdropdownlabel3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} credits`)
},"pricingplans_creditsshort2":/** @type {(inputs: Pricingplans_Creditsshort2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`<count>${i?.limit}</count> credits`)
},"pricingplans_currentpill2":/** @type {(inputs: Pricingplans_Currentpill2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current`)
},"pricingplans_custom1":/** @type {(inputs: Pricingplans_Custom1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform fee`)
},"pricingplans_dailycreditsnocap4":/** @type {(inputs: Pricingplans_Dailycreditsnocap4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.daily} daily credits`)
},"pricingplans_dailycreditswithcap4":/** @type {(inputs: Pricingplans_Dailycreditswithcap4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.daily} daily credits (up to ${i?.monthly}/month)`)
},"pricingplans_downgrade1":/** @type {(inputs: Pricingplans_Downgrade1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downgrade`)
},"pricingplans_downgradecontactus3":/** @type {(inputs: Pricingplans_Downgradecontactus3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downgrade (Contact us)`)
},"pricingplans_enterprise_auditlogs2":/** @type {(inputs: Pricingplans_Enterprise_Auditlogs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit logs`)
},"pricingplans_enterprise_customconnectors2":/** @type {(inputs: Pricingplans_Enterprise_Customconnectors2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support for custom connectors`)
},"pricingplans_enterprise_customfunctionalitycontact3":/** @type {(inputs: Pricingplans_Enterprise_Customfunctionalitycontact3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For additional or custom enterprise functionality, contact our team directly.`)
},"pricingplans_enterprise_dedicatedsupport2":/** @type {(inputs: Pricingplans_Enterprise_Dedicatedsupport2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated support`)
},"pricingplans_enterprise_designsystems2":/** @type {(inputs: Pricingplans_Enterprise_Designsystems2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design systems`)
},"pricingplans_enterprise_onboarding1":/** @type {(inputs: Pricingplans_Enterprise_Onboarding1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onboarding services`)
},"pricingplans_enterprise_publishingcontrols2":/** @type {(inputs: Pricingplans_Enterprise_Publishingcontrols2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing controls`)
},"pricingplans_enterprise_scim1":/** @type {(inputs: Pricingplans_Enterprise_Scim1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SCIM`)
},"pricingplans_enterprise_sharingcontrols2":/** @type {(inputs: Pricingplans_Enterprise_Sharingcontrols2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sharing controls`)
},"pricingplans_enterprise_title1":/** @type {(inputs: Pricingplans_Enterprise_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built for large orgs needing flexibility, scale, and governance.`)
},"pricingplans_enterprise_volumebasedcreditpricing4":/** @type {(inputs: Pricingplans_Enterprise_Volumebasedcreditpricing4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volume-based credit pricing`)
},"pricingplans_free_communitysupport2":/** @type {(inputs: Pricingplans_Free_Communitysupport2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community support`)
},"pricingplans_free_feature21":/** @type {(inputs: Pricingplans_Free_Feature21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace-private projects`)
},"pricingplans_free_feature31":/** @type {(inputs: Pricingplans_Free_Feature31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlimited collaborators`)
},"pricingplans_free_feature41":/** @type {(inputs: Pricingplans_Free_Feature41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 lovable.app domains`)
},"pricingplans_free_feature51":/** @type {(inputs: Pricingplans_Free_Feature51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cloud`)
},"pricingplans_free_includedgrantstooltip3":/** @type {(inputs: Pricingplans_Free_Includedgrantstooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 credits to build (daily, up to 30 per month)
4 credits for AI (monthly)
20 credits for Cloud (monthly)`)
},"pricingplans_free_title1":/** @type {(inputs: Pricingplans_Free_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover what Lovable can do for you`)
},"pricingplans_freegrantslabel3":/** @type {(inputs: Pricingplans_Freegrantslabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free grants`)
},"pricingplans_getstarted2":/** @type {(inputs: Pricingplans_Getstarted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"pricingplans_lite_feature11":/** @type {(inputs: Pricingplans_Lite_Feature11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 daily credits`)
},"pricingplans_lite_feature21":/** @type {(inputs: Pricingplans_Lite_Feature21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User roles & permissions`)
},"pricingplans_lite_feature31":/** @type {(inputs: Pricingplans_Lite_Feature31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom domains`)
},"pricingplans_lite_feature41":/** @type {(inputs: Pricingplans_Lite_Feature41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the Lovable badge`)
},"pricingplans_lite_title1":/** @type {(inputs: Pricingplans_Lite_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep your projects running with essential features`)
},"pricingplans_monthly1":/** @type {(inputs: Pricingplans_Monthly1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monthly`)
},"pricingplans_monthlycreditsdropdown3":/** @type {(inputs: Pricingplans_Monthlycreditsdropdown3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} credits / month`)
},"pricingplans_monthlycreditsdropdownshort4":/** @type {(inputs: Pricingplans_Monthlycreditsdropdownshort4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} monthly credits`)
},"pricingplans_monthlycreditsdropdowntyped4":/** @type {(inputs: Pricingplans_Monthlycreditsdropdowntyped4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} ${i?.planName} credits / month`)
},"pricingplans_monthlycreditstooltipdynamic4":/** @type {(inputs: Pricingplans_Monthlycreditstooltipdynamic4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} credits per month + ${i?.daily} daily credits that reset each day`)
},"pricingplans_monthlycreditstooltipmonthlyonly5":/** @type {(inputs: Pricingplans_Monthlycreditstooltipmonthlyonly5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} credits per month`)
},"pricingplans_needmorecredits3":/** @type {(inputs: Pricingplans_Needmorecredits3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Need more credits?`)
},"pricingplans_noadditionalcredits3":/** @type {(inputs: Pricingplans_Noadditionalcredits3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No additional credits`)
},"pricingplans_nocreditcardneeded4":/** @type {(inputs: Pricingplans_Nocreditcardneeded4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No credit card needed`)
},"pricingplans_onlyforfirstworkspace4":/** @type {(inputs: Pricingplans_Onlyforfirstworkspace4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only for first workspace`)
},"pricingplans_permonth2":/** @type {(inputs: Pricingplans_Permonth2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`per month`)
},"pricingplans_permonthshort3":/** @type {(inputs: Pricingplans_Permonthshort3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/mo`)
},"pricingplans_permonthsuffix3":/** @type {(inputs: Pricingplans_Permonthsuffix3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/ month`)
},"pricingplans_plansheading2":/** @type {(inputs: Pricingplans_Plansheading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change your plan`)
},"pricingplans_pro_cloudai3":/** @type {(inputs: Pricingplans_Pro_Cloudai3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage-based Cloud + AI`)
},"pricingplans_pro_cloudaitooltip4":/** @type {(inputs: Pricingplans_Pro_Cloudaitooltip4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free $25 Cloud + $1 AI usage included. Temporary offer and subject to change. <link>Read more</link>.`)
},"pricingplans_pro_creditrollovers2":/** @type {(inputs: Pricingplans_Pro_Creditrollovers2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credit rollovers`)
},"pricingplans_pro_creditrolloverstooltip3":/** @type {(inputs: Pricingplans_Pro_Creditrolloverstooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits roll over for 1 month on monthly plans, or until one month after the end of your annual plan.`)
},"pricingplans_pro_customdomains2":/** @type {(inputs: Pricingplans_Pro_Customdomains2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom domains`)
},"pricingplans_pro_dailycredits2":/** @type {(inputs: Pricingplans_Pro_Dailycredits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 daily credits`)
},"pricingplans_pro_emailsupport2":/** @type {(inputs: Pricingplans_Pro_Emailsupport2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email support`)
},"pricingplans_pro_includedgrantstooltip3":/** @type {(inputs: Pricingplans_Pro_Includedgrantstooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 credits to build (daily)
4 credits for AI (monthly)
20 credits for Cloud (monthly)`)
},"pricingplans_pro_monthlycredits2":/** @type {(inputs: Pricingplans_Pro_Monthlycredits2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} monthly credits`)
},"pricingplans_pro_monthlycreditstooltip3":/** @type {(inputs: Pricingplans_Pro_Monthlycreditstooltip3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.limit} credits per month + 5 daily credits that reset each day`)
},"pricingplans_pro_ondemandtopups4":/** @type {(inputs: Pricingplans_Pro_Ondemandtopups4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On-demand credit top-ups`)
},"pricingplans_pro_removebadge2":/** @type {(inputs: Pricingplans_Pro_Removebadge2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the Lovable badge`)
},"pricingplans_pro_title1":/** @type {(inputs: Pricingplans_Pro_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Designed for fast-moving teams building together in real time.`)
},"pricingplans_pro_unlimiteddomains2":/** @type {(inputs: Pricingplans_Pro_Unlimiteddomains2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlimited lovable.app domains`)
},"pricingplans_pro_userroles2":/** @type {(inputs: Pricingplans_Pro_Userroles2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User roles & permissions`)
},"pricingplans_procreditselectlabel4":/** @type {(inputs: Pricingplans_Procreditselectlabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pro credits`)
},"pricingplans_procreditswithlimit4":/** @type {(inputs: Pricingplans_Procreditswithlimit4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`<count>${i?.limit}</count> Pro credits`)
},"pricingplans_reactivate1":/** @type {(inputs: Pricingplans_Reactivate1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactivate`)
},"pricingplans_saveamount2":/** @type {(inputs: Pricingplans_Saveamount2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Save ${i?.symbol}${i?.amount}`)
},"pricingplans_savepercent2":/** @type {(inputs: Pricingplans_Savepercent2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Save ${i?.amount}%`)
},"pricingplans_scheduled1":/** @type {(inputs: Pricingplans_Scheduled1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheduled`)
},"pricingplans_select1":/** @type {(inputs: Pricingplans_Select1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select`)
},"pricingplans_selected1":/** @type {(inputs: Pricingplans_Selected1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selected`)
},"pricingplans_switchtoannual3":/** @type {(inputs: Pricingplans_Switchtoannual3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to annual`)
},"pricingplans_switchtoktlo3":/** @type {(inputs: Pricingplans_Switchtoktlo3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch to KTLO`)
},"pricingplans_talktosales3":/** @type {(inputs: Pricingplans_Talktosales3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Talk to sales`)
},"pricingplans_unlimitedusers2":/** @type {(inputs: Pricingplans_Unlimitedusers2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`<count>Unlimited</count> users`)
},"pricingplans_upgrade1":/** @type {(inputs: Pricingplans_Upgrade1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade`)
},"pricingplans_upgradecurrentplan3":/** @type {(inputs: Pricingplans_Upgradecurrentplan3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upgrade current plan`)
},"pricingplans_volumebasedpricing3":/** @type {(inputs: Pricingplans_Volumebasedpricing3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`<count>Volume based</count> pricing`)
},"pricingplans_yearly1":/** @type {(inputs: Pricingplans_Yearly1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yearly`)
},"pricingplans_yourcurrentplan3":/** @type {(inputs: Pricingplans_Yourcurrentplan3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your current plan`)
},"privacypage_meta_description1":/** @type {(inputs: Privacypage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explanation of how personal data is collected, used, stored, and safeguarded to protect user privacy at Lovable.`)
},"privacypage_meta_title1":/** @type {(inputs: Privacypage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Privacy Policy`)
},"productmanagerspage_faq1_answer2":/** @type {(inputs: Productmanagerspage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you do not need an engineer to go live with your Lovable MVP or product. You can publish your projects with one click, with custom domain, SEO optimization and security scanning included. Or, you can hand off to your engineering team when you’re ready.`)
},"productmanagerspage_faq1_question2":/** @type {(inputs: Productmanagerspage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need an engineer to go live?`)
},"productmanagerspage_faq2_answer2":/** @type {(inputs: Productmanagerspage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You get full visual control with React and Tailwind to enable your Lovable app to match your design files exactly. You can also use workspace themes to keep everything consistent across projects.`)
},"productmanagerspage_faq2_question2":/** @type {(inputs: Productmanagerspage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Will my Lovable app match my design files?`)
},"productmanagerspage_faq3_answer2":/** @type {(inputs: Productmanagerspage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can connect Lovable to multiple tools. Connect to Notion, Linear, Jira, or Confluence to pull in PRDs or full context around what you’re building. You can also build custom connectors to internal APIs and databases using MCP servers. Learn more about our connectors <connectorsLink>here</connectorsLink>.`)
},"productmanagerspage_faq3_question2":/** @type {(inputs: Productmanagerspage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I connect to our team’s tools?`)
},"productmanagerspage_faq4_answer2":/** @type {(inputs: Productmanagerspage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you need a backend for your project, databases, auth, AI capabilities and APIs are automatically set up for you though Lovable Cloud and AI. If you want more control, you can always connect Lovable to any tools through your own API keys.`)
},"productmanagerspage_faq4_question2":/** @type {(inputs: Productmanagerspage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What if I need a backend?`)
},"productmanagerspage_faq5_answer2":/** @type {(inputs: Productmanagerspage_Faq5_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can always export your code from Lovable. Just sync your project to GitHub at any time, you are never locked in.`)
},"productmanagerspage_faq5_question2":/** @type {(inputs: Productmanagerspage_Faq5_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I export my code?`)
},"productmanagerspage_faqtitle3":/** @type {(inputs: Productmanagerspage_Faqtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"productmanagerspage_hero_cta2":/** @type {(inputs: Productmanagerspage_Hero_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"productmanagerspage_hero_h12":/** @type {(inputs: Productmanagerspage_Hero_H12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools for product managers`)
},"productmanagerspage_hero_subtitle2":/** @type {(inputs: Productmanagerspage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn PRDs, docs, screenshots, or pull in any context to create a custom internal tool or prototype a feature.`)
},"productmanagerspage_hero_titleline13":/** @type {(inputs: Productmanagerspage_Hero_Titleline13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build internal tools`)
},"productmanagerspage_hero_titleline23":/** @type {(inputs: Productmanagerspage_Hero_Titleline23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`and prototypes`)
},"productmanagerspage_internaltools_step1_description3":/** @type {(inputs: Productmanagerspage_Internaltools_Step1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share adoption, conversion, and retention metrics in a self-serve dashboard so stakeholders can stay aligned without recurring reporting cycles.`)
},"productmanagerspage_internaltools_step1_title3":/** @type {(inputs: Productmanagerspage_Internaltools_Step1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metrics dashboard`)
},"productmanagerspage_internaltools_step2_description3":/** @type {(inputs: Productmanagerspage_Internaltools_Step2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coordinate timelines, owners, and rollout status in one place so launch execution doesn't fragment across docs, tools, and threads.`)
},"productmanagerspage_internaltools_step2_title3":/** @type {(inputs: Productmanagerspage_Internaltools_Step2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roadmap hub`)
},"productmanagerspage_internaltools_step3_description3":/** @type {(inputs: Productmanagerspage_Internaltools_Step3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build realistic onboarding flows with role selection and setup steps. Implement externally when ready to replace rigid onboarding tools.`)
},"productmanagerspage_internaltools_step3_title3":/** @type {(inputs: Productmanagerspage_Internaltools_Step3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onboarding flows`)
},"productmanagerspage_internaltools_subtitle3":/** @type {(inputs: Productmanagerspage_Internaltools_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build internal tools without turning every request into a custom engineering project.`)
},"productmanagerspage_internaltools_title3":/** @type {(inputs: Productmanagerspage_Internaltools_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create custom internal tools`)
},"productmanagerspage_meta_description2":/** @type {(inputs: Productmanagerspage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transform product ideas into interactive prototypes in minutes with Lovable. Align teams faster and ship real demos without endless docs or handoffs.`)
},"productmanagerspage_meta_title2":/** @type {(inputs: Productmanagerspage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Best No-Code App Builder for Product Managers | Tools for Product Managers | Lovable`)
},"productmanagerspage_prototyping_step1_description2":/** @type {(inputs: Productmanagerspage_Prototyping_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Define what you need to learn: onboarding friction, pricing clarity, or a new workflow. Ground work with PRDs, screenshots, and Figma files, or just by chatting with AI.`)
},"productmanagerspage_prototyping_step1_title2":/** @type {(inputs: Productmanagerspage_Prototyping_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start with a question`)
},"productmanagerspage_prototyping_step2_description2":/** @type {(inputs: Productmanagerspage_Prototyping_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an interactive prototype with real flows, states, and logic to evaluate complexity and edge cases without pulling favors from engineering.`)
},"productmanagerspage_prototyping_step2_title2":/** @type {(inputs: Productmanagerspage_Prototyping_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a realistic prototype`)
},"productmanagerspage_prototyping_step3_description2":/** @type {(inputs: Productmanagerspage_Prototyping_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversations move from opinions and hypotheticals to concrete feedback when you share prototypes with users and stakeholders, early.`)
},"productmanagerspage_prototyping_step3_title2":/** @type {(inputs: Productmanagerspage_Prototyping_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test and align`)
},"productmanagerspage_prototyping_step4_description2":/** @type {(inputs: Productmanagerspage_Prototyping_Step4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use what you learn to refine scope, move forward with ease, or kill an idea early. Engineering starts with clearer requirements and fewer surprises.`)
},"productmanagerspage_prototyping_step4_title2":/** @type {(inputs: Productmanagerspage_Prototyping_Step4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roadmap with confidence`)
},"productmanagerspage_prototyping_subtitle2":/** @type {(inputs: Productmanagerspage_Prototyping_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore and validate new features, flows, and changes with realistic, interactive prototypes to answer the question of ‘should we build this’, early.`)
},"productmanagerspage_prototyping_title2":/** @type {(inputs: Productmanagerspage_Prototyping_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototype ideas before they hit your roadmap`)
},"productmanagerspage_testimonial1_authortitle3":/** @type {(inputs: Productmanagerspage_Testimonial1_Authortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product Manager`)
},"productmanagerspage_testimonial1_cta2":/** @type {(inputs: Productmanagerspage_Testimonial1_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the full story`)
},"productmanagerspage_testimonial1_quote2":/** @type {(inputs: Productmanagerspage_Testimonial1_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“I see Lovable as the crucial missing middle step between static prototypes and the full production version. It lets us prototype the future in a quick, high‑fidelity way, with a living, breathing version of what we want our platform to become.”`)
},"productmanagerspage_testimonial2_authortitle3":/** @type {(inputs: Productmanagerspage_Testimonial2_Authortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group PM`)
},"productmanagerspage_testimonial2_cta2":/** @type {(inputs: Productmanagerspage_Testimonial2_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the full story`)
},"productmanagerspage_testimonial2_quote2":/** @type {(inputs: Productmanagerspage_Testimonial2_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Instead of creating wireframes, I can quickly build a prototype. Having a visual helps you really explore the details. I can find edge cases in my thinking, which is much easier than trying to write down everything.”`)
},"productmanagerspage_testimonial3_authortitle3":/** @type {(inputs: Productmanagerspage_Testimonial3_Authortitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Director of Product`)
},"productmanagerspage_testimonial3_cta2":/** @type {(inputs: Productmanagerspage_Testimonial3_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the full story`)
},"productmanagerspage_testimonial3_quote2":/** @type {(inputs: Productmanagerspage_Testimonial3_Quote2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“With an interactive prototype, we have a common ground that’s undisputable. Something that would have taken about three weeks took one week.”`)
},"programspage_about_access1":/** @type {(inputs: Programspage_About_Access1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As a program member, you get direct access to:`)
},"programspage_about_body1":/** @type {(inputs: Programspage_About_Body1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our programs consist of a small group of builders and aren't open to everyone. We look for people who already love Lovable, who show up in their communities, and who want to be part of something bigger.`)
},"programspage_about_pill_features1":/** @type {(inputs: Programspage_About_Pill_Features1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Early access to features`)
},"programspage_about_pill_support1":/** @type {(inputs: Programspage_About_Pill_Support1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support from Lovable team`)
},"programspage_about_pill_tools1":/** @type {(inputs: Programspage_About_Pill_Tools1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal tools`)
},"programspage_about_title1":/** @type {(inputs: Programspage_About_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What are Lovable Community Programs?`)
},"programspage_apply_cta1":/** @type {(inputs: Programspage_Apply_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply now`)
},"programspage_apply_subtitle1":/** @type {(inputs: Programspage_Apply_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you're someone who builds, connects, and leads, we'd like to hear from you.`)
},"programspage_apply_titleline12":/** @type {(inputs: Programspage_Apply_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready?`)
},"programspage_apply_titleline22":/** @type {(inputs: Programspage_Apply_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applications are open.`)
},"programspage_benefits_intro1":/** @type {(inputs: Programspage_Benefits_Intro1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being part of Lovable Community Programs means being close to the product, the team, and a global network of people building the future of software.`)
},"programspage_benefits_item1_description1":/** @type {(inputs: Programspage_Benefits_Item1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get features before anyone else. Join private channels with the Lovable team. Your feedback shapes what gets built next.`)
},"programspage_benefits_item1_number1":/** @type {(inputs: Programspage_Benefits_Item1_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`01`)
},"programspage_benefits_item1_title1":/** @type {(inputs: Programspage_Benefits_Item1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Early access and direct influence`)
},"programspage_benefits_item2_description1":/** @type {(inputs: Programspage_Benefits_Item2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monthly Lovable credits for your own projects and for the events you run. Everything you need to keep building, and keep your community building too.`)
},"programspage_benefits_item2_number1":/** @type {(inputs: Programspage_Benefits_Item2_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`02`)
},"programspage_benefits_item2_title1":/** @type {(inputs: Programspage_Benefits_Item2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits and tools to build`)
},"programspage_benefits_item3_description1":/** @type {(inputs: Programspage_Benefits_Item3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get featured across Lovable's channels. Build your personal brand while the community grows around you.`)
},"programspage_benefits_item3_number1":/** @type {(inputs: Programspage_Benefits_Item3_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`03`)
},"programspage_benefits_item3_title1":/** @type {(inputs: Programspage_Benefits_Item3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibility and recognition`)
},"programspage_benefits_item4_description1":/** @type {(inputs: Programspage_Benefits_Item4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join a tight-knit group of builders, creators, and operators across 60+ countries. People who are doing the same thing you are, just somewhere else in the world.`)
},"programspage_benefits_item4_number1":/** @type {(inputs: Programspage_Benefits_Item4_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`04`)
},"programspage_benefits_item4_title1":/** @type {(inputs: Programspage_Benefits_Item4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A global network`)
},"programspage_benefits_title1":/** @type {(inputs: Programspage_Benefits_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More than a program`)
},"programspage_faq10_answer1":/** @type {(inputs: Programspage_Faq10_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reach out to us at <emailLink>community@lovable.dev</emailLink> or find us on <discordLink>Discord</discordLink>.`)
},"programspage_faq10_question1":/** @type {(inputs: Programspage_Faq10_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I have a question not listed here.`)
},"programspage_faq1_answer1":/** @type {(inputs: Programspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. We're looking for people who already use and love Lovable. If you're new to the product, spend some time building with it first and apply for the next cohort when you're ready.`)
},"programspage_faq1_question1":/** @type {(inputs: Programspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need experience with Lovable to apply?`)
},"programspage_faq2_answer1":/** @type {(inputs: Programspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ambassadors are for professionals and community builders in the broader tech ecosystem. Campus Leaders are for students who want to activate their university. Apply to whichever fits where you are right now.`)
},"programspage_faq2_question1":/** @type {(inputs: Programspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What's the difference between Ambassador and Campus Leader?`)
},"programspage_faq3_answer1":/** @type {(inputs: Programspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. You'll receive Lovable credits, early access to features, event support, and more. The real value comes from the access, the network, and what you build with it.`)
},"programspage_faq3_question1":/** @type {(inputs: Programspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is this a paid role?`)
},"programspage_faq4_answer1":/** @type {(inputs: Programspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most members spend a few hours per week hosting events, creating content, and engaging with the community. It's flexible, but we do expect a baseline level of involvement.`)
},"programspage_faq4_question1":/** @type {(inputs: Programspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How much time does it take?`)
},"programspage_faq5_answer1":/** @type {(inputs: Programspage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Pick the one that best fits your current situation. You can always participate in the broader community, including Discord, events, and SheBuilds, alongside any program.`)
},"programspage_faq5_question1":/** @type {(inputs: Programspage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I apply to both programs?`)
},"programspage_faq6_answer1":/** @type {(inputs: Programspage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We ask for your genuine commitment. Being a Lovable Ambassador or Campus Leader means representing Lovable with care, so we ask that you're not simultaneously representing a competing product.`)
},"programspage_faq6_question1":/** @type {(inputs: Programspage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I be an Ambassador for other companies too?`)
},"programspage_faq7_answer1":/** @type {(inputs: Programspage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Anyone can host a Lovable community event. The programs are for those who want to go further: leading ongoing initiatives, growing communities, and working closely with the team.`)
},"programspage_faq7_question1":/** @type {(inputs: Programspage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I host events without being in a program?`)
},"programspage_faq8_answer1":/** @type {(inputs: Programspage_Faq8_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Of course. Share it on LinkedIn, social media, or your resume. We'd love that.`)
},"programspage_faq8_question1":/** @type {(inputs: Programspage_Faq8_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I talk about being an Ambassador or Campus Leader publicly?`)
},"programspage_faq9_answer1":/** @type {(inputs: Programspage_Faq9_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The program is designed to be flexible, but we do expect engagement. If expectations aren't met, you may not be eligible for a certificate or renewal. You're always welcome in the broader community and can reapply in the future.`)
},"programspage_faq9_question1":/** @type {(inputs: Programspage_Faq9_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What happens if I don't meet expectations?`)
},"programspage_faq_title1":/** @type {(inputs: Programspage_Faq_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"programspage_hero_apply1":/** @type {(inputs: Programspage_Hero_Apply1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply now`)
},"programspage_hero_explore1":/** @type {(inputs: Programspage_Hero_Explore1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore programs`)
},"programspage_hero_subtitle1":/** @type {(inputs: Programspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A community program for the builders closest to Lovable.`)
},"programspage_hero_title_aria1":/** @type {(inputs: Programspage_Hero_Title_Aria1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Community Programs`)
},"programspage_hero_title_community1":/** @type {(inputs: Programspage_Hero_Title_Community1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
},"programspage_hero_title_lovable1":/** @type {(inputs: Programspage_Hero_Title_Lovable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable`)
},"programspage_hero_title_programs1":/** @type {(inputs: Programspage_Hero_Title_Programs1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programs`)
},"programspage_meta_description1":/** @type {(inputs: Programspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply to Lovable Community Programs for builders who lead communities, campus movements, and content around AI-powered development.`)
},"programspage_meta_title1":/** @type {(inputs: Programspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Community Programs | Lovable`)
},"programspage_process_cta1":/** @type {(inputs: Programspage_Process_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply now`)
},"programspage_process_step1_description1":/** @type {(inputs: Programspage_Process_Step1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell us about yourself and why you want to be part of the program.`)
},"programspage_process_step1_number1":/** @type {(inputs: Programspage_Process_Step1_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`01`)
},"programspage_process_step1_title1":/** @type {(inputs: Programspage_Process_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
},"programspage_process_step2_description1":/** @type {(inputs: Programspage_Process_Step2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We look at every application. If there's a fit, we'll be in touch.`)
},"programspage_process_step2_number1":/** @type {(inputs: Programspage_Process_Step2_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`02`)
},"programspage_process_step2_title1":/** @type {(inputs: Programspage_Process_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We review`)
},"programspage_process_step3_description1":/** @type {(inputs: Programspage_Process_Step3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get onboarded, meet the team, and start building.`)
},"programspage_process_step3_number1":/** @type {(inputs: Programspage_Process_Step3_Number1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`03`)
},"programspage_process_step3_title1":/** @type {(inputs: Programspage_Process_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join your cohort`)
},"programspage_process_subtitle1":/** @type {(inputs: Programspage_Process_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applications are reviewed on a rolling basis, and spots are limited. Join the waitlist today to be the first to hear about the program!`)
},"programspage_process_title1":/** @type {(inputs: Programspage_Process_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The application process`)
},"programspage_programs_ambassador_doing1":/** @type {(inputs: Programspage_Programs_Ambassador_Doing1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring Lovable to your local community. Create content that inspires others to build. Run events that bring people together around AI-powered development. Work directly with the Lovable team on what comes next.`)
},"programspage_programs_ambassador_lookfor12":/** @type {(inputs: Programspage_Programs_Ambassador_Lookfor12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already love Lovable and use it to build real projects`)
},"programspage_programs_ambassador_lookfor22":/** @type {(inputs: Programspage_Programs_Ambassador_Lookfor22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are active in builder, startup, founder, or creator communities with a network and a voice`)
},"programspage_programs_ambassador_lookfor32":/** @type {(inputs: Programspage_Programs_Ambassador_Lookfor32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have a track record of creating content, running events, or getting people excited about AI`)
},"programspage_programs_ambassador_lookfor42":/** @type {(inputs: Programspage_Programs_Ambassador_Lookfor42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take initiative without being asked`)
},"programspage_programs_ambassador_ticketline12":/** @type {(inputs: Programspage_Programs_Ambassador_Ticketline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable`)
},"programspage_programs_ambassador_ticketline22":/** @type {(inputs: Programspage_Programs_Ambassador_Ticketline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ambassador`)
},"programspage_programs_ambassador_title1":/** @type {(inputs: Programspage_Programs_Ambassador_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Ambassador`)
},"programspage_programs_ambassador_whofor2":/** @type {(inputs: Programspage_Programs_Ambassador_Whofor2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Professionals, community builders, and creators in the tech ecosystem.`)
},"programspage_programs_apply1":/** @type {(inputs: Programspage_Programs_Apply1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply now`)
},"programspage_programs_campus_doing1":/** @type {(inputs: Programspage_Programs_Campus_Doing1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch Lovable at your university. Run student courses, hackathons, and Lovable Days that get your peers building with AI. You'll bridge technical and non-technical backgrounds to create real products together. You'll be the go-to person for Lovable on campus, a role that opens doors and builds your profile before you even graduate.`)
},"programspage_programs_campus_lookfor12":/** @type {(inputs: Programspage_Programs_Campus_Lookfor12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already build with Lovable and know the product well`)
},"programspage_programs_campus_lookfor22":/** @type {(inputs: Programspage_Programs_Campus_Lookfor22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are deeply involved in campus tech, entrepreneurship, or creative communities`)
},"programspage_programs_campus_lookfor32":/** @type {(inputs: Programspage_Programs_Campus_Lookfor32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have experience organizing events, hackathons, or campus initiatives`)
},"programspage_programs_campus_lookfor42":/** @type {(inputs: Programspage_Programs_Campus_Lookfor42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can rally peers and create momentum`)
},"programspage_programs_campus_ticketline12":/** @type {(inputs: Programspage_Programs_Campus_Ticketline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campus`)
},"programspage_programs_campus_ticketline22":/** @type {(inputs: Programspage_Programs_Campus_Ticketline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leader`)
},"programspage_programs_campus_title1":/** @type {(inputs: Programspage_Programs_Campus_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campus Leader`)
},"programspage_programs_campus_whofor2":/** @type {(inputs: Programspage_Programs_Campus_Whofor2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Students ready to lead the AI-building movement on their campus.`)
},"programspage_programs_doing_title1":/** @type {(inputs: Programspage_Programs_Doing_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What you'll be doing`)
},"programspage_programs_lookfor_title2":/** @type {(inputs: Programspage_Programs_Lookfor_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What we look for`)
},"programspage_programs_title_line11":/** @type {(inputs: Programspage_Programs_Title_Line11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two programs.`)
},"programspage_programs_title_line21":/** @type {(inputs: Programspage_Programs_Title_Line21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One mission.`)
},"programspage_programs_whofor_title2":/** @type {(inputs: Programspage_Programs_Whofor_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who is it for`)
},"programspage_testimonials_title1":/** @type {(inputs: Programspage_Testimonials_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A few words from our participants`)
},"programspage_ticket_line11":/** @type {(inputs: Programspage_Ticket_Line11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Program`)
},"programspage_ticket_line21":/** @type {(inputs: Programspage_Ticket_Line21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Member`)
},"projectcard_created1":/** @type {(inputs: Projectcard_Created1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created`)
},"projectcard_edited1":/** @type {(inputs: Projectcard_Edited1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edited`)
},"projectcard_ranked1":/** @type {(inputs: Projectcard_Ranked1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranked`)
},"projectcard_remixcount2":/** @type {(inputs: Projectcard_Remixcount2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Remix`)
},"projectcard_remixescount2":/** @type {(inputs: Projectcard_Remixescount2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Remixes`)
},"projectcard_viewed1":/** @type {(inputs: Projectcard_Viewed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viewed`)
},"projectchangessection_collapse2":/** @type {(inputs: Projectchangessection_Collapse2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Collapse ${i?.label}`)
},"projectchangessection_expand2":/** @type {(inputs: Projectchangessection_Expand2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Expand ${i?.label}`)
},"projectsettings_typeguarddsdescription4":/** @type {(inputs: Projectsettings_Typeguarddsdescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the attached design system before turning this project into one.`)
},"projectsettings_typeguarddstitle4":/** @type {(inputs: Projectsettings_Typeguarddstitle4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This project uses a design system`)
},"projectsheader_viewall2":/** @type {(inputs: Projectsheader_Viewall2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View all`)
},"projectstabs_browseall2":/** @type {(inputs: Projectstabs_Browseall2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse all`)
},"projectstabs_default1":/** @type {(inputs: Projectstabs_Default1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Default`)
},"projectstabs_designsystems2":/** @type {(inputs: Projectstabs_Designsystems2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design systems`)
},"projectstabs_loaderror2":/** @type {(inputs: Projectstabs_Loaderror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load projects`)
},"projectstabs_lovabletemplates2":/** @type {(inputs: Projectstabs_Lovabletemplates2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable templates`)
},"projectstabs_mostvisitorstoday3":/** @type {(inputs: Projectstabs_Mostvisitorstoday3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most visitors today`)
},"projectstabs_myprojects2":/** @type {(inputs: Projectstabs_Myprojects2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My projects`)
},"projectstabs_noprojectswithvisitors4":/** @type {(inputs: Projectstabs_Noprojectswithvisitors4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No projects with visitors`)
},"projectstabs_nosharedprojects3":/** @type {(inputs: Projectstabs_Nosharedprojects3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No shared projects found`)
},"projectstabs_nostarredprojects3":/** @type {(inputs: Projectstabs_Nostarredprojects3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No starred projects found`)
},"projectstabs_noworkspacetemplates3":/** @type {(inputs: Projectstabs_Noworkspacetemplates3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No templates yet. Mark a project as a template from project settings.`)
},"projectstabs_recentlyviewed2":/** @type {(inputs: Projectstabs_Recentlyviewed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently viewed`)
},"projectstabs_searchresultscount3":/** @type {(inputs: Projectstabs_Searchresultscount3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} result`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} results`);
	return /** @type {LocalizedString} */ ("projectsTabs_searchResultsCount");
},"projectstabs_sharedwithme3":/** @type {(inputs: Projectstabs_Sharedwithme3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared with me`)
},"projectstabs_starred1":/** @type {(inputs: Projectstabs_Starred1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starred`)
},"projectstabs_workspacetemplates2":/** @type {(inputs: Projectstabs_Workspacetemplates2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace templates`)
},"prototypespage_faq1_answer1":/** @type {(inputs: Prototypespage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prototypes become production code through syncing with GitHub and handing over to engineers. When you’ve validated your prototype with stakeholders, let your engineering team pull the repository on GitHub and continue building from there–they can add backend logic, write tests, and deploy. For example, n8n’s product teams often hand prototypes directly to engineers.`)
},"prototypespage_faq1_question1":/** @type {(inputs: Prototypespage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do prototypes become production code?`)
},"prototypespage_faq2_answer1":/** @type {(inputs: Prototypespage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you do not need engineers to build prototypes. Product managers and designers can build prototypes independently. Delivery Hero’s Director built a prototype in 1 hour without engineering help, and n8n’s PM team replaced their wireframing process entirely. That said, many teams choose to include engineers for technical validation or complex logic.`)
},"prototypespage_faq2_question1":/** @type {(inputs: Prototypespage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do we need engineering to build prototypes?`)
},"prototypespage_faq3_answer1":/** @type {(inputs: Prototypespage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can use real data in prototypes. You can connect to Supabase for authentication and database schemas, or use connectors to pull from Confluence, Jira, Linear and Notion. Delivery Hero used actual bank loyalty program data when testing their prototype, which helped partners spot edge cases they wouldn’t have found in static wireframes.`)
},"prototypespage_faq3_question1":/** @type {(inputs: Prototypespage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can we use real data in prototypes?`)
},"prototypespage_faq4_answer1":/** @type {(inputs: Prototypespage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can steer the AI with natural language instructions or use visual editing to make changes directly, to ensure that Lovable builds what you envisioned. Most teams iterate 3–5 times to refine their prototypes. As n8n’s Group PM put it: “Lovable is a thought partner—I can find edge cases in my thinking.”`)
},"prototypespage_faq4_question1":/** @type {(inputs: Prototypespage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What if the AI builds something wrong?`)
},"prototypespage_faq5_answer1":/** @type {(inputs: Prototypespage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There’s a free tier to get started. Professional plans start at $20/month for individuals. Enterprise plans with extended functionality and support are available for teams like Microsoft, Delivery Hero, and n8n.`)
},"prototypespage_faq5_question1":/** @type {(inputs: Prototypespage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How much does it cost?`)
},"prototypespage_faqtitle2":/** @type {(inputs: Prototypespage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"prototypespage_hero_cta1":/** @type {(inputs: Prototypespage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"prototypespage_hero_label1":/** @type {(inputs: Prototypespage_Hero_Label1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable for prototyping`)
},"prototypespage_hero_subtitle1":/** @type {(inputs: Prototypespage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn tickets, docs, and wireframes into working prototypes. Bring concepts to life with full fidelity.`)
},"prototypespage_hero_titleline12":/** @type {(inputs: Prototypespage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proof of concept`)
},"prototypespage_hero_titleline22":/** @type {(inputs: Prototypespage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`in hours, not weeks`)
},"prototypespage_meta_description1":/** @type {(inputs: Prototypespage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn tickets, docs, and wireframes into working prototypes. Bring concepts to life with full fidelity.`)
},"prototypespage_meta_title1":/** @type {(inputs: Prototypespage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For Prototypers`)
},"prototypespage_prd_subtitle1":/** @type {(inputs: Prototypespage_Prd_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pull context from Jira, Confluence, Notion, or Linear. Lovable reads your tickets and linked documentation, then builds a working prototype you can share with your team.`)
},"prototypespage_prd_title1":/** @type {(inputs: Prototypespage_Prd_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make your PRD real`)
},"prototypespage_step1_description1":/** @type {(inputs: Prototypespage_Step1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe what you want in plain language or bring in context from Notion, Linear, Confluence and Jira to build your prototype in minutes. Use visual editing to refine designs.`)
},"prototypespage_step1_title1":/** @type {(inputs: Prototypespage_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip the eng backlog`)
},"prototypespage_step2_description1":/** @type {(inputs: Prototypespage_Step2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use Themes to match your brand, generate custom images with AI, and refine with visual editing. Show stakeholders polished work, not rough wireframes.`)
},"prototypespage_step2_title1":/** @type {(inputs: Prototypespage_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make it pop`)
},"prototypespage_step3_description1":/** @type {(inputs: Prototypespage_Step3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share with stakeholders and get real feedback. Test flows, surface issues, and validate assumptions before writing a single line of production code.`)
},"prototypespage_step3_title1":/** @type {(inputs: Prototypespage_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take it for a spin`)
},"prototypespage_step4_description1":/** @type {(inputs: Prototypespage_Step4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync to GitHub and hand off validated code. No ambiguity about requirements, no rework from miscommunication.`)
},"prototypespage_step4_title1":/** @type {(inputs: Prototypespage_Step4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handoff to dev`)
},"prototypespage_testimonial1_cta1":/** @type {(inputs: Prototypespage_Testimonial1_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the story`)
},"prototypespage_testimonial1_quote1":/** @type {(inputs: Prototypespage_Testimonial1_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Instead of creating wireframes, I can quickly build a prototype. Sometimes we don’t even need a high fidelity version—we just give the prototypes to the engineers. Having a visual helps you really explore the details. I can find edge cases in my thinking, which is much easier than trying to write down everything.”`)
},"prototypespage_testimonial2_cta1":/** @type {(inputs: Prototypespage_Testimonial2_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the story`)
},"prototypespage_testimonial2_quote1":/** @type {(inputs: Prototypespage_Testimonial2_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“I might write something in a PRD, and you might understand something different. But with an interactive prototype, we have common ground that’s undisputable.”`)
},"prototypespage_testimonials_title1":/** @type {(inputs: Prototypespage_Testimonials_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real teams, real results`)
},"publish_accessbadge_external1":/** @type {(inputs: Publish_Accessbadge_External1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} external`)
},"publish_accessbadge_groups1":/** @type {(inputs: Publish_Accessbadge_Groups1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} group`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} groups`);
	return /** @type {LocalizedString} */ ("publish_accessBadge_groups");
},"publish_accessbadge_users1":/** @type {(inputs: Publish_Accessbadge_Users1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} user`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} users`);
	return /** @type {LocalizedString} */ ("publish_accessBadge_users");
},"publish_addcustomdomain2":/** @type {(inputs: Publish_Addcustomdomain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add custom domain`)
},"publish_button_checking":/** @type {(inputs: Publish_Button_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking...`)
},"publish_button_publish":/** @type {(inputs: Publish_Button_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish`)
},"publish_button_publishdraft1":/** @type {(inputs: Publish_Button_Publishdraft1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish draft`)
},"publish_button_publishing":/** @type {(inputs: Publish_Button_PublishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing`)
},"publish_button_update":/** @type {(inputs: Publish_Button_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update`)
},"publish_button_updating":/** @type {(inputs: Publish_Button_UpdatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updating`)
},"publish_button_uptodate2":/** @type {(inputs: Publish_Button_Uptodate2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Up to date`)
},"publish_close":/** @type {(inputs: Publish_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"publish_connectionscard_expandedhelp2":/** @type {(inputs: Publish_Connectionscard_Expandedhelp2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`1 sensitive connection is linked to this project. Review your app's data access rules before you publish.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} connections are linked to this project. Review your app's data access rules before you publish.`);
	return /** @type {LocalizedString} */ ("publish_connectionsCard_expandedHelp");
},"publish_connectionscard_openconnectionsettings3":/** @type {(inputs: Publish_Connectionscard_Openconnectionsettings3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Open ${i?.name} connection settings`)
},"publish_connectionscard_subtitle1":/** @type {(inputs: Publish_Connectionscard_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review sensitive data`)
},"publish_connectionscard_title1":/** @type {(inputs: Publish_Connectionscard_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connections`)
},"publish_connectionscard_togglecollapse2":/** @type {(inputs: Publish_Connectionscard_Togglecollapse2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse linked connections`)
},"publish_connectionscard_toggleexpand2":/** @type {(inputs: Publish_Connectionscard_Toggleexpand2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expand linked connections`)
},"publish_copyurl1":/** @type {(inputs: Publish_Copyurl1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy URL`)
},"publish_draftnotice1":/** @type {(inputs: Publish_Draftnotice1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publishing will save draft “${i?.label}” to your project and make it live.`)
},"publish_draftscanpolicyblocked3":/** @type {(inputs: Publish_Draftscanpolicyblocked3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires a security scan of published code, which doesn't cover drafts yet`)
},"publish_failed_builderrorlist2":/** @type {(inputs: Publish_Failed_Builderrorlist2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build failed with the following errors:`)
},"publish_failed_builderrormessage2":/** @type {(inputs: Publish_Failed_Builderrormessage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn't publish your site due to build errors.`)
},"publish_failed_close":/** @type {(inputs: Publish_Failed_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"publish_failed_errorlabel1":/** @type {(inputs: Publish_Failed_Errorlabel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The error message:`)
},"publish_failed_externalactionguidance2":/** @type {(inputs: Publish_Failed_Externalactionguidance2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update the required connection or secret in project settings, then retry.`)
},"publish_failed_fix_initiated":/** @type {(inputs: Publish_Failed_Fix_InitiatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix attempt initiated successfully`)
},"publish_failed_fix_initiating":/** @type {(inputs: Publish_Failed_Fix_InitiatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixing...`)
},"publish_failed_fix_retry":/** @type {(inputs: Publish_Failed_Fix_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to initiate fix. Please try again.`)
},"publish_failed_genericerrormessage2":/** @type {(inputs: Publish_Failed_Genericerrormessage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong and we couldn't publish your site.`)
},"publish_failed_retrying":/** @type {(inputs: Publish_Failed_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retrying...`)
},"publish_failed_title":/** @type {(inputs: Publish_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oops! 😢`)
},"publish_failed_tryagain1":/** @type {(inputs: Publish_Failed_Tryagain1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"publish_failed_trytofix2":/** @type {(inputs: Publish_Failed_Trytofix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix`)
},"publish_failed_trytofix_assisted2":/** @type {(inputs: Publish_Failed_Trytofix_Assisted2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask the assistant to help`)
},"publish_footer_back":/** @type {(inputs: Publish_Footer_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
},"publish_footer_continue":/** @type {(inputs: Publish_Footer_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"publish_footer_done":/** @type {(inputs: Publish_Footer_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
},"publish_footer_generating":/** @type {(inputs: Publish_Footer_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating`)
},"publish_footer_reviewseo1":/** @type {(inputs: Publish_Footer_Reviewseo1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review SEO`)
},"publish_footer_saveaccess_failed1":/** @type {(inputs: Publish_Footer_Saveaccess_Failed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to save access changes`)
},"publish_footer_selectmembers1":/** @type {(inputs: Publish_Footer_Selectmembers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select members`)
},"publish_gate_reviewfindings1":/** @type {(inputs: Publish_Gate_Reviewfindings1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review findings`)
},"publish_gate_runsecurityscan2":/** @type {(inputs: Publish_Gate_Runsecurityscan2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run security scan`)
},"publish_gate_scanning":/** @type {(inputs: Publish_Gate_ScanningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanning`)
},"publish_googlemaps_body1":/** @type {(inputs: Publish_Googlemaps_Body1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The managed connection only works on *.lovable.app domains. Maps will not load on your custom domain until you connect your own Google Maps Platform API key.`)
},"publish_googlemaps_fixit2":/** @type {(inputs: Publish_Googlemaps_Fixit2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix it`)
},"publish_googlemaps_sendinghint2":/** @type {(inputs: Publish_Googlemaps_Sendinghint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is sending your message...`)
},"publish_googlemaps_willnotload3":/** @type {(inputs: Publish_Googlemaps_Willnotload3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Will not load`)
},"publish_header_published":/** @type {(inputs: Publish_Header_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
},"publish_header_unpublish":/** @type {(inputs: Publish_Header_UnpublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublish`)
},"publish_hero_body":/** @type {(inputs: Publish_Hero_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This lets visitors view what you’ve built. They never see the changes you make until you publish them.`)
},"publish_hero_title":/** @type {(inputs: Publish_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to put your site live?`)
},"publish_live_defaultappname2":/** @type {(inputs: Publish_Live_Defaultappname2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app`)
},"publish_live_discordcopied1":/** @type {(inputs: Publish_Live_Discordcopied1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied to clipboard! Paste it in your Discord channel.`)
},"publish_live_islive1":/** @type {(inputs: Publish_Live_Islive1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is live!`)
},"publish_live_seohint1":/** @type {(inputs: Publish_Live_Seohint1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to edit your title, description & icon`)
},"publish_live_share":/** @type {(inputs: Publish_Live_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share`)
},"publish_live_sharetext1":/** @type {(inputs: Publish_Live_Sharetext1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check out what I just built with Lovable!`)
},"publish_live_subtitle":/** @type {(inputs: Publish_Live_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Congratulations on your project.
Now it’s time to spread the word.`)
},"publish_live_visitsite1":/** @type {(inputs: Publish_Live_Visitsite1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visit site`)
},"publish_progress_body":/** @type {(inputs: Publish_Progress_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This can take a minute or two. You can close this and keep chatting with Lovable.`)
},"publish_progress_publishingtitle1":/** @type {(inputs: Publish_Progress_Publishingtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing your project`)
},"publish_progress_updatingtitle1":/** @type {(inputs: Publish_Progress_Updatingtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updating your project`)
},"publish_savechanges_save1":/** @type {(inputs: Publish_Savechanges_Save1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save changes`)
},"publish_savechanges_saving1":/** @type {(inputs: Publish_Savechanges_Saving1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving`)
},"publish_scan_basicpassed1":/** @type {(inputs: Publish_Scan_Basicpassed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basic security check passed`)
},"publish_scan_deepinprogress2":/** @type {(inputs: Publish_Scan_Deepinprogress2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deep scan in progress`)
},"publish_scan_scanning":/** @type {(inputs: Publish_Scan_ScanningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanning for security issues`)
},"publish_securitygate_critical_address1":/** @type {(inputs: Publish_Securitygate_Critical_Address1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address issues`)
},"publish_securitygate_critical_description_publishing1":/** @type {(inputs: Publish_Securitygate_Critical_Description_Publishing1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`We found ${i?.count} critical issue that puts your application's security at risk. We recommend addressing it before publishing.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`We found ${i?.count} critical issues that put your application's security at risk. We recommend addressing them before publishing.`);
	return /** @type {LocalizedString} */ ("publish_securityGate_critical_description_publishing");
},"publish_securitygate_critical_description_saving1":/** @type {(inputs: Publish_Securitygate_Critical_Description_Saving1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`We found ${i?.count} critical issue that puts your application's security at risk. We recommend addressing it before saving your changes.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`We found ${i?.count} critical issues that put your application's security at risk. We recommend addressing them before saving your changes.`);
	return /** @type {LocalizedString} */ ("publish_securityGate_critical_description_saving");
},"publish_securitygate_critical_description_updating1":/** @type {(inputs: Publish_Securitygate_Critical_Description_Updating1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`We found ${i?.count} critical issue that puts your application's security at risk. We recommend addressing it before updating.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`We found ${i?.count} critical issues that put your application's security at risk. We recommend addressing them before updating.`);
	return /** @type {LocalizedString} */ ("publish_securityGate_critical_description_updating");
},"publish_securitygate_critical_title1":/** @type {(inputs: Publish_Securitygate_Critical_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Critical security issues found`)
},"publish_securitygate_inprogress_description_publishing2":/** @type {(inputs: Publish_Securitygate_Inprogress_Description_Publishing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A security scan is still running for this version. Publishing now could put your application's security at risk — we recommend waiting for the result.`)
},"publish_securitygate_inprogress_description_saving2":/** @type {(inputs: Publish_Securitygate_Inprogress_Description_Saving2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A security scan is still running for this version. Saving your changes now could put your application's security at risk — we recommend waiting for the result.`)
},"publish_securitygate_inprogress_description_updating2":/** @type {(inputs: Publish_Securitygate_Inprogress_Description_Updating2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A security scan is still running for this version. Updating now could put your application's security at risk — we recommend waiting for the result.`)
},"publish_securitygate_inprogress_title2":/** @type {(inputs: Publish_Securitygate_Inprogress_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security scan in progress`)
},"publish_securitygate_inprogress_wait2":/** @type {(inputs: Publish_Securitygate_Inprogress_Wait2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wait for scan`)
},"publish_securitygate_override_publish1":/** @type {(inputs: Publish_Securitygate_Override_Publish1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish anyway`)
},"publish_securitygate_override_save1":/** @type {(inputs: Publish_Securitygate_Override_Save1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save anyway`)
},"publish_securitygate_override_update1":/** @type {(inputs: Publish_Securitygate_Override_Update1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update anyway`)
},"publish_securitygate_required_description_publishing1":/** @type {(inputs: Publish_Securitygate_Required_Description_Publishing1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version hasn't been scanned yet, so your application's security could be at risk. We recommend running a quick security scan before publishing.`)
},"publish_securitygate_required_description_saving1":/** @type {(inputs: Publish_Securitygate_Required_Description_Saving1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version hasn't been scanned yet, so your application's security could be at risk. We recommend running a quick security scan before saving your changes.`)
},"publish_securitygate_required_description_updating1":/** @type {(inputs: Publish_Securitygate_Required_Description_Updating1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version hasn't been scanned yet, so your application's security could be at risk. We recommend running a quick security scan before updating.`)
},"publish_securitygate_required_runscan2":/** @type {(inputs: Publish_Securitygate_Required_Runscan2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run scan`)
},"publish_securitygate_required_title1":/** @type {(inputs: Publish_Securitygate_Required_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security scan recommended`)
},"publish_share":/** @type {(inputs: Publish_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share`)
},"publish_share_failed":/** @type {(inputs: Publish_Share_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to share`)
},"publish_share_linktitle1":/** @type {(inputs: Publish_Share_Linktitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share link`)
},"publish_summary_changeaccess1":/** @type {(inputs: Publish_Summary_Changeaccess1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
},"publish_summary_checkingsecurity1":/** @type {(inputs: Publish_Summary_Checkingsecurity1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking your site is secure`)
},"publish_summary_nosecurityissues2":/** @type {(inputs: Publish_Summary_Nosecurityissues2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No security issues found`)
},"publish_summary_publishedactions1":/** @type {(inputs: Publish_Summary_Publishedactions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published site actions`)
},"publish_summary_publishedtowebsite2":/** @type {(inputs: Publish_Summary_Publishedtowebsite2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published to your website`)
},"publish_summary_publishingtowebsite2":/** @type {(inputs: Publish_Summary_Publishingtowebsite2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing to your website`)
},"publish_summary_securityissues1":/** @type {(inputs: Publish_Summary_Securityissues1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Your site has ${i?.count} critical security issue`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Your site has ${i?.count} critical security issues`);
	return /** @type {LocalizedString} */ ("publish_summary_securityIssues");
},"publish_summary_securitytoreview2":/** @type {(inputs: Publish_Summary_Securitytoreview2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.count} security suggestion`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.count} security suggestions`);
	return /** @type {LocalizedString} */ ("publish_summary_securityToReview");
},"publish_tooltip_blocked_critical_publishing":/** @type {(inputs: Publish_Tooltip_Blocked_Critical_PublishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires critical security issues to be addressed before publishing`)
},"publish_tooltip_blocked_critical_updating":/** @type {(inputs: Publish_Tooltip_Blocked_Critical_UpdatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires critical security issues to be addressed before updating`)
},"publish_tooltip_blocked_pii_publishing":/** @type {(inputs: Publish_Tooltip_Blocked_Pii_PublishingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires sensitive data findings to be resolved before publishing`)
},"publish_tooltip_blocked_pii_updating":/** @type {(inputs: Publish_Tooltip_Blocked_Pii_UpdatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires sensitive data findings to be resolved before updating`)
},"publish_tooltip_blocked_scaninprogress_publishing2":/** @type {(inputs: Publish_Tooltip_Blocked_Scaninprogress_Publishing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires a security scan to be completed before publishing`)
},"publish_tooltip_blocked_scaninprogress_updating2":/** @type {(inputs: Publish_Tooltip_Blocked_Scaninprogress_Updating2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires a security scan to be completed before updating`)
},"publish_tooltip_blocked_scanrequired_publishing1":/** @type {(inputs: Publish_Tooltip_Blocked_Scanrequired_Publishing1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires a security scan to be run before publishing`)
},"publish_tooltip_blocked_scanrequired_updating1":/** @type {(inputs: Publish_Tooltip_Blocked_Scanrequired_Updating1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace requires a security scan to be run before updating`)
},"publish_unsaved_description":/** @type {(inputs: Publish_Unsaved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unpublished website info changes. Do you want to discard them?`)
},"publish_unsaved_discard":/** @type {(inputs: Publish_Unsaved_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
},"publish_unsaved_keepediting1":/** @type {(inputs: Publish_Unsaved_Keepediting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep editing`)
},"publish_unsaved_title":/** @type {(inputs: Publish_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved changes`)
},"publish_update_explainer_body":/** @type {(inputs: Publish_Update_Explainer_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`They won’t be visible to users until you publish an update.`)
},"publish_update_explainer_title":/** @type {(inputs: Publish_Update_Explainer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’ve made changes to your project`)
},"publish_updated_subtitle":/** @type {(inputs: Publish_Updated_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’ve made improvements.
Now it’s time to spread the word.`)
},"publish_updated_title":/** @type {(inputs: Publish_Updated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your project is updated`)
},"publish_url_adddomain1":/** @type {(inputs: Publish_Url_Adddomain1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add domain`)
},"publish_url_cancelediting1":/** @type {(inputs: Publish_Url_Cancelediting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel editing`)
},"publish_url_editsubdomain1":/** @type {(inputs: Publish_Url_Editsubdomain1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit subdomain`)
},"publish_url_generatefailed1":/** @type {(inputs: Publish_Url_Generatefailed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't generate a URL.`)
},"publish_url_managedomains1":/** @type {(inputs: Publish_Url_Managedomains1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Manage ${i?.count} domains`)
},"publish_url_retry":/** @type {(inputs: Publish_Url_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
},"publish_url_savefailed1":/** @type {(inputs: Publish_Url_Savefailed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't update the URL. Please try again.`)
},"publish_url_saveurl1":/** @type {(inputs: Publish_Url_Saveurl1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save URL`)
},"publish_visibility_collaboratorscanview2":/** @type {(inputs: Publish_Visibility_Collaboratorscanview2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collaborators on this project will also be able to view.`)
},"publish_visibility_justyourworkspace2":/** @type {(inputs: Publish_Visibility_Justyourworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viewable by workspace only`)
},"publish_visibility_livetoeveryone2":/** @type {(inputs: Publish_Visibility_Livetoeveryone2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live to everyone`)
},"publish_visibility_selectedmembers1":/** @type {(inputs: Publish_Visibility_Selectedmembers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selected members`)
},"publish_visibility_whocanview2":/** @type {(inputs: Publish_Visibility_Whocanview2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who can view your site?`)
},"publish_visitors":/** @type {(inputs: Publish_VisitorsInputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`${i?.formattedVisitors} Visitor`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`${i?.formattedVisitors} Visitors`);
	return /** @type {LocalizedString} */ ("publish_visitors");
},"publish_visitors_hint":/** @type {(inputs: Publish_Visitors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How many people visited your published project in the last 7 days.`)
},"publish_yourwebsiteurl2":/** @type {(inputs: Publish_Yourwebsiteurl2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your website URL`)
},"queueitem_selectedcontextcount3":/** @type {(inputs: Queueitem_Selectedcontextcount3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} selected items`)
},"revertchanges_busyhint2":/** @type {(inputs: Revertchanges_Busyhint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cannot revert while operation in progress (e.g., a chat request)`)
},"revertchanges_cancel1":/** @type {(inputs: Revertchanges_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"revertchanges_deletingdrafthint3":/** @type {(inputs: Revertchanges_Deletingdrafthint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleting draft`)
},"revertchanges_description1":/** @type {(inputs: Revertchanges_Description1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This will revert your project to how it looked on ${i?.dateTime}. Recent changes after this point stay in the chat and can be reapplied anytime.`)
},"revertchanges_mergeddraftdisabledhint4":/** @type {(inputs: Revertchanges_Mergeddraftdisabledhint4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepted drafts can't be reverted`)
},"revertchanges_previewbutton2":/** @type {(inputs: Revertchanges_Previewbutton2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview version`)
},"revertchanges_previewhintdisabled3":/** @type {(inputs: Revertchanges_Previewhintdisabled3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No preview available`)
},"revertchanges_previewhintidle3":/** @type {(inputs: Revertchanges_Previewhintidle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview this version in a new tab`)
},"revertchanges_publishingdrafthint3":/** @type {(inputs: Revertchanges_Publishingdrafthint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing draft`)
},"revertchanges_revert1":/** @type {(inputs: Revertchanges_Revert1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revert`)
},"revertchanges_reverting1":/** @type {(inputs: Revertchanges_Reverting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reverting...`)
},"revertchanges_title1":/** @type {(inputs: Revertchanges_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revert to this version`)
},"roadmaptask_replaced1":/** @type {(inputs: Roadmaptask_Replaced1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replaced:`)
},"roadmaptask_replacedby2":/** @type {(inputs: Roadmaptask_Replacedby2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replaced by`)
},"salespage_accelerate_subtitle1":/** @type {(inputs: Salespage_Accelerate_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sales teams can tailor what the buyer sees, keep it current, and reduce internal bottlenecks that stall deals.`)
},"salespage_accelerate_title1":/** @type {(inputs: Salespage_Accelerate_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accelerate sales cycle and drive revenue`)
},"salespage_connect1_description1":/** @type {(inputs: Salespage_Connect1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pull live context from your CRM, docs, and product tools to build customer-specific demos in minutes.`)
},"salespage_connect1_title1":/** @type {(inputs: Salespage_Connect1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For demos`)
},"salespage_connect2_description1":/** @type {(inputs: Salespage_Connect2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your data to build dashboards your sales and ops teams actually use.`)
},"salespage_connect2_title1":/** @type {(inputs: Salespage_Connect2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For dashboards`)
},"salespage_connect3_description1":/** @type {(inputs: Salespage_Connect3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automate deal desk workflows by connecting your CRM, approvals, and internal systems.`)
},"salespage_connect3_title1":/** @type {(inputs: Salespage_Connect3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For sales workflows`)
},"salespage_connect_subtitle1":/** @type {(inputs: Salespage_Connect_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore all integrations`)
},"salespage_connect_title1":/** @type {(inputs: Salespage_Connect_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to your favorite tools`)
},"salespage_faq1_answer1":/** @type {(inputs: Salespage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can keep everything on brand by using shared components, styles, and reusable sections across pages, in addition to our design systems feature. Teams can standardize core layouts while still making campaign-specific edits.`)
},"salespage_faq1_question1":/** @type {(inputs: Salespage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I keep everything on brand?`)
},"salespage_faq2_answer1":/** @type {(inputs: Salespage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, you do not need engineering. Sales teams can draft, iterate, and publish digital experiences independently, and involve engineering only for deeper integrations or advanced workflows.`)
},"salespage_faq2_question1":/** @type {(inputs: Salespage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need engineering?`)
},"salespage_faq3_answer1":/** @type {(inputs: Salespage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable works with common integrations for analytics, tracking, and lead capture. Teams connect it to their CRM and analytics stack depending on how they measure performance and route form submissions. Learn more about our integrations <connectorsLink>here</connectorsLink>.`)
},"salespage_faq3_question1":/** @type {(inputs: Salespage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What integrations work with Lovable?`)
},"salespage_faq4_answer1":/** @type {(inputs: Salespage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes — and it goes well beyond the basics. Apps built after May 2026 ship with server-side rendering (SSR) so search engines and AI tools like ChatGPT, Claude, and Perplexity can read and index your content immediately. Apps built earlier get pre-rendering automatically, no action required. Lovable also has Semrush built in, so you can ask how your app is performing in search, find keyword opportunities, and act on them without leaving the chat. You can also run an SEO review on demand to check metadata, sitemap, alt text, canonical tags, and more — and fix issues in one click.`)
},"salespage_faq4_question1":/** @type {(inputs: Salespage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable support SEO?`)
},"salespage_faq5_answer1":/** @type {(inputs: Salespage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable can replace a CMS for many landing-page workflows, especially for campaigns that require frequent iteration. Some teams still keep a CMS for blogs or long-form publishing.`)
},"salespage_faq5_question1":/** @type {(inputs: Salespage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can Lovable replace our CMS for landing pages?`)
},"salespage_faq6_answer1":/** @type {(inputs: Salespage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing works through a draft-to-live workflow so teams can review changes before they go live. You can also restrict who has permission to publish.`)
},"salespage_faq6_question1":/** @type {(inputs: Salespage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does publishing work?`)
},"salespage_faq7_answer1":/** @type {(inputs: Salespage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable supports enterprise-grade controls such as role-based access and governed publishing workflows. Teams can limit who can edit, review, and publish.`)
},"salespage_faq7_question1":/** @type {(inputs: Salespage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable secure for enterprise teams?`)
},"salespage_faqtitle2":/** @type {(inputs: Salespage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"salespage_feature1_description1":/** @type {(inputs: Salespage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tailor demos to a buyer's industry, role, and workflow. Adjust flows, permissions, and data so prospects see their reality reflected in the product.`)
},"salespage_feature1_title1":/** @type {(inputs: Salespage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account-specific demos`)
},"salespage_feature2_description1":/** @type {(inputs: Salespage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create dashboards for pipeline, campaign performance, and lead flow so stakeholders can self-serve updates without pulling data manually into slides or reworking spreadsheets.`)
},"salespage_feature2_title1":/** @type {(inputs: Salespage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revenue command center`)
},"salespage_feature3_description1":/** @type {(inputs: Salespage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show buyers what setup, onboarding, and adoption look like for your product and their use cases.`)
},"salespage_feature3_title1":/** @type {(inputs: Salespage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Customer onboarding`)
},"salespage_feature4_description1":/** @type {(inputs: Salespage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a link prospects can click through: recap, tailored workflow, ROI assumptions, and next steps.`)
},"salespage_feature4_title1":/** @type {(inputs: Salespage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interactive follow-ups`)
},"salespage_feature5_description1":/** @type {(inputs: Salespage_Feature5_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Route discount requests, legal review, and custom terms through a single workflow. Keep context attached to the deal, reduce back-and-forth, and move approvals forward without chasing updates across Slack threads and docs.`)
},"salespage_feature5_title1":/** @type {(inputs: Salespage_Feature5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automate deal desk workflows`)
},"salespage_hero_cta1":/** @type {(inputs: Salespage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Book a demo`)
},"salespage_hero_subtitle1":/** @type {(inputs: Salespage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create account-specific demos, ROI calculators, and proof-of-value flows that adapt to the complexity of each buyer.`)
},"salespage_hero_title1":/** @type {(inputs: Salespage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close deals faster`)
},"salespage_meta_description1":/** @type {(inputs: Salespage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create account-specific demos, ROI calculators, and proof-of-value flows that adapt to the complexity of each buyer.`)
},"salespage_meta_title1":/** @type {(inputs: Salespage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Tools for Sales | Best No-Code App Builder for Sales | Lovable`)
},"salespage_step1_description1":/** @type {(inputs: Salespage_Step1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build and update deal assets quickly as the account changes, without rebuilding slides or requesting new collateral.`)
},"salespage_step1_title1":/** @type {(inputs: Salespage_Step1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speed`)
},"salespage_step2_description1":/** @type {(inputs: Salespage_Step2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tailor demos, workflows, and proof points to exact specification so prospects can evaluate fit faster.`)
},"salespage_step2_title1":/** @type {(inputs: Salespage_Step2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Customization`)
},"salespage_step3_description1":/** @type {(inputs: Salespage_Step3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep every demo, calculator, and follow-up current as the deal changes.`)
},"salespage_step3_title1":/** @type {(inputs: Salespage_Step3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Up-to-date`)
},"salespage_unblocks_title1":/** @type {(inputs: Salespage_Unblocks_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How Lovable unblocks sales teams`)
},"security2fabanner_dismiss1":/** @type {(inputs: Security2fabanner_Dismiss1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss banner`)
},"security2fabanner_enable1":/** @type {(inputs: Security2fabanner_Enable1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable 2FA`)
},"security2fabanner_message1":/** @type {(inputs: Security2fabanner_Message1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secure your account with two-factor authentication. Protect your projects and data with an extra layer of security.`)
},"securitychatbadge_description2":/** @type {(inputs: Securitychatbadge_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discussing security issue details`)
},"securitychatbadge_label2":/** @type {(inputs: Securitychatbadge_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explain issue`)
},"securityissuespage_description2":/** @type {(inputs: Securityissuespage_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We use HackerOne to manage vulnerability reporting. Please report any security issues through our <hackeroneLink>HackerOne program</hackeroneLink>, or send an email to <emailLink>vulnerability-disclosure@lovable.dev</emailLink> to receive instructions on how to submit your report.`)
},"securityissuespage_meta_description2":/** @type {(inputs: Securityissuespage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report security vulnerabilities to Lovable through our responsible disclosure program.`)
},"securityissuespage_meta_title2":/** @type {(inputs: Securityissuespage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporting Security Issues | Lovable`)
},"securityissuespage_routing2":/** @type {(inputs: Securityissuespage_Routing2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This program is for security vulnerabilities in Lovable's own products and infrastructure. To report abuse, harmful content, or apps built with Lovable that violate our policies, go to <abuseLink>lovable.dev/abuse</abuseLink>. For account, billing, or product help, visit <supportLink>lovable.dev/support</supportLink>.`)
},"securityissuespage_title2":/** @type {(inputs: Securityissuespage_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporting security issues`)
},"securitypage_compliance_title1":/** @type {(inputs: Securitypage_Compliance_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compliant and certified`)
},"securitypage_controls_access_description1":/** @type {(inputs: Securitypage_Controls_Access_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable integrates with SAML and OIDC providers including Okta, Azure AD, and Google. SCIM supports automated provisioning and deprovisioning. Permissions are role-based and enforced server-side across viewing, editing, approving, and publishing.`)
},"securitypage_controls_access_title1":/** @type {(inputs: Securitypage_Controls_Access_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Access and control`)
},"securitypage_controls_guardrails_description1":/** @type {(inputs: Securitypage_Controls_Guardrails_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editing, approval, and publishing are separate permissions. Public access is controlled by role and environment settings, so teams can move quickly without risking accidental exposure.`)
},"securitypage_controls_guardrails_title1":/** @type {(inputs: Securitypage_Controls_Guardrails_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardrails for building & publishing`)
},"securitypage_controls_infrastructure_description1":/** @type {(inputs: Securitypage_Controls_Infrastructure_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Cloud is protected by web application firewall (WAF) controls, network isolation, encrypted data storage, and adaptive rate limiting at the IP, user, and workspace level.`)
},"securitypage_controls_infrastructure_title1":/** @type {(inputs: Securitypage_Controls_Infrastructure_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Protected infrastructure`)
},"securitypage_controls_isolation_description1":/** @type {(inputs: Securitypage_Controls_Isolation_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each workspace and project is logically separated. Customer data is not accessible across accounts. Environment boundaries are explicitly defined and evaluated before changes are published, ensuring separation between development and production.`)
},"securitypage_controls_isolation_title1":/** @type {(inputs: Securitypage_Controls_Isolation_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolation by design`)
},"securitypage_controls_monitoring_description1":/** @type {(inputs: Securitypage_Controls_Monitoring_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable continuously monitors platform activity for misuse, anomalous behavior, and compromise. Automated systems enforce rate limits and detect abuse across users and workspaces, with high-risk activity reviewed by our trust and safety team.`)
},"securitypage_controls_monitoring_title1":/** @type {(inputs: Securitypage_Controls_Monitoring_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuous monitoring & abuse detection`)
},"securitypage_controls_notraining_description2":/** @type {(inputs: Securitypage_Controls_Notraining_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We do not use customer prompts, code, or workspace data to train Lovable models. When we work with AI providers, contractual agreements restrict training and retention of customer data. Your work stays your work.`)
},"securitypage_controls_notraining_title2":/** @type {(inputs: Securitypage_Controls_Notraining_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your data is not used to train models`)
},"securitypage_controls_residency_description1":/** @type {(inputs: Securitypage_Controls_Residency_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Cloud supports regional data hosting in the EU, US, and Australia. Customer data remains in the region you select and does not move across regions by default. We're transparent about our infrastructure and subprocessors, so you always know where your data lives and how it's handled.`)
},"securitypage_controls_residency_title1":/** @type {(inputs: Securitypage_Controls_Residency_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data residency`)
},"securitypage_controls_scanning_description1":/** @type {(inputs: Securitypage_Controls_Scanning_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable runs a basic security scan automatically every time you publish, checking database configurations, RLS rules, cloud project settings, and known misconfiguration patterns in about 10-15 seconds. For deeper coverage, the deep security scan is available on demand and takes about 3 minutes. Workspace admins can enable auto-fix to let the agent resolve non-breaking findings during basic scans, and can block publishing on critical findings. Business and Enterprise workspaces can schedule recurring deep scans across all projects.`)
},"securitypage_controls_scanning_title1":/** @type {(inputs: Securitypage_Controls_Scanning_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic security scanning`)
},"securitypage_controls_secrets_description1":/** @type {(inputs: Securitypage_Controls_Secrets_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secrets are encrypted at rest and access-controlled by role. They are not exposed in plaintext in logs or interfaces. Access is limited to authorized environments and actions.`)
},"securitypage_controls_secrets_title1":/** @type {(inputs: Securitypage_Controls_Secrets_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secrets are handled securely`)
},"securitypage_controls_title1":/** @type {(inputs: Securitypage_Controls_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterprise security controls`)
},"securitypage_faq10_answer1":/** @type {(inputs: Securitypage_Faq10_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secrets are encrypted at rest and scoped to specific environments. Access to secrets is role-controlled and auditable. Secrets can be rotated or revoked without requiring full system redeployment. Integrations execute within predefined permission boundaries to reduce unintended credential exposure.`)
},"securitypage_faq10_question1":/** @type {(inputs: Securitypage_Faq10_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How are secrets and API credentials managed?`)
},"securitypage_faq11_answer1":/** @type {(inputs: Securitypage_Faq11_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. A basic security scan runs automatically every time you publish, covering database configurations, RLS policies, and cloud project settings (~10-15 seconds). A deep security scan is available on demand and analyzes your full codebase (~3 minutes). Workspace admins can enable auto-fix to have the agent resolve non-breaking findings automatically, and can configure publish blocking for critical issues. Dependency checks run continuously in the background on every edit. Business and Enterprise admins can schedule recurring deep scans across all workspace projects.`)
},"securitypage_faq11_question1":/** @type {(inputs: Securitypage_Faq11_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable perform automated security scanning?`)
},"securitypage_faq12_answer1":/** @type {(inputs: Securitypage_Faq12_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable supports SOC 2 and GDPR requirements and provides security documentation and data protection agreements for enterprise review.`)
},"securitypage_faq12_question1":/** @type {(inputs: Securitypage_Faq12_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable SOC 2 or GDPR compliant?`)
},"securitypage_faq1_answer1":/** @type {(inputs: Securitypage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Customer data is hosted in Lovable Cloud in supported regions including the EU, US, and Australia. Data residency is region-specific and does not move across regions by default.`)
},"securitypage_faq1_question1":/** @type {(inputs: Securitypage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where is customer data stored?`)
},"securitypage_faq2_answer1":/** @type {(inputs: Securitypage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Customer prompts, code, and workspace data are not used to train Lovable models. Where third-party AI providers are used, contractual agreements restrict training and retention of customer data.`)
},"securitypage_faq2_question1":/** @type {(inputs: Securitypage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is customer data used to train AI?`)
},"securitypage_faq3_answer1":/** @type {(inputs: Securitypage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is a multi-tenant platform with logical isolation between workspaces and projects. Customer data is not accessible across accounts. Isolation controls are enforced at both the application and infrastructure layers.`)
},"securitypage_faq3_question1":/** @type {(inputs: Securitypage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable multi-tenant, and how is customer data isolated?`)
},"securitypage_faq4_answer1":/** @type {(inputs: Securitypage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable works with a limited set of infrastructure and AI subprocessors. All subprocessors are covered under contractual data protection agreements. A current list of subprocessors is available upon request.`)
},"securitypage_faq4_question1":/** @type {(inputs: Securitypage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which subprocessors does Lovable use?`)
},"securitypage_faq5_answer1":/** @type {(inputs: Securitypage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Lovable does not clone customer Git repositories, access application code inside your environments, or require internal CI/CD access. Your source code, repositories, and production infrastructure remain inside your organization's existing security perimeter. Lovable does not deploy agents inside customer production environments or introduce inbound network connections.`)
},"securitypage_faq5_question1":/** @type {(inputs: Securitypage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable access or clone our source code?`)
},"securitypage_faq6_answer1":/** @type {(inputs: Securitypage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Lovable does not require direct access to customer CI/CD pipelines or production infrastructure. It does not deploy agents inside production environments or introduce inbound network connections. All integrations operate within defined permission boundaries.`)
},"securitypage_faq6_question1":/** @type {(inputs: Securitypage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable require access to our CI/CD pipelines or production infrastructure?`)
},"securitypage_faq7_answer1":/** @type {(inputs: Securitypage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing permissions are enforced server-side and cannot be bypassed via client-side requests. Editing, approval, and publishing are separate role-based permissions. Production publishing can require explicit approval, and all publishing events are logged with user attribution.`)
},"securitypage_faq7_question1":/** @type {(inputs: Securitypage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How are publishing controls enforced?`)
},"securitypage_faq8_answer1":/** @type {(inputs: Securitypage_Faq8_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable integrates with SAML and OIDC identity providers and supports SCIM for automated provisioning and deprovisioning. Access is role-based, with permissions explicitly defined for viewing, editing, approving, and publishing. All authorization checks are evaluated server-side at request time.`)
},"securitypage_faq8_question1":/** @type {(inputs: Securitypage_Faq8_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does Lovable enforce role-based access control (RBAC)?`)
},"securitypage_faq9_answer1":/** @type {(inputs: Securitypage_Faq9_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Lovable supports least-privilege access through role-based permissions and integration with enterprise identity providers. Organizations can define granular roles for editing, approving, and publishing, ensuring users receive only the access required for their responsibilities. Access policies align with organizational identity and workspace configuration settings.`)
},"securitypage_faq9_question1":/** @type {(inputs: Securitypage_Faq9_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Lovable support least-privilege access?`)
},"securitypage_founder_guide_cta1":/** @type {(inputs: Securitypage_Founder_Guide_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read more`)
},"securitypage_founder_guide_description1":/** @type {(inputs: Securitypage_Founder_Guide_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What investors actually look for in a technical due diligence review — and how to pass it.`)
},"securitypage_founder_guide_title1":/** @type {(inputs: Securitypage_Founder_Guide_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your guide to security as a Lovable founder`)
},"securitypage_founder_pentest_cta1":/** @type {(inputs: Securitypage_Founder_Pentest_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read more`)
},"securitypage_founder_pentest_description1":/** @type {(inputs: Securitypage_Founder_Pentest_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get an audit-ready report for SOC 2, ISO 27001, and investor due diligence, proving your app is secure.`)
},"securitypage_founder_pentest_title1":/** @type {(inputs: Securitypage_Founder_Pentest_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI penetration testing`)
},"securitypage_founder_scanners_description1":/** @type {(inputs: Securitypage_Founder_Scanners_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A basic security scan runs automatically before every publish. Run a deep AI-powered scan on demand to analyze your full codebase. Dependency checks run continuously in the background as you build.`)
},"securitypage_founder_scanners_title1":/** @type {(inputs: Securitypage_Founder_Scanners_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find vulnerabilities before they find you`)
},"securitypage_founder_title1":/** @type {(inputs: Securitypage_Founder_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Founder security`)
},"securitypage_hero_primarycta2":/** @type {(inputs: Securitypage_Hero_Primarycta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trust center`)
},"securitypage_hero_secondarycta2":/** @type {(inputs: Securitypage_Hero_Secondarycta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report an issue`)
},"securitypage_hero_subtitle1":/** @type {(inputs: Securitypage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose where your data lives, enforce SSO and role-based access, control publishing with approvals, and keep your code and prompts out of model training.`)
},"securitypage_hero_title1":/** @type {(inputs: Securitypage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secure by design`)
},"securitypage_meta_description1":/** @type {(inputs: Securitypage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover Lovable's enterprise-grade security features. Learn how we protect your data with advanced threat detection, compliance standards, and real-time security monitoring.`)
},"securitypage_meta_title1":/** @type {(inputs: Securitypage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security at Lovable | Build Apps Faster`)
},"selectedelement_linelocation2":/** @type {(inputs: Selectedelement_Linelocation2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line} in ${i?.file}`)
},"seoaeopage_beginning_titlemain3":/** @type {(inputs: Seoaeopage_Beginning_Titlemain3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`beginning`)
},"seoaeopage_beginning_titleprefix3":/** @type {(inputs: Seoaeopage_Beginning_Titleprefix3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building is just the`)
},"seoaeopage_cases_card1_description2":/** @type {(inputs: Seoaeopage_Cases_Card1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your new app ships with SSR out of the box. Meta tags, Open Graph data, and structured data will be flagged in the SEO review and can be added in one click.`)
},"seoaeopage_cases_card1_title2":/** @type {(inputs: Seoaeopage_Cases_Card1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch a new app that Google can index`)
},"seoaeopage_cases_card2_description2":/** @type {(inputs: Seoaeopage_Cases_Card2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pre-rendering is already live. Your content is now accessible to crawlers — no migration, no manual work.`)
},"seoaeopage_cases_card2_title2":/** @type {(inputs: Seoaeopage_Cases_Card2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make an existing app discoverable without changing anything`)
},"seoaeopage_cases_card3_description2":/** @type {(inputs: Seoaeopage_Cases_Card3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type the question in chat and get your actual keyword rankings back from Semrush data.`)
},"seoaeopage_cases_card3_title2":/** @type {(inputs: Seoaeopage_Cases_Card3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask "what am I ranking for?" and get a real answer`)
},"seoaeopage_cases_card4_description2":/** @type {(inputs: Seoaeopage_Cases_Card4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semrush surfaces terms people use to find apps like yours, then builds landing pages targeting those terms – right in the chat.`)
},"seoaeopage_cases_card4_title2":/** @type {(inputs: Seoaeopage_Cases_Card4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find keyword opportunities and build pages to capture them`)
},"seoaeopage_cases_card5_description2":/** @type {(inputs: Seoaeopage_Cases_Card5_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable optimizes your content structure through structured markdown, so your apps are readable by ChatGPT, Perplexity, and other AI-powered answers.`)
},"seoaeopage_cases_card5_title2":/** @type {(inputs: Seoaeopage_Cases_Card5_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get your app recommended by AI search tools`)
},"seoaeopage_cases_card6_description2":/** @type {(inputs: Seoaeopage_Cases_Card6_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your app against best practices before or after publishing. Fix issues with one click and let the agent handle it for you.`)
},"seoaeopage_cases_card6_title2":/** @type {(inputs: Seoaeopage_Cases_Card6_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run a full SEO review whenever you need one`)
},"seoaeopage_cases_title2":/** @type {(inputs: Seoaeopage_Cases_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What’s possible with Lovable’s SEO features`)
},"seoaeopage_faq1_answer2":/** @type {(inputs: Seoaeopage_Faq1_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New apps are built on TanStack Start, which supports full server-side rendering (SSR). This means your pages are rendered as complete HTML before they reach the browser, so search engines and AI crawlers can read and index your content immediately. Apps built on the previous tech stack (React and Tailwind CSS) use pre-rendering instead, which generates static HTML snapshots of your pages for crawlers to access.`)
},"seoaeopage_faq1_question2":/** @type {(inputs: Seoaeopage_Faq1_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How does the new tech stack compare to the previous one?`)
},"seoaeopage_faq2_answer2":/** @type {(inputs: Seoaeopage_Faq2_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not right now. Existing projects get pre-rendering automatically, which makes your content accessible to crawlers. Full SSR is currently only available for new projects built on TanStack Start.`)
},"seoaeopage_faq2_question2":/** @type {(inputs: Seoaeopage_Faq2_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I migrate my existing project to be server-side rendered?`)
},"seoaeopage_faq3_answer2":/** @type {(inputs: Seoaeopage_Faq3_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chatting with Semrush data uses your regular build credits, and comes at no extra cost through August 15, 2026. No Semrush account required, no separate billing.`)
},"seoaeopage_faq3_question2":/** @type {(inputs: Seoaeopage_Faq3_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What does it cost to chat with Semrush data?`)
},"seoaeopage_faq4_answer2":/** @type {(inputs: Seoaeopage_Faq4_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running an SEO review is free on all plans. Applying the recommendations (fixing issues) uses regular build credits, the same as any other edit in the builder.`)
},"seoaeopage_faq4_question2":/** @type {(inputs: Seoaeopage_Faq4_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How much does it cost to run an SEO review?`)
},"seoaeopage_faq5_answer2":/** @type {(inputs: Seoaeopage_Faq5_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All of them. SSR, pre-rendering, and the SEO review are free on every plan, including the free one. Semrush data in the chat is also available to all users and uses regular build credits.`)
},"seoaeopage_faq5_question2":/** @type {(inputs: Seoaeopage_Faq5_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which plans have access to these features?`)
},"seoaeopage_faq6_answer2":/** @type {(inputs: Seoaeopage_Faq6_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Every Lovable user gets access to Semrush search data directly in the builder chat through their build credits. If you want deeper access - additional API endpoints or building your own SEO dashboard inside your app - you can connect your own Semrush account through API as you would with any other API connection.`)
},"seoaeopage_faq6_question2":/** @type {(inputs: Seoaeopage_Faq6_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need a Semrush account?`)
},"seoaeopage_faq7_answer2":/** @type {(inputs: Seoaeopage_Faq7_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI tools like ChatGPT, Claude, and Perplexity are becoming a major way people discover products and services. Lovable can now optimize your app's content structure, e.g. semantic HTML, structured data, and structured markdown output so these tools can read, understand, and recommend your app in their answers.`)
},"seoaeopage_faq7_question2":/** @type {(inputs: Seoaeopage_Faq7_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is AI search visibility?`)
},"seoaeopage_faq8_answer2":/** @type {(inputs: Seoaeopage_Faq8_Answer2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Both, but differently. New apps get full SSR. Existing apps get pre-rendering. Both make your content accessible to search engines and AI crawlers. The SEO review and Semrush chat work for all apps regardless of tech stack.`)
},"seoaeopage_faq8_question2":/** @type {(inputs: Seoaeopage_Faq8_Question2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does this work for existing apps, or only new ones?`)
},"seoaeopage_faqtitle3":/** @type {(inputs: Seoaeopage_Faqtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"seoaeopage_fix_description2":/** @type {(inputs: Seoaeopage_Fix_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable can review your app's discoverability whenever you're ready: performance, metadata, content structure, and more.`)
},"seoaeopage_fix_item1_description2":/** @type {(inputs: Seoaeopage_Fix_Item1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run a review before publishing or anytime you want a check-up. Covers performance, metadata quality, heading structure, image alt text, canonical tags, Open Graph tags, robots, and sitemap status. Free on all tiers.`)
},"seoaeopage_fix_item1_title2":/** @type {(inputs: Seoaeopage_Fix_Item1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO & AI search review on demand`)
},"seoaeopage_fix_item2_description2":/** @type {(inputs: Seoaeopage_Fix_Item2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix the recommendations in one click, using regular build credits.`)
},"seoaeopage_fix_item2_title2":/** @type {(inputs: Seoaeopage_Fix_Item2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-click fixes`)
},"seoaeopage_fix_title2":/** @type {(inputs: Seoaeopage_Fix_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`and let Lovable fix it for you`)
},"seoaeopage_found_card1_description2":/** @type {(inputs: Seoaeopage_Found_Card1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages are rendered as complete HTML before they reach the browser, so Google, ChatGPT, and Perplexity can discover your content immediately. Free on all tiers.`)
},"seoaeopage_found_card1_title2":/** @type {(inputs: Seoaeopage_Found_Card1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server-side rendering for new apps`)
},"seoaeopage_found_card2_description2":/** @type {(inputs: Seoaeopage_Found_Card2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Static HTML snapshots are generated automatically for all Lovable apps built on our previous tech stack. No opt-in or migration required. Free on all tiers.`)
},"seoaeopage_found_card2_title2":/** @type {(inputs: Seoaeopage_Found_Card2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pre-rendering for existing apps`)
},"seoaeopage_found_card3_description2":/** @type {(inputs: Seoaeopage_Found_Card3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Social preview links on e.g. LinkedIn, Slack, WhatsApp, and X are now unique per page.`)
},"seoaeopage_found_card3_title2":/** @type {(inputs: Seoaeopage_Found_Card3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richer social preview links`)
},"seoaeopage_found_card4_description2":/** @type {(inputs: Seoaeopage_Found_Card4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Structured markdown output, semantic HTML, and structured data help your app surface in ChatGPT, Claude, Perplexity, and other AI search tools.`)
},"seoaeopage_found_card4_title2":/** @type {(inputs: Seoaeopage_Found_Card4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI search visibility`)
},"seoaeopage_found_description2":/** @type {(inputs: Seoaeopage_Found_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New apps ship with full server-side rendering – real HTML that search engines and AI crawlers can read immediately. Apps built on the previous tech stack get pre-rendered snapshots so crawlers can access your content too.`)
},"seoaeopage_found_subtitle2":/** @type {(inputs: Seoaeopage_Found_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your apps are discoverable the moment you publish`)
},"seoaeopage_found_title2":/** @type {(inputs: Seoaeopage_Found_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built to be found`)
},"seoaeopage_hero_cta2":/** @type {(inputs: Seoaeopage_Hero_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building`)
},"seoaeopage_hero_subtitle2":/** @type {(inputs: Seoaeopage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable apps ship search-ready, discoverable on Google and in AI tools like ChatGPT, Claude and Perplexity. No SEO expertise required.`)
},"seoaeopage_hero_title2":/** @type {(inputs: Seoaeopage_Hero_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build apps people can actually find`)
},"seoaeopage_meta_description2":/** @type {(inputs: Seoaeopage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build apps that get found on Google, ChatGPT, and Perplexity — no SEO expertise required. Powered by Semrush, with on-demand reviews and one-click fixes.`)
},"seoaeopage_meta_title2":/** @type {(inputs: Seoaeopage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO and AI search for apps built with AI | Lovable`)
},"seoaeopage_review_imagealt3":/** @type {(inputs: Seoaeopage_Review_Imagealt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO review dashboard showing important issues, fixed checks, and indexability status`)
},"seoaeopage_review_title2":/** @type {(inputs: Seoaeopage_Review_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run an SEO & AI search review anytime`)
},"seoaeopage_semrush_chat_done2":/** @type {(inputs: Seoaeopage_Semrush_Chat_Done2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done! /vibe-coding is live with optimized title, meta, and H1.`)
},"seoaeopage_semrush_chat_pagesuggestion3":/** @type {(inputs: Seoaeopage_Semrush_Chat_Pagesuggestion3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're not ranking for vibe coding. 12k/mo. Want me to build a page?`)
},"seoaeopage_semrush_chat_poweredby3":/** @type {(inputs: Seoaeopage_Semrush_Chat_Poweredby3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powered by Semrush`)
},"seoaeopage_semrush_chat_read2":/** @type {(inputs: Seoaeopage_Semrush_Chat_Read2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read`)
},"seoaeopage_semrush_chat_ready2":/** @type {(inputs: Seoaeopage_Semrush_Chat_Ready2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Researched keywords and ready to assist`)
},"seoaeopage_semrush_chat_recommendation2":/** @type {(inputs: Seoaeopage_Semrush_Chat_Recommendation2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Based on your traffic and competitors, target "vibe coding" (12k/mo) and "ai app generator" (9k/mo).`)
},"seoaeopage_semrush_chat_searching2":/** @type {(inputs: Seoaeopage_Semrush_Chat_Searching2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching Semrush data...`)
},"seoaeopage_semrush_chat_thought2":/** @type {(inputs: Seoaeopage_Semrush_Chat_Thought2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thought for 10s`)
},"seoaeopage_semrush_chat_useraccept3":/** @type {(inputs: Seoaeopage_Semrush_Chat_Useraccept3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, please!`)
},"seoaeopage_semrush_chat_userquestion3":/** @type {(inputs: Seoaeopage_Semrush_Chat_Userquestion3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What keywords should I target?`)
},"seoaeopage_semrush_credits_description2":/** @type {(inputs: Seoaeopage_Semrush_Credits_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chatting with Semrush data costs regular build credits — no separate billing, no Semrush account required. Chatting with Semrush data comes at no extra cost through August 15, 2026.`)
},"seoaeopage_semrush_credits_title2":/** @type {(inputs: Seoaeopage_Semrush_Credits_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uses your regular build credits.`)
},"seoaeopage_semrush_description2":/** @type {(inputs: Seoaeopage_Semrush_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real keyword rankings, traffic insights, and competitive intelligence from Semrush available directly in the builder chat. No Semrush account needed.`)
},"seoaeopage_semrush_logoalt3":/** @type {(inputs: Seoaeopage_Semrush_Logoalt3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semrush logo`)
},"seoaeopage_semrush_subtitle2":/** @type {(inputs: Seoaeopage_Semrush_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask how you're performing in search and act on it directly in chat`)
},"seoaeopage_semrush_title2":/** @type {(inputs: Seoaeopage_Semrush_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your discoverability cofounder`)
},"seoaeopage_video_arialabel3":/** @type {(inputs: Seoaeopage_Video_Arialabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO and AI search overview`)
},"seoaeopage_video_introline13":/** @type {(inputs: Seoaeopage_Video_Introline13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You built something worth finding.`)
},"seoaeopage_video_introline23":/** @type {(inputs: Seoaeopage_Video_Introline23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Now Lovable helps you close the gap between "published" and "discovered", right from where you built it.`)
},"seofixbadge_fixall3":/** @type {(inputs: Seofixbadge_Fixall3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix all SEO issues`)
},"seofixbadge_fixissue3":/** @type {(inputs: Seofixbadge_Fixissue3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try to fix SEO issue`)
},"seofixbadge_fixissuenamed4":/** @type {(inputs: Seofixbadge_Fixissuenamed4Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Try to fix SEO issue: ${i?.name}`)
},"seofixbadge_showless3":/** @type {(inputs: Seofixbadge_Showless3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
},"seofixbadge_showmore3":/** @type {(inputs: Seofixbadge_Showmore3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
},"settings_common_backtosettingsmenu3":/** @type {(inputs: Settings_Common_Backtosettingsmenu3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to settings menu`)
},"settings_common_goback1":/** @type {(inputs: Settings_Common_Goback1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go back`)
},"settings_common_opendocs1":/** @type {(inputs: Settings_Common_Opendocs1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open docs`)
},"settings_common_settings":/** @type {(inputs: Settings_Common_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
},"settings_formfooter_cancel1":/** @type {(inputs: Settings_Formfooter_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"settings_formfooter_unsavedchanges2":/** @type {(inputs: Settings_Formfooter_Unsavedchanges2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved changes`)
},"settings_formfooter_update1":/** @type {(inputs: Settings_Formfooter_Update1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update`)
},"settingssidebar_item_accesstokens2":/** @type {(inputs: Settingssidebar_Item_Accesstokens2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Access tokens`)
},"settingssidebar_item_announcements1":/** @type {(inputs: Settingssidebar_Item_Announcements1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcements`)
},"settingssidebar_item_auditlogs2":/** @type {(inputs: Settingssidebar_Item_Auditlogs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit logs`)
},"settingssidebar_item_buildsecrets2":/** @type {(inputs: Settingssidebar_Item_Buildsecrets2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build secrets`)
},"settingssidebar_item_cloudaibalance3":/** @type {(inputs: Settingssidebar_Item_Cloudaibalance3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cloud & AI balance`)
},"settingssidebar_item_connectors1":/** @type {(inputs: Settingssidebar_Item_Connectors1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectors`)
},"settingssidebar_item_dataexports2":/** @type {(inputs: Settingssidebar_Item_Dataexports2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data exports`)
},"settingssidebar_item_designsystems2":/** @type {(inputs: Settingssidebar_Item_Designsystems2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design systems`)
},"settingssidebar_item_devicesapps2":/** @type {(inputs: Settingssidebar_Item_Devicesapps2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devices & apps`)
},"settingssidebar_item_domains1":/** @type {(inputs: Settingssidebar_Item_Domains1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domains`)
},"settingssidebar_item_general1":/** @type {(inputs: Settingssidebar_Item_General1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
},"settingssidebar_item_git1":/** @type {(inputs: Settingssidebar_Item_Git1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git`)
},"settingssidebar_item_groups1":/** @type {(inputs: Settingssidebar_Item_Groups1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groups`)
},"settingssidebar_item_identity1":/** @type {(inputs: Settingssidebar_Item_Identity1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identity`)
},"settingssidebar_item_insights1":/** @type {(inputs: Settingssidebar_Item_Insights1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insights`)
},"settingssidebar_item_knowledge1":/** @type {(inputs: Settingssidebar_Item_Knowledge1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knowledge`)
},"settingssidebar_item_mcpserver2":/** @type {(inputs: Settingssidebar_Item_Mcpserver2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP server`)
},"settingssidebar_item_memory1":/** @type {(inputs: Settingssidebar_Item_Memory1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory`)
},"settingssidebar_item_people1":/** @type {(inputs: Settingssidebar_Item_People1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People`)
},"settingssidebar_item_plan1":/** @type {(inputs: Settingssidebar_Item_Plan1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan`)
},"settingssidebar_item_planscredits2":/** @type {(inputs: Settingssidebar_Item_Planscredits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plans & credits`)
},"settingssidebar_item_planscreditusage3":/** @type {(inputs: Settingssidebar_Item_Planscreditusage3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plans & credit usage`)
},"settingssidebar_item_privacysecurity2":/** @type {(inputs: Settingssidebar_Item_Privacysecurity2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy & security`)
},"settingssidebar_item_privateregistry2":/** @type {(inputs: Settingssidebar_Item_Privateregistry2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private registry`)
},"settingssidebar_item_projectsettings2":/** @type {(inputs: Settingssidebar_Item_Projectsettings2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project settings`)
},"settingssidebar_item_recommendations1":/** @type {(inputs: Settingssidebar_Item_Recommendations1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recommendations`)
},"settingssidebar_item_securitycenter2":/** @type {(inputs: Settingssidebar_Item_Securitycenter2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security center`)
},"settingssidebar_item_skills1":/** @type {(inputs: Settingssidebar_Item_Skills1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skills`)
},"settingssidebar_item_templates1":/** @type {(inputs: Settingssidebar_Item_Templates1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Templates`)
},"settingssidebar_item_thisdevice2":/** @type {(inputs: Settingssidebar_Item_Thisdevice2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This device`)
},"settingssidebar_item_thismac2":/** @type {(inputs: Settingssidebar_Item_Thismac2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This Mac`)
},"settingssidebar_item_usagelimitsalerts3":/** @type {(inputs: Settingssidebar_Item_Usagelimitsalerts3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage limits & alerts`)
},"settingssidebar_item_workspace1":/** @type {(inputs: Settingssidebar_Item_Workspace1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace`)
},"settingssidebar_item_workspacedomains2":/** @type {(inputs: Settingssidebar_Item_Workspacedomains2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace domains`)
},"settingssidebar_item_youraccount2":/** @type {(inputs: Settingssidebar_Item_Youraccount2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account`)
},"settingssidebar_section_account1":/** @type {(inputs: Settingssidebar_Section_Account1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account`)
},"settingssidebar_section_builddeploy2":/** @type {(inputs: Settingssidebar_Section_Builddeploy2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build & deploy`)
},"settingssidebar_section_customization1":/** @type {(inputs: Settingssidebar_Section_Customization1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Customization`)
},"settingssidebar_section_membersaccess2":/** @type {(inputs: Settingssidebar_Section_Membersaccess2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Members & access`)
},"settingssidebar_section_project1":/** @type {(inputs: Settingssidebar_Section_Project1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project`)
},"settingssidebar_section_securitycompliance2":/** @type {(inputs: Settingssidebar_Section_Securitycompliance2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security & compliance`)
},"settingssidebar_section_workspace1":/** @type {(inputs: Settingssidebar_Section_Workspace1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace`)
},"share_activelinkcount2":/** @type {(inputs: Share_Activelinkcount2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} active`)
},"share_addedtoproject2":/** @type {(inputs: Share_Addedtoproject2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} was added to the project`)
},"share_admindescription1":/** @type {(inputs: Share_Admindescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full access to project`)
},"share_adminrole1":/** @type {(inputs: Share_Adminrole1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
},"share_alreadyhasaccessnudge3":/** @type {(inputs: Share_Alreadyhasaccessnudge3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} already has access. We sent them a nudge to check out the project.`)
},"share_alreadyinvitedreminder2":/** @type {(inputs: Share_Alreadyinvitedreminder2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} has already been invited. We sent them a reminder.`)
},"share_approve":/** @type {(inputs: Share_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
},"share_cancel":/** @type {(inputs: Share_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"share_canedit1":/** @type {(inputs: Share_Canedit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can edit`)
},"share_caneditdescription2":/** @type {(inputs: Share_Caneditdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit the project and its settings`)
},"share_canview1":/** @type {(inputs: Share_Canview1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can view`)
},"share_canviewdescription2":/** @type {(inputs: Share_Canviewdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can view project but can’t modify`)
},"share_copied":/** @type {(inputs: Share_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied!`)
},"share_copyinvitelink2":/** @type {(inputs: Share_Copyinvitelink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy invite link`)
},"share_copylink1":/** @type {(inputs: Share_Copylink1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link`)
},"share_copypreviewlink2":/** @type {(inputs: Share_Copypreviewlink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy preview link`)
},"share_createpreviewlink2":/** @type {(inputs: Share_Createpreviewlink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create preview link`)
},"share_decline":/** @type {(inputs: Share_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decline`)
},"share_declineall1":/** @type {(inputs: Share_Declineall1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decline all`)
},"share_deletelink1":/** @type {(inputs: Share_Deletelink1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete link`)
},"share_deletelinkconfirmdescription3":/** @type {(inputs: Share_Deletelinkconfirmdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This link will stop working for anyone who has it. It can take up to a minute to take effect everywhere, and it can’t be undone.`)
},"share_deletelinkconfirmtitle3":/** @type {(inputs: Share_Deletelinkconfirmtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this link?`)
},"share_editorrequiredtooltip2":/** @type {(inputs: Share_Editorrequiredtooltip2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need to be an editor to change the visibility of your project.`)
},"share_expiresindays2":/** @type {(inputs: Share_Expiresindays2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Expires in ${i?.count} day`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Expires in ${i?.count} days`);
	return /** @type {LocalizedString} */ ("share_expiresInDays");
},"share_expiresinhours2":/** @type {(inputs: Share_Expiresinhours2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Expires in ${i?.count} hour`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Expires in ${i?.count} hours`);
	return /** @type {LocalizedString} */ ("share_expiresInHours");
},"share_externalcollaboratorpill2":/** @type {(inputs: Share_Externalcollaboratorpill2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`External collaborator (not a member of your workspace)`)
},"share_externalconfirm_andmore2":/** @type {(inputs: Share_Externalconfirm_Andmore2Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`and ${i?.count} more...`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`and ${i?.count} more...`);
	return /** @type {LocalizedString} */ ("share_externalConfirm_andMore");
},"share_externalconfirm_intro1":/** @type {(inputs: Share_Externalconfirm_Intro1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`This external collaborator is not a member of your workspace. Editors and above can see and edit everything in this project including the chat history, code, and previews. Viewers can only see the project but cannot use the chat.`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`These external collaborators are not a member of your workspace. Editors and above can see and edit everything in this project including the chat history, code, and previews. Viewers can only see the project but cannot use the chat.`);
	return /** @type {LocalizedString} */ ("share_externalConfirm_intro");
},"share_externalconfirm_managehint2":/** @type {(inputs: Share_Externalconfirm_Managehint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can manage collaborators anytime from the Share menu.`)
},"share_externalconfirm_title1":/** @type {(inputs: Share_Externalconfirm_Title1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Invite external collaborator?`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Invite ${i?.count} external collaborators?`);
	return /** @type {LocalizedString} */ ("share_externalConfirm_title");
},"share_failedtodeclinerequests3":/** @type {(inputs: Share_Failedtodeclinerequests3Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`Failed to decline ${i?.count} request`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`Failed to decline ${i?.count} requests`);
	return /** @type {LocalizedString} */ ("share_failedToDeclineRequests");
},"share_failedtoinvite2":/** @type {(inputs: Share_Failedtoinvite2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed to invite ${i?.email}`)
},"share_failedtoloadlinks3":/** @type {(inputs: Share_Failedtoloadlinks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load your links`)
},"share_failedtoshare2":/** @type {(inputs: Share_Failedtoshare2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to share`)
},"share_foldercontrolledtooltip2":/** @type {(inputs: Share_Foldercontrolledtooltip2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project visibility is controlled by its folder. Remove the project from the folder to change it.`)
},"share_generalaccess1":/** @type {(inputs: Share_Generalaccess1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General project access`)
},"share_generatinglink1":/** @type {(inputs: Share_Generatinglink1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating link...`)
},"share_guestcomments1":/** @type {(inputs: Share_Guestcomments1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guest comments`)
},"share_guestcommentshint2":/** @type {(inputs: Share_Guestcommentshint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let viewers leave comments on the preview`)
},"share_guestcommentsoff2":/** @type {(inputs: Share_Guestcommentsoff2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guest comments off`)
},"share_guestcommentson2":/** @type {(inputs: Share_Guestcommentson2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guest comments on`)
},"share_invalidemail1":/** @type {(inputs: Share_Invalidemail1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid email address`)
},"share_invalidemaildescriptionmultiple3":/** @type {(inputs: Share_Invalidemaildescriptionmultiple3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One or more email addresses are invalid. Please check and try again.`)
},"share_invalidemaildescriptionsingle3":/** @type {(inputs: Share_Invalidemaildescriptionsingle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please check the email address and try again.`)
},"share_invalidemailitem2":/** @type {(inputs: Share_Invalidemailitem2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is not a valid email.`)
},"share_invitationaccepted1":/** @type {(inputs: Share_Invitationaccepted1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitation accepted!`)
},"share_invitationaccepteddescription2":/** @type {(inputs: Share_Invitationaccepteddescription2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You now have access to “${i?.name}”.`)
},"share_invitationdeclined1":/** @type {(inputs: Share_Invitationdeclined1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitation declined`)
},"share_invitationdeclineddescription2":/** @type {(inputs: Share_Invitationdeclineddescription2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You’ve declined the invitation to “${i?.name}”.`)
},"share_invitationdeclinedtoproject3":/** @type {(inputs: Share_Invitationdeclinedtoproject3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’ve declined the invitation to the project`)
},"share_invitationsent1":/** @type {(inputs: Share_Invitationsent1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitation sent to ${i?.email}`)
},"share_invite":/** @type {(inputs: Share_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite`)
},"share_inviteall1":/** @type {(inputs: Share_Inviteall1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite all`)
},"share_invitebyemail2":/** @type {(inputs: Share_Invitebyemail2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite by email`)
},"share_inviteenabledlabel2":/** @type {(inputs: Share_Inviteenabledlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone with the invite link`)
},"share_invitelinkdisabled2":/** @type {(inputs: Share_Invitelinkdisabled2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite link disabled`)
},"share_invitelinkdisabledreason3":/** @type {(inputs: Share_Invitelinkdisabledreason3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite links are disabled because external collaborators are not allowed in this workspace.`)
},"share_invitelinkinactive2":/** @type {(inputs: Share_Invitelinkinactive2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This invite link is no longer active`)
},"share_invitelinkinactivedescription3":/** @type {(inputs: Share_Invitelinkinactivedescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It may have expired or been revoked. Ask the project owner for a new link.`)
},"share_invitelinksharetext3":/** @type {(inputs: Share_Invitelinksharetext3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join this project`)
},"share_invitelinktitle2":/** @type {(inputs: Share_Invitelinktitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite link`)
},"share_invitepeopleorgroups3":/** @type {(inputs: Share_Invitepeopleorgroups3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite people or groups`)
},"share_invitesentsuffix2":/** @type {(inputs: Share_Invitesentsuffix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (` (Invite sent)`)
},"share_joinedproject1":/** @type {(inputs: Share_Joinedproject1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’ve joined the project!`)
},"share_leaveproject1":/** @type {(inputs: Share_Leaveproject1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave project`)
},"share_leaveprojectdescription2":/** @type {(inputs: Share_Leaveprojectdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You will no longer have access to this project.`)
},"share_leaveprojecttitle2":/** @type {(inputs: Share_Leaveprojecttitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave project?`)
},"share_linkexpired1":/** @type {(inputs: Share_Linkexpired1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expired`)
},"share_managedlinksintro2":/** @type {(inputs: Share_Managedlinksintro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a public link so anyone can view your project and leave feedback. Links expire after 7 days.`)
},"share_noaccess1":/** @type {(inputs: Share_Noaccess1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No access`)
},"share_nolinksyet2":/** @type {(inputs: Share_Nolinksyet2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No active links yet`)
},"share_nomanagelinkspermission3":/** @type {(inputs: Share_Nomanagelinkspermission3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You don’t have permission to manage invite links`)
},"share_owner":/** @type {(inputs: Share_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Owner`)
},"share_peopleinworkspace2":/** @type {(inputs: Share_Peopleinworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People in this workspace`)
},"share_pleasetryagain2":/** @type {(inputs: Share_Pleasetryagain2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again.`)
},"share_previewintro1":/** @type {(inputs: Share_Previewintro1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a public link to allow anyone to access a view only version of your project. The link is valid for 7 days.`)
},"share_previewlinkcreated2":/** @type {(inputs: Share_Previewlinkcreated2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview link created`)
},"share_previewlinkcreatedandcopied4":/** @type {(inputs: Share_Previewlinkcreatedandcopied4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview link created and copied`)
},"share_previewsharetitle2":/** @type {(inputs: Share_Previewsharetitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
},"share_projectlinkcopied2":/** @type {(inputs: Share_Projectlinkcopied2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project link copied`)
},"share_publishproject1":/** @type {(inputs: Share_Publishproject1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish project`)
},"share_publishtoworkspace2":/** @type {(inputs: Share_Publishtoworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish to workspace`)
},"share_remove":/** @type {(inputs: Share_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
},"share_removecollaborator1":/** @type {(inputs: Share_Removecollaborator1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove collaborator`)
},"share_removecollaboratordescription2":/** @type {(inputs: Share_Removecollaboratordescription2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The user ${i?.name} will no longer have access to this project.`)
},"share_removecollaboratortitle2":/** @type {(inputs: Share_Removecollaboratortitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove collaborator?`)
},"share_removeinvitation1":/** @type {(inputs: Share_Removeinvitation1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove invitation`)
},"share_removeinvitationdescription2":/** @type {(inputs: Share_Removeinvitationdescription2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The invite link will no longer work for ${i?.name}.`)
},"share_removeinvitationtitle2":/** @type {(inputs: Share_Removeinvitationtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove invitation?`)
},"share_requestscount1":/** @type {(inputs: Share_Requestscount1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Requests (${i?.count})`)
},"share_requestsdeclined1":/** @type {(inputs: Share_Requestsdeclined1Inputs) => LocalizedString} */ (i) => {const countPlural = registry.plural("en", i?.count, {});
	if (countPlural == "one") return /** @type {LocalizedString} */ (`All ${i?.count} request declined`);
	if (countPlural == "other") return /** @type {LocalizedString} */ (`All ${i?.count} requests declined`);
	return /** @type {LocalizedString} */ ("share_requestsDeclined");
},"share_restricted":/** @type {(inputs: Share_RestrictedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restricted`)
},"share_restricteddescription1":/** @type {(inputs: Share_Restricteddescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only people invited to project`)
},"share_restrictedowneronlytooltip3":/** @type {(inputs: Share_Restrictedowneronlytooltip3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only project owners can change visibility to restricted`)
},"share_secretlinkcreated2":/** @type {(inputs: Share_Secretlinkcreated2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secret link created`)
},"share_shareinvitelink2":/** @type {(inputs: Share_Shareinvitelink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share invite link`)
},"share_sharepreview1":/** @type {(inputs: Share_Sharepreview1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share preview`)
},"share_sharepreviewlink2":/** @type {(inputs: Share_Sharepreviewlink2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share preview link`)
},"share_shareproject1":/** @type {(inputs: Share_Shareproject1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share project`)
},"share_tryagain1":/** @type {(inputs: Share_Tryagain1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
},"share_whohasaccess2":/** @type {(inputs: Share_Whohasaccess2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who has project access`)
},"share_workspaceaudience1":/** @type {(inputs: Share_Workspaceaudience1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} workspace`)
},"share_yourlinks1":/** @type {(inputs: Share_Yourlinks1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your links`)
},"share_yousuffix1":/** @type {(inputs: Share_Yousuffix1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (` (you)`)
},"shared_close":/** @type {(inputs: Shared_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"shared_filedropoverlay_body2":/** @type {(inputs: Shared_Filedropoverlay_Body2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop any files here to add them to your message`)
},"shared_filedropoverlay_heading2":/** @type {(inputs: Shared_Filedropoverlay_Heading2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add files`)
},"shared_filedropoverlay_toomanyfilesbody5":/** @type {(inputs: Shared_Filedropoverlay_Toomanyfilesbody5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Too many files (maximum ${i?.max} files per message)`)
},"shared_filedropoverlay_toomanyfilesheading5":/** @type {(inputs: Shared_Filedropoverlay_Toomanyfilesheading5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many files`)
},"shared_noprojectmatchesfound3":/** @type {(inputs: Shared_Noprojectmatchesfound3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No projects match your search`)
},"shared_search":/** @type {(inputs: Shared_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
},"shared_searchplaceholder1":/** @type {(inputs: Shared_Searchplaceholder1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search...`)
},"shared_skiplink1":/** @type {(inputs: Shared_Skiplink1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip to main content`)
},"sharedproductsection_feature1_description2":/** @type {(inputs: Sharedproductsection_Feature1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use your native language to describe your idea, then watch Lovable do the rest. Creating for the web is faster and easier than ever before.`)
},"sharedproductsection_feature1_title2":/** @type {(inputs: Sharedproductsection_Feature1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`20x faster than coding.`)
},"sharedproductsection_feature2_description2":/** @type {(inputs: Sharedproductsection_Feature2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forget about the overhead of frontend engineers or freelancers to maintain your website. Ask in text to change anything.`)
},"sharedproductsection_feature2_title2":/** @type {(inputs: Sharedproductsection_Feature2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt to edit.`)
},"sharedproductsection_feature3_description2":/** @type {(inputs: Sharedproductsection_Feature3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything that Lovable builds is yours. Sync your codebase to Github and edit in any code editor, export or publish your app instantly with one click.`)
},"sharedproductsection_feature3_title2":/** @type {(inputs: Sharedproductsection_Feature3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You own the code.`)
},"sharedproductsection_taptoview4":/** @type {(inputs: Sharedproductsection_Taptoview4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tap to view`)
},"sharedproductsection_title2":/** @type {(inputs: Sharedproductsection_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build high quality software without writing code.`)
},"sharedusecasessection_designers_description3":/** @type {(inputs: Sharedusecasessection_Designers_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bring your design idea to life without tedious prototyping work in tools like Figma.`)
},"sharedusecasessection_designers_title3":/** @type {(inputs: Sharedusecasessection_Designers_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Designers`)
},"sharedusecasessection_engineers_description3":/** @type {(inputs: Sharedusecasessection_Engineers_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship an entire frontend in one prompt. Let Lovable fix bugs and do your UI edits.`)
},"sharedusecasessection_engineers_title3":/** @type {(inputs: Sharedusecasessection_Engineers_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Human software engineers`)
},"sharedusecasessection_founders_description3":/** @type {(inputs: Sharedusecasessection_Founders_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iterate and validate in minutes. Launch a full product in less than a day.`)
},"sharedusecasessection_founders_title3":/** @type {(inputs: Sharedusecasessection_Founders_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Founders & solopreneurs`)
},"sharedusecasessection_productteams_description4":/** @type {(inputs: Sharedusecasessection_Productteams_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empower non-technical team members to code. Align on abstract ideas by building real prototypes.`)
},"sharedusecasessection_productteams_title4":/** @type {(inputs: Sharedusecasessection_Productteams_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product teams`)
},"sharedusecasessection_title3":/** @type {(inputs: Sharedusecasessection_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new era for product builders and developers.`)
},"sharepreview_coachmarkdescription2":/** @type {(inputs: Sharepreview_Coachmarkdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get comments on the preview of what you've built before you ship it. No Lovable account needed to comment.`)
},"sharepreview_coachmarkdismiss2":/** @type {(inputs: Sharepreview_Coachmarkdismiss2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss share preview tip`)
},"sharepreview_coachmarktitle2":/** @type {(inputs: Sharepreview_Coachmarktitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get feedback from anyone`)
},"sharepreview_coachmarktryit3":/** @type {(inputs: Sharepreview_Coachmarktryit3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try it`)
},"shebuildspage_about_label2":/** @type {(inputs: Shebuildspage_About_Label2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What is SheBuilds?`)
},"shebuildspage_about_part12":/** @type {(inputs: Shebuildspage_About_Part12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SheBuilds is Lovable's home`)
},"shebuildspage_about_part22":/** @type {(inputs: Shebuildspage_About_Part22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`for anyone who identifies as a woman whether you've never written a line of code`)
},"shebuildspage_about_part32":/** @type {(inputs: Shebuildspage_About_Part32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`or you've been shipping products for years.`)
},"shebuildspage_about_part42":/** @type {(inputs: Shebuildspage_About_Part42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Through hackathons,`)
},"shebuildspage_about_part52":/** @type {(inputs: Shebuildspage_About_Part52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`webinars`)
},"shebuildspage_about_part62":/** @type {(inputs: Shebuildspage_About_Part62Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`, and hands-on learning, SheBuilds gives you the resources, support, and community to go from idea`)
},"shebuildspage_about_part72":/** @type {(inputs: Shebuildspage_About_Part72Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`to real`)
},"shebuildspage_about_part82":/** @type {(inputs: Shebuildspage_About_Part82Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`, AI-powered product.`)
},"shebuildspage_about_title2":/** @type {(inputs: Shebuildspage_About_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We build and grow together`)
},"shebuildspage_community_cta2":/** @type {(inputs: Shebuildspage_Community_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join us`)
},"shebuildspage_community_description2":/** @type {(inputs: Shebuildspage_Community_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building is always better with people who get it. The SheBuilds community channel is where you can share progress, ask questions, and celebrate wins. Open to anyone, at any stage. Join us in the SheBuilds channel on Discord.`)
},"shebuildspage_community_title2":/** @type {(inputs: Shebuildspage_Community_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
},"shebuildspage_hackathons_cta2":/** @type {(inputs: Shebuildspage_Hackathons_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register here`)
},"shebuildspage_hackathons_description2":/** @type {(inputs: Shebuildspage_Hackathons_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We run 48-hour hackathons throughout the year. Each one is a focused, high-energy sprint where accepted participants build and ship a real product with Lovable. Every hackathon has its own application window, prizes, schedule, and FAQ.`)
},"shebuildspage_hackathons_title2":/** @type {(inputs: Shebuildspage_Hackathons_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hackathons`)
},"shebuildspage_hero_cta_primary2":/** @type {(inputs: Shebuildspage_Hero_Cta_Primary2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upcoming hackathons`)
},"shebuildspage_hero_cta_secondary2":/** @type {(inputs: Shebuildspage_Hero_Cta_Secondary2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join webinar`)
},"shebuildspage_hero_subtitle2":/** @type {(inputs: Shebuildspage_Hero_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built to amplify women who build.`)
},"shebuildspage_meta_description2":/** @type {(inputs: Shebuildspage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SheBuilds is Lovable's home for women who build with AI. Join hackathons, webinars, and hands-on learning to go from idea to real product.`)
},"shebuildspage_meta_title2":/** @type {(inputs: Shebuildspage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SheBuilds on Lovable | Lovable`)
},"shebuildspage_stats_body12":/** @type {(inputs: Shebuildspage_Stats_Body12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On International Women's Day 2025, 120+ community-led events took place across 40+ countries in a single day. 3,100+ women showed up in person, with 3,000+ more on waitlists. Confidence in building with AI tools jumped 50 points in one day.`)
},"shebuildspage_stats_body22":/** @type {(inputs: Shebuildspage_Stats_Body22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That is not a hackathon stat. That is a movement. SheBuilds is the home for that community, and it is just getting started.`)
},"shebuildspage_stats_contestants2":/** @type {(inputs: Shebuildspage_Stats_Contestants2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Women contestants`)
},"shebuildspage_stats_countries2":/** @type {(inputs: Shebuildspage_Stats_Countries2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Countries`)
},"shebuildspage_stats_events2":/** @type {(inputs: Shebuildspage_Stats_Events2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community-led events`)
},"shebuildspage_stats_titleline13":/** @type {(inputs: Shebuildspage_Stats_Titleline13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real builders.`)
},"shebuildspage_stats_titleline23":/** @type {(inputs: Shebuildspage_Stats_Titleline23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real results.`)
},"shebuildspage_stats_waitlist2":/** @type {(inputs: Shebuildspage_Stats_Waitlist2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Women on waitlist`)
},"shebuildspage_webinars_cta2":/** @type {(inputs: Shebuildspage_Webinars_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register to webinar`)
},"shebuildspage_webinars_description2":/** @type {(inputs: Shebuildspage_Webinars_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you're joining a 48-hour hackathon, you also get access to a dedicated prep session before the event. We walk you through what to expect, how to prepare, and how to make the most of your build time.`)
},"shebuildspage_webinars_title2":/** @type {(inputs: Shebuildspage_Webinars_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webinars`)
},"shebuildspage_whatwebelieve_item1_description4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item1_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone with an idea can build with AI today. No technical background needed.`)
},"shebuildspage_whatwebelieve_item1_number4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item1_Number4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`01`)
},"shebuildspage_whatwebelieve_item1_title4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item1_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The future is being built with AI. Be the one building it.`)
},"shebuildspage_whatwebelieve_item2_description4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item2_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shipping something real, even if imperfect, is worth more than waiting until you feel ready.`)
},"shebuildspage_whatwebelieve_item2_number4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item2_Number4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`02`)
},"shebuildspage_whatwebelieve_item2_title4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item2_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship it anyway`)
},"shebuildspage_whatwebelieve_item3_description4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item3_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progress accelerates when you feel supported, seen, and surrounded by people doing the same thing. SheBuilds is that community.`)
},"shebuildspage_whatwebelieve_item3_number4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item3_Number4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`03`)
},"shebuildspage_whatwebelieve_item3_title4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item3_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build with people who get it`)
},"shebuildspage_whatwebelieve_item4_description4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item4_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full-time job, kids, stolen hours on a Sunday. SheBuilds is designed for the way you actually live, not the way you wish you had time to.`)
},"shebuildspage_whatwebelieve_item4_number4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item4_Number4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`04`)
},"shebuildspage_whatwebelieve_item4_title4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Item4_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built around your real life.`)
},"shebuildspage_whatwebelieve_title4":/** @type {(inputs: Shebuildspage_Whatwebelieve_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What we believe`)
},"shopifymenu_claimstore2":/** @type {(inputs: Shopifymenu_Claimstore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claim store`)
},"shopifymenu_disconnectbullet12":/** @type {(inputs: Shopifymenu_Disconnectbullet12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Shopify store will remain intact`)
},"shopifymenu_disconnectbullet22":/** @type {(inputs: Shopifymenu_Disconnectbullet22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your app code may still reference Shopify until you update it manually`)
},"shopifymenu_disconnectbullet32":/** @type {(inputs: Shopifymenu_Disconnectbullet32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can connect a different store after disconnecting`)
},"shopifymenu_disconnectbullet42":/** @type {(inputs: Shopifymenu_Disconnectbullet42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can remix your project after disconnecting`)
},"shopifymenu_disconnectconfirm2":/** @type {(inputs: Shopifymenu_Disconnectconfirm2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnect`)
},"shopifymenu_disconnectintro2":/** @type {(inputs: Shopifymenu_Disconnectintro2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This removes the connection between your Lovable project and Shopify store.`)
},"shopifymenu_disconnectstore2":/** @type {(inputs: Shopifymenu_Disconnectstore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnect store`)
},"shopifymenu_disconnecttitle2":/** @type {(inputs: Shopifymenu_Disconnecttitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnect Shopify store?`)
},"shopifymenu_moreoptions2":/** @type {(inputs: Shopifymenu_Moreoptions2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More Shopify options`)
},"shopifymenu_popoverdescription2":/** @type {(inputs: Shopifymenu_Popoverdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage your Shopify store integration.`)
},"shopifymenu_popovertitle2":/** @type {(inputs: Shopifymenu_Popovertitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shopify`)
},"shopifymenu_srlabel2":/** @type {(inputs: Shopifymenu_Srlabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage Shopify`)
},"shopifymenu_tooltip1":/** @type {(inputs: Shopifymenu_Tooltip1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage Shopify store`)
},"shopifymenu_visitadmin2":/** @type {(inputs: Shopifymenu_Visitadmin2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visit admin`)
},"shopifypage_cta_button1":/** @type {(inputs: Shopifypage_Cta_Button1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let's build`)
},"shopifypage_cta_subtitle1":/** @type {(inputs: Shopifypage_Cta_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get inspired by these successful e-commerce stores and start creating your own. From fashion to supplements, these templates will jumpstart your online business.`)
},"shopifypage_cta_title1":/** @type {(inputs: Shopifypage_Cta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build your first online store`)
},"shopifypage_feature1_description1":/** @type {(inputs: Shopifypage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe your store vision and let Lovable generate a professional Shopify store with products, branding, and layout.`)
},"shopifypage_feature1_title1":/** @type {(inputs: Shopifypage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-powered creation`)
},"shopifypage_feature2_description1":/** @type {(inputs: Shopifypage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Lovable-created store automatically integrates with Shopify's powerful e-commerce backend and payment processing.`)
},"shopifypage_feature2_title1":/** @type {(inputs: Shopifypage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seamless integration`)
},"shopifypage_feature3_description1":/** @type {(inputs: Shopifypage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link your existing Shopify account or create a new one. Customize products, pricing, and store settings as needed.`)
},"shopifypage_feature3_title1":/** @type {(inputs: Shopifypage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect & customize`)
},"shopifypage_feature4_description1":/** @type {(inputs: Shopifypage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deploy your store instantly and start selling. Manage orders, inventory, and customers through Shopify's dashboard.`)
},"shopifypage_feature4_title1":/** @type {(inputs: Shopifypage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch & sell`)
},"shopifypage_featured_subtitle1":/** @type {(inputs: Shopifypage_Featured_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discover successful stores built with Lovable and Shopify, from boutique fashion to innovative startups.`)
},"shopifypage_featured_title1":/** @type {(inputs: Shopifypage_Featured_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured projects`)
},"shopifypage_hero_subtitle1":/** @type {(inputs: Shopifypage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build and customize online stores powered by Shopify and Lovable`)
},"shopifypage_hero_title1":/** @type {(inputs: Shopifypage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable E-Commerce`)
},"shopifypage_howitworks_subtitle3":/** @type {(inputs: Shopifypage_Howitworks_Subtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build professional Shopify stores with AI in minutes. Our seamless integration combines Lovable's AI-powered development with Shopify's robust e-commerce platform.`)
},"shopifypage_howitworks_title3":/** @type {(inputs: Shopifypage_Howitworks_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How it works`)
},"shopifypage_meta_description1":/** @type {(inputs: Shopifypage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create professional Shopify stores in minutes with Lovable's AI-powered development platform. Build, customize, and launch your e-commerce business effortlessly.`)
},"shopifypage_meta_title1":/** @type {(inputs: Shopifypage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shopify Integration | Build E-commerce Stores with Lovable AI`)
},"shopifypage_video_embedtitle2":/** @type {(inputs: Shopifypage_Video_Embedtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From idea to storefront with Lovable and Shopify`)
},"shopifypage_video_subtitle1":/** @type {(inputs: Shopifypage_Video_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`With Lovable and Shopify, you can go from idea to storefront to selling in just a matter of minutes`)
},"shopifypage_video_title1":/** @type {(inputs: Shopifypage_Video_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From idea to storefront`)
},"shopifypage_viewdocs2":/** @type {(inputs: Shopifypage_Viewdocs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View documentation`)
},"signinforfilesmodal_cancel4":/** @type {(inputs: Signinforfilesmodal_Cancel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"signinforfilesmodal_description4":/** @type {(inputs: Signinforfilesmodal_Description4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support for up to 10 files of any filetype`)
},"signinforfilesmodal_signin5":/** @type {(inputs: Signinforfilesmodal_Signin5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in`)
},"signinforfilesmodal_title4":/** @type {(inputs: Signinforfilesmodal_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to upload files`)
},"signup_giftcard_redeemtitle2":/** @type {(inputs: Signup_Giftcard_Redeemtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redeem your gift card`)
},"signup_giftcard_signintoredeemcode5":/** @type {(inputs: Signup_Giftcard_Signintoredeemcode5Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sign in to redeem <code>${i?.code}</code>`)
},"signup_giftcard_signintoredeemgeneric5":/** @type {(inputs: Signup_Giftcard_Signintoredeemgeneric5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to redeem your gift card`)
},"signup_logoarialabel2":/** @type {(inputs: Signup_Logoarialabel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable`)
},"signup_projectinvite_subtitle1":/** @type {(inputs: Signup_Projectinvite_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You've been invited to collaborate on a project`)
},"signup_projectinvite_title1":/** @type {(inputs: Signup_Projectinvite_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project invitation`)
},"skillcommand_builtbylovable3":/** @type {(inputs: Skillcommand_Builtbylovable3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built by Lovable`)
},"skillcommand_loading1":/** @type {(inputs: Skillcommand_Loading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading skills...`)
},"skillcommand_nomatching2":/** @type {(inputs: Skillcommand_Nomatching2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching skills`)
},"skillcommand_skills1":/** @type {(inputs: Skillcommand_Skills1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skills`)
},"skillcommand_workspaceskills2":/** @type {(inputs: Skillcommand_Workspaceskills2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace skills`)
},"stopchatbutton_cancel2":/** @type {(inputs: Stopchatbutton_Cancel2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"stopchatbutton_confirmdescription3":/** @type {(inputs: Stopchatbutton_Confirmdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes made so far will be kept. Credits are charged for the completed work.`)
},"stopchatbutton_confirmtitle3":/** @type {(inputs: Stopchatbutton_Confirmtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop generating?`)
},"stopchatbutton_stop2":/** @type {(inputs: Stopchatbutton_Stop2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop`)
},"stopchatbutton_stopgenerating3":/** @type {(inputs: Stopchatbutton_Stopgenerating3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop generating`)
},"stopchatbutton_stopping2":/** @type {(inputs: Stopchatbutton_Stopping2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stopping...`)
},"studentspage_cta_subtitle1":/** @type {(inputs: Studentspage_Cta_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join thousands of students already building with Lovable. Verify your student status and unlock 50% off today.`)
},"studentspage_cta_title1":/** @type {(inputs: Studentspage_Cta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to get started?`)
},"studentspage_faq10_answer1":/** @type {(inputs: Studentspage_Faq10_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. We offer a 20% discount to verified nonprofit organizations for one year. At the end of the year, you can extend the discount by resubmitting verification of your nonprofit status. To apply, please email <supportLink>support@lovable.dev</supportLink> with documentation proving your organization's nonprofit status (such as 501(c)(3) certification for US organizations or equivalent for international nonprofits).`)
},"studentspage_faq10_question1":/** @type {(inputs: Studentspage_Faq10_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do you offer discounts for nonprofits?`)
},"studentspage_faq11_answer1":/** @type {(inputs: Studentspage_Faq11_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You might be eligible for a substantial academic discount on our Business plan, which lets you as a teacher add and manage users sharing a central set of credits, so only one payment is needed to cover all students. Learn more about eligibility and apply through our education partners program at <partnersLink>lovable.dev/partners/education</partnersLink>.`)
},"studentspage_faq11_question1":/** @type {(inputs: Studentspage_Faq11_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I represent a university. Can I buy a bulk license to get a discount for my students?`)
},"studentspage_faq1_answer1":/** @type {(inputs: Studentspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can verify your student status by clicking the "Verify Student Status" button above. Make sure you are logged in with your university email address.`)
},"studentspage_faq1_question1":/** @type {(inputs: Studentspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I verify my student status?`)
},"studentspage_faq2_answer1":/** @type {(inputs: Studentspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We accept students from most accredited universities and colleges worldwide. If you're currently enrolled as a student, you're likely eligible! That said, we're not able to verify every university. If your school is not on the list, please notify us when prompted in the verification process.`)
},"studentspage_faq2_question1":/** @type {(inputs: Studentspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What universities are eligible for the student discount?`)
},"studentspage_faq3_answer1":/** @type {(inputs: Studentspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Students receive 50% off on the Lovable Pro 100 credits monthly plan, or a discount of $12.50/month on all other plans.`)
},"studentspage_faq3_question1":/** @type {(inputs: Studentspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How much is the student discount?`)
},"studentspage_faq4_answer1":/** @type {(inputs: Studentspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your student discount is valid for up to 12 months. Once your discount expires you can continue using Lovable at the regular pricing. If you cancel your subscription you will lose your discount and can not reactivate it later.`)
},"studentspage_faq4_question1":/** @type {(inputs: Studentspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How long does the student discount last?`)
},"studentspage_faq5_answer1":/** @type {(inputs: Studentspage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Your student discount is only valid for the account you use to verify your status.`)
},"studentspage_faq5_question1":/** @type {(inputs: Studentspage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I transfer my discount to a friend?`)
},"studentspage_faq6_answer1":/** @type {(inputs: Studentspage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This discount is only valid for users on the free plan.`)
},"studentspage_faq6_question1":/** @type {(inputs: Studentspage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does the student discount apply to existing customers?`)
},"studentspage_faq7_answer1":/** @type {(inputs: Studentspage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The student discount is only valid on accounts with a student email. If you are the project owner you can transfer the project to another workspace you are a member of in project settings. Alternatively, you can invite your other account to join the project as an editor or admin.`)
},"studentspage_faq7_question1":/** @type {(inputs: Studentspage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I already have a Lovable account with a non-student email. Can I transfer existing projects?`)
},"studentspage_faq8_answer1":/** @type {(inputs: Studentspage_Faq8_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If your student email will be deactivated soon, you can transfer the project to another workspace you are a member of in project settings. Alternatively, you can invite your other account to join the project as an editor or admin.`)
},"studentspage_faq8_question1":/** @type {(inputs: Studentspage_Faq8_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My student email will be deactivated soon. How can I maintain access to my projects?`)
},"studentspage_faq9_answer1":/** @type {(inputs: Studentspage_Faq9_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes! If you are teaching at a university or school you can still get a student discount. Just make sure you are logged in with your academic email address.`)
},"studentspage_faq9_question1":/** @type {(inputs: Studentspage_Faq9_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I am a teacher. Can I still get the student discount?`)
},"studentspage_faq_title1":/** @type {(inputs: Studentspage_Faq_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ Student Discount`)
},"studentspage_freeplanonly3":/** @type {(inputs: Studentspage_Freeplanonly3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Student plan is only applicable for workspaces currently on the free plan`)
},"studentspage_hero_discountclaimed2":/** @type {(inputs: Studentspage_Hero_Discountclaimed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discount claimed`)
},"studentspage_hero_explore1":/** @type {(inputs: Studentspage_Hero_Explore1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore more`)
},"studentspage_hero_getdiscount2":/** @type {(inputs: Studentspage_Hero_Getdiscount2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get your discount`)
},"studentspage_hero_subtitle1":/** @type {(inputs: Studentspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your student status and receive up to 50% off`)
},"studentspage_hero_titleline12":/** @type {(inputs: Studentspage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Students get Lovable`)
},"studentspage_hero_titleline22":/** @type {(inputs: Studentspage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`for half the price`)
},"studentspage_hero_verifycta2":/** @type {(inputs: Studentspage_Hero_Verifycta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify student status`)
},"studentspage_info_step11":/** @type {(inputs: Studentspage_Info_Step11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your student ID and we'll unlock the status for you.`)
},"studentspage_info_step21":/** @type {(inputs: Studentspage_Info_Step21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One year of Lovable Pro for just $12.50/month.`)
},"studentspage_info_step31":/** @type {(inputs: Studentspage_Info_Step31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make quality apps with AI in minutes.`)
},"studentspage_info_subtitle1":/** @type {(inputs: Studentspage_Info_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your student status with your educational email or student ID to get instant access to 50% off Lovable Pro.`)
},"studentspage_info_title1":/** @type {(inputs: Studentspage_Info_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started with benefits`)
},"studentspage_meta_description1":/** @type {(inputs: Studentspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get 50% off Lovable Pro with our student discount! Verify your student status and start building apps with AI for a discounted price.`)
},"studentspage_meta_title1":/** @type {(inputs: Studentspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Student Discount - 50% Off Lovable Pro | Build Apps Faster`)
},"studentspage_partners_title1":/** @type {(inputs: Studentspage_Partners_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted by thousands of students at leading universities`)
},"studentspage_testimonial11":/** @type {(inputs: Studentspage_Testimonial11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instead of a corporate internship, I chose to build my own startup. After three intense months, my startup is nearly complete and launching soon thanks to Lovable!`)
},"studentspage_testimonial21":/** @type {(inputs: Studentspage_Testimonial21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I've built a start-up entirely using Lovable. I launched this B2B SaaS side hustle just two months ago and I've already secured two major pilot customers.`)
},"studentspage_testimonial31":/** @type {(inputs: Studentspage_Testimonial31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We built a chatbot for Samsung Iberia using Lovable as the front-end. Our project won the best project award! Lovable let us focus on perfecting the assistant rather than building a front-end.`)
},"studentspage_testimonial41":/** @type {(inputs: Studentspage_Testimonial41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I'm using Lovable to build a platform that democratizes truth by providing news from all sides, highlighting bias and discrepancy, all while making it easy-to-digest.`)
},"studentspage_testimonial51":/** @type {(inputs: Studentspage_Testimonial51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I built and launched a travel community website in just a week with Lovable. This project even landed me an internship - after a quick live demo, they offered me the role on the spot!`)
},"studentspage_testimonial61":/** @type {(inputs: Studentspage_Testimonial61Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I built a prototype for a school project using Lovable and it genuinely helped me pass the course. I also created an AI-powered exam question generator for lecturers.`)
},"studentspage_testimonials_title1":/** @type {(inputs: Studentspage_Testimonials_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable is used by students worldwide`)
},"supabasepage_faq10_answer1":/** @type {(inputs: Supabasepage_Faq10_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At the moment, each Lovable project connects to one Supabase project, and Lovable doesn't have a built-in staging mode. If you want a safe playground to experiment, Supabase offers a feature called Branching which lets you create a temporary copy of your database (like a git branch) to test changes. You could connect a separate Lovable project to a branch or duplicate of your database for testing. In general, for serious projects you'd use caution making schema changes on a live app – perhaps create a backup or use branching, then merge changes when ready. Lovable's integration is evolving, so future updates might introduce more seamless staging workflows.`)
},"supabasepage_faq10_question1":/** @type {(inputs: Supabasepage_Faq10_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What if I want to test changes to my database without affecting the live app?`)
},"supabasepage_faq11_answer1":/** @type {(inputs: Supabasepage_Faq11_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Supabase's web interface includes an AI SQL Assistant that can generate SQL queries from natural language. So if you need a complex query or are not comfortable writing SQL, you can try that tool in the Supabase SQL editor. On Lovable's side, you typically don't need to hand-write SQL at all – the AI handles most of the schema creation and queries for you. But if you're an advanced user and want to do something custom, you can always use Lovable's GitHub integration to inspect or edit the code, or run raw SQL on the database as needed.`)
},"supabasepage_faq11_question1":/** @type {(inputs: Supabasepage_Faq11_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does Supabase or Lovable help me write custom SQL or database logic?`)
},"supabasepage_faq12_answer1":/** @type {(inputs: Supabasepage_Faq12_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payments are handled via integrations like Stripe, which you can use in conjunction with Supabase Edge Functions. For instance, you might prompt Lovable: “Add a checkout button and process payments with Stripe.” Lovable would then create an Edge Function that talks to Stripe's API (using your Stripe secret key stored as a secret) and perhaps store the transaction details in your Supabase database. The UI would be updated to include the checkout/pay button. Essentially, Supabase provides the environment (Edge Functions, database) to implement payments, and Lovable can scaffold the code for you. For more details, you can also refer to the Stripe & Payments integration guide in Lovable's documentation, which covers setting up Stripe specifically.`)
},"supabasepage_faq12_question1":/** @type {(inputs: Supabasepage_Faq12_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I handle payments in my Lovable app?`)
},"supabasepage_faq1_answer1":/** @type {(inputs: Supabasepage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It gives your Lovable app a fully managed backend. Without it, Lovable can still build your UI, but you'd have nowhere to persist data or manage users out-of-the-box. With Supabase connected, Lovable can create user accounts (authentication), store and retrieve data in a database, upload files, run server-side code, and more – all automatically. Essentially, Supabase provides the databases and servers behind your app, and Lovable drives it through prompts.`)
},"supabasepage_faq1_question1":/** @type {(inputs: Supabasepage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What does the Supabase integration actually do for me?`)
},"supabasepage_faq2_answer1":/** @type {(inputs: Supabasepage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Lovable and Supabase are two separate platforms. You will need an account on Supabase (to host your database) in addition to your Lovable account. The good news is both have free tiers, so you can get started without any cost. Just remember that if you later upgrade for more usage or features, you'd handle billing for each service individually.`)
},"supabasepage_faq2_question1":/** @type {(inputs: Supabasepage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do I need separate accounts for Lovable and Supabase?`)
},"supabasepage_faq3_answer1":/** @type {(inputs: Supabasepage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In the Lovable editor, go to the Integrations section. Click Connect to Supabase and follow the authentication steps. If needed, create a new Supabase project within Lovable. Lovable will automatically generate the necessary database schema and connect it to your project.`)
},"supabasepage_faq3_question1":/** @type {(inputs: Supabasepage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I connect Lovable with Supabase?`)
},"supabasepage_faq4_answer1":/** @type {(inputs: Supabasepage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absolutely. When you use Lovable + Supabase, your data lives in Supabase's database and Supabase also provides auto-generated RESTful APIs for your tables (as well as a client library). This means you can use tools like Zapier, Make.com, or any other service to interact with your app's backend data via HTTP requests. For example, Zapier could fetch or add records to a Supabase table of your app. Additionally, you can create custom API endpoints using Supabase Edge Functions (which Lovable can help create) to trigger more complex workflows. In short, integrating with third-party automation services is doable – it just might involve a bit of configuration with Supabase's API keys or webhooks.`)
},"supabasepage_faq4_question1":/** @type {(inputs: Supabasepage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I integrate my Supabase-connected Lovable app with external automation tools?`)
},"supabasepage_faq5_answer1":/** @type {(inputs: Supabasepage_Faq5_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase is built on PostgreSQL, which can handle large amounts of data and high traffic. Out of the box, your free database can handle a decent workload (millions of rows, multiple connections). As your needs grow, you can upgrade your Supabase plan for more storage, throughput, and features. Many production apps run entirely on Supabase, so you're in good hands. Just be mindful of the usage limits on the free tier (which Supabase documents on their site) and plan to scale up if you approach those limits.`)
},"supabasepage_faq5_question1":/** @type {(inputs: Supabasepage_Faq5_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How scalable is Supabase for when my app grows?`)
},"supabasepage_faq6_answer1":/** @type {(inputs: Supabasepage_Faq6_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase has built-in real-time subscriptions on your database. This means your app can listen for changes (inserts, updates, deletes) on specific tables and react instantly. To leverage this, you would design your Lovable app feature as usual (e.g. a chat room that writes messages to a messages table). Lovable knows about Supabase's real-time capabilities, so it can set up the front-end to subscribe to that table's changes. In practice, after you've created a table for, say, chat messages, you can prompt Lovable to “enable real-time updates for the chat” and it will use Supabase's real-time API under the hood. Users will then see new messages appear live without needing to refresh. This works for any scenario where live updates are useful (comments, notifications, dashboards, etc.).`)
},"supabasepage_faq6_question1":/** @type {(inputs: Supabasepage_Faq6_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How can I add real-time features like a chat or live feed to my app?`)
},"supabasepage_faq7_answer1":/** @type {(inputs: Supabasepage_Faq7_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On the free tier, Supabase limits individual file upload size to 50MB. This covers most use cases like images, audio, or short videos. If you need to handle larger files (such as lengthy videos or large datasets), upgrading to a paid plan enables larger and even resumable uploads. Also note there's an overall storage quota per project (e.g. how many total GB you can store) that increases with higher plans.`)
},"supabasepage_faq7_question1":/** @type {(inputs: Supabasepage_Faq7_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is there a limit to file uploads with Supabase storage?`)
},"supabasepage_faq8_answer1":/** @type {(inputs: Supabasepage_Faq8_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable automatically sets up authentication, but you may need to: Go to Supabase Dashboard > Authentication. Enable Email Sign-in/Sign-up. Disable email confirmation for easier local testing.`)
},"supabasepage_faq8_question1":/** @type {(inputs: Supabasepage_Faq8_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I configure authentication in Supabase?`)
},"supabasepage_faq9_answer1":/** @type {(inputs: Supabasepage_Faq9_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, you can. You might build multiple front-end applications in Lovable that all connect to the same Supabase project (and thus share the same database and auth). This is advanced, but it's possible – for example, a main app and an admin dashboard as separate Lovable projects using one common database. When connecting Supabase in each project, just select the same Supabase project. Keep in mind all those apps will read/write the same data, so design accordingly.`)
},"supabasepage_faq9_question1":/** @type {(inputs: Supabasepage_Faq9_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I use one Supabase database for multiple Lovable projects?`)
},"supabasepage_faqtitle2":/** @type {(inputs: Supabasepage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"supabasepage_feature1_description1":/** @type {(inputs: Supabasepage_Feature1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Store and query your app data with full SQL support. Lovable can automatically generate the necessary tables and schema based on your prompts.`)
},"supabasepage_feature1_title1":/** @type {(inputs: Supabasepage_Feature1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Database (PostgreSQL)`)
},"supabasepage_feature2_description1":/** @type {(inputs: Supabasepage_Feature2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Securely manage user sign-ups, logins, and access control. Lovable can add pre-built authentication flows (email/password, etc.) to your app with a simple prompt.`)
},"supabasepage_feature2_title1":/** @type {(inputs: Supabasepage_Feature2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User authentication`)
},"supabasepage_feature3_description1":/** @type {(inputs: Supabasepage_Feature3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload and serve images or other files via Supabase Storage. Great for user profile photos, uploads, or any static media your app needs to handle.`)
},"supabasepage_feature3_title1":/** @type {(inputs: Supabasepage_Feature3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File storage`)
},"supabasepage_feature4_description1":/** @type {(inputs: Supabasepage_Feature4_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase can stream live data changes to your app. This enables features like live chat, activity feeds, or collaborative dashboards that update instantly for all users.`)
},"supabasepage_feature4_title1":/** @type {(inputs: Supabasepage_Feature4_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real-time updates`)
},"supabasepage_feature5_description1":/** @type {(inputs: Supabasepage_Feature5_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run custom backend logic (in JavaScript/TypeScript) on Supabase's infrastructure. Lovable will create and deploy these functions for tasks like sending emails, processing payments, or integrating with external APIs.`)
},"supabasepage_feature5_title1":/** @type {(inputs: Supabasepage_Feature5_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edge functions (serverless)`)
},"supabasepage_hero_cta1":/** @type {(inputs: Supabasepage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
},"supabasepage_hero_subtitle1":/** @type {(inputs: Supabasepage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your app to a PostgreSQL database with authentication, file storage, real-time updates, and edge functions`)
},"supabasepage_hero_title1":/** @type {(inputs: Supabasepage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable: Integrate the backend with Supabase`)
},"supabasepage_keyfeatures_subtitle2":/** @type {(inputs: Supabasepage_Keyfeatures_Subtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Here's what you'll unlock with Supabase integration`)
},"supabasepage_keyfeatures_title2":/** @type {(inputs: Supabasepage_Keyfeatures_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key features`)
},"supabasepage_meta_description1":/** @type {(inputs: Supabasepage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your app to a PostgreSQL database with authentication, file storage, real-time updates, and edge functions.`)
},"supabasepage_meta_og_description1":/** @type {(inputs: Supabasepage_Meta_Og_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your app to a PostgreSQL database with authentication, file storage, real-time updates, and edge functions.`)
},"supabasepage_meta_og_title1":/** @type {(inputs: Supabasepage_Meta_Og_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable: Integrate Backend with Supabase`)
},"supabasepage_meta_title1":/** @type {(inputs: Supabasepage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrate Backend with Supabase | Lovable`)
},"supabasepage_overview1_description1":/** @type {(inputs: Supabasepage_Overview1_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable's native Supabase integration lets you manage both your front-end UI and your back-end database through a single, easy-to-use chat interface. In other words, you can design your app's screens and set up a cloud PostgreSQL database without leaving Lovable. This unified approach makes powerful app development accessible to everyone – non‑technical users can rely on Lovable's guidance, while experienced developers can tap into advanced Supabase features as needed.`)
},"supabasepage_overview1_title1":/** @type {(inputs: Supabasepage_Overview1_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design your UI and database in one place`)
},"supabasepage_overview2_description1":/** @type {(inputs: Supabasepage_Overview2_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase is an open-source alternative to Firebase, providing a hosted PostgreSQL database with real-time capabilities, user authentication, file storage, and serverless functions. By connecting Supabase to your Lovable app, you instantly gain a production-ready backend without writing any boilerplate code or manually configuring servers. Supabase's intuitive web dashboard makes it easy to manage your data and users, and its robust SQL foundation means you retain the full power and scalability of a PostgreSQL database.`)
},"supabasepage_overview2_title1":/** @type {(inputs: Supabasepage_Overview2_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Production-ready backend without the setup`)
},"supabasepage_overview3_description1":/** @type {(inputs: Supabasepage_Overview3_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`With Lovable, you don't have to juggle separate tools for front-end design and back-end setup. By simply conversing with Lovable's AI, you can build your UI and have the underlying database and server functions created for you automatically. This means faster development and fewer integration headaches. For example, if you prompt Lovable with “Add a user feedback form and save responses to the database,” Lovable will generate the form UI and set up a Supabase table to store the feedback – all in one go. This seamless end-to-end generation is Lovable's unique strength, empowering beginners to build complex apps and allowing power users to move faster.`)
},"supabasepage_overview3_title1":/** @type {(inputs: Supabasepage_Overview3_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why use Lovable's Supabase integration?`)
},"supabasepage_overview_title1":/** @type {(inputs: Supabasepage_Overview_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supabase integration overview`)
},"supabasereauthdialog_button_reauthenticate2":/** @type {(inputs: Supabasereauthdialog_Button_Reauthenticate2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Re-authenticate with Supabase`)
},"supabasereauthdialog_description2":/** @type {(inputs: Supabasereauthdialog_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To make Supabase integration more robust, Lovable can now read your project logs. Please re-authenticate with Supabase to continue.`)
},"supabasereauthdialog_title2":/** @type {(inputs: Supabasereauthdialog_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We got an update for you!`)
},"supportpage_community_cta1":/** @type {(inputs: Supportpage_Community_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join Discord`)
},"supportpage_community_description1":/** @type {(inputs: Supportpage_Community_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect with other builders on Discord to share, collaborate, and get unstuck.`)
},"supportpage_community_title1":/** @type {(inputs: Supportpage_Community_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask the Community`)
},"supportpage_contact_cta1":/** @type {(inputs: Supportpage_Contact_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact us`)
},"supportpage_contact_description_v21":/** @type {(inputs: Supportpage_Contact_Description_V21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct help for paying users with account, billing, and platform issues. Email <emailLink>support@lovable.dev</emailLink>.`)
},"supportpage_contact_title1":/** @type {(inputs: Supportpage_Contact_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Support`)
},"supportpage_contactdialog_note2":/** @type {(inputs: Supportpage_Contactdialog_Note2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We can't debug project-specific issues here - check the <docsLink>Lovable docs</docsLink> for tips and fixes.`)
},"supportpage_contactdialog_responsetime3":/** @type {(inputs: Supportpage_Contactdialog_Responsetime3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Response time: instant from Docs AI, within 24 hours from our team (mainly weekdays).`)
},"supportpage_contactdialog_title2":/** @type {(inputs: Supportpage_Contactdialog_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contact support`)
},"supportpage_docs_cta1":/** @type {(inputs: Supportpage_Docs_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the docs`)
},"supportpage_docs_description1":/** @type {(inputs: Supportpage_Docs_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guides, best practices, and in-depth references to help you build.`)
},"supportpage_docs_title1":/** @type {(inputs: Supportpage_Docs_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Documentation`)
},"supportpage_explore_subtitle1":/** @type {(inputs: Supportpage_Explore_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guides, documentation, and a community of builders - find what you need to move faster.`)
},"supportpage_explore_title1":/** @type {(inputs: Supportpage_Explore_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore resources`)
},"supportpage_faq_a11":/** @type {(inputs: Supportpage_Faq_A11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Cloud gives your app a full backend with no setup - a database, user authentication, file storage, and serverless functions. Just describe what you need and Lovable builds it for you.`)
},"supportpage_faq_a21":/** @type {(inputs: Supportpage_Faq_A21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Lovable ships with 50+ native connectors across databases, analytics, email, content, and productivity tools, with hundreds more available through built-in automation. Most connect seamlessly in a few clicks, so you can add the services your app needs without manual setup.`)
},"supportpage_faq_a31":/** @type {(inputs: Supportpage_Faq_A31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Lovable has built-in payments, so you can add subscriptions and one-time checkout to any app. Set up a test checkout in minutes and go live the same day, with your keys stored securely and used only where they are needed.`)
},"supportpage_faq_a41":/** @type {(inputs: Supportpage_Faq_A41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credits are used when you send a message to Lovable, not while you're typing or editing. How many depends on the complexity of the request. You can check your remaining credits and usage anytime in your workspace settings.`)
},"supportpage_faq_a51":/** @type {(inputs: Supportpage_Faq_A51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start with the search above and the docs - most questions are answered there instantly. For community help, join our Discord. If you're on a paid plan and need help with your account, billing, or a platform issue, use the support form on this page.`)
},"supportpage_faq_q11":/** @type {(inputs: Supportpage_Faq_Q11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What can I add to my app with Lovable Cloud?`)
},"supportpage_faq_q21":/** @type {(inputs: Supportpage_Faq_Q21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I connect other tools and integrations?`)
},"supportpage_faq_q31":/** @type {(inputs: Supportpage_Faq_Q31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I accept payments in my app?`)
},"supportpage_faq_q41":/** @type {(inputs: Supportpage_Faq_Q41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do credits work?`)
},"supportpage_faq_q51":/** @type {(inputs: Supportpage_Faq_Q51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I get help with my project?`)
},"supportpage_faq_title1":/** @type {(inputs: Supportpage_Faq_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently Asked Questions`)
},"supportpage_form_attachments1":/** @type {(inputs: Supportpage_Form_Attachments1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attachments`)
},"supportpage_form_cancel1":/** @type {(inputs: Supportpage_Form_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"supportpage_form_email1":/** @type {(inputs: Supportpage_Form_Email1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email*`)
},"supportpage_form_error1":/** @type {(inputs: Supportpage_Form_Error1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to send message. Please try again later.`)
},"supportpage_form_message1":/** @type {(inputs: Supportpage_Form_Message1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
},"supportpage_form_messageplaceholder2":/** @type {(inputs: Supportpage_Form_Messageplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
},"supportpage_form_noprojects2":/** @type {(inputs: Supportpage_Form_Noprojects2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No projects found.`)
},"supportpage_form_project1":/** @type {(inputs: Supportpage_Form_Project1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project`)
},"supportpage_form_projecthint2":/** @type {(inputs: Supportpage_Form_Projecthint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If you want to link a project, select it above.`)
},"supportpage_form_projectlinked2":/** @type {(inputs: Supportpage_Form_Projectlinked2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project URL will be included in your support request.`)
},"supportpage_form_selectproject2":/** @type {(inputs: Supportpage_Form_Selectproject2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a project...`)
},"supportpage_form_sending1":/** @type {(inputs: Supportpage_Form_Sending1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sending...`)
},"supportpage_form_subject1":/** @type {(inputs: Supportpage_Form_Subject1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subject *`)
},"supportpage_form_subjectplaceholder2":/** @type {(inputs: Supportpage_Form_Subjectplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subject`)
},"supportpage_form_submit1":/** @type {(inputs: Supportpage_Form_Submit1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit`)
},"supportpage_form_success1":/** @type {(inputs: Supportpage_Form_Success1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your message has been sent successfully!`)
},"supportpage_form_uploadformats2":/** @type {(inputs: Supportpage_Form_Uploadformats2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supported formats: Images, PDF, DOC (max 5MB total)`)
},"supportpage_form_uploadtext2":/** @type {(inputs: Supportpage_Form_Uploadtext2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`<bold>Click to upload</bold> or drag and drop`)
},"supportpage_hero_subtitle1":/** @type {(inputs: Supportpage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the docs, ask the community, or reach our team - everything you need to keep building.`)
},"supportpage_hero_title1":/** @type {(inputs: Supportpage_Hero_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How can we help?`)
},"supportpage_meta_description1":/** @type {(inputs: Supportpage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support resources, documentation, and contact options to help users resolve issues and get assistance.`)
},"supportpage_meta_title1":/** @type {(inputs: Supportpage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Support & Customer Service`)
},"supportpage_searchdialog_closearialabel4":/** @type {(inputs: Supportpage_Searchdialog_Closearialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
},"supportpage_searchdialog_title2":/** @type {(inputs: Supportpage_Searchdialog_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Docs AI`)
},"supportpage_searchinput_cta2":/** @type {(inputs: Supportpage_Searchinput_Cta2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask`)
},"supportpage_searchinput_placeholder2":/** @type {(inputs: Supportpage_Searchinput_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask the docs anything…`)
},"supportpage_searchinput_sendarialabel4":/** @type {(inputs: Supportpage_Searchinput_Sendarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send question`)
},"taskdiff_added1":/** @type {(inputs: Taskdiff_Added1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added`)
},"taskdiff_removed1":/** @type {(inputs: Taskdiff_Removed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed`)
},"taskstatus_backlog1":/** @type {(inputs: Taskstatus_Backlog1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backlog`)
},"taskstatus_cancelled1":/** @type {(inputs: Taskstatus_Cancelled1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelled`)
},"taskstatus_done1":/** @type {(inputs: Taskstatus_Done1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
},"taskstatus_incomplete1":/** @type {(inputs: Taskstatus_Incomplete1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incomplete`)
},"taskstatus_inprogress2":/** @type {(inputs: Taskstatus_Inprogress2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In progress`)
},"taskstatus_superseded1":/** @type {(inputs: Taskstatus_Superseded1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Superseded`)
},"taskstatus_todo1":/** @type {(inputs: Taskstatus_Todo1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To do`)
},"templatespage_categorystrip_alltemplates3":/** @type {(inputs: Templatespage_Categorystrip_Alltemplates3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All templates`)
},"templatespage_categorystrip_arialabel3":/** @type {(inputs: Templatespage_Categorystrip_Arialabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Template categories`)
},"templatespage_categorystrip_scrollleft3":/** @type {(inputs: Templatespage_Categorystrip_Scrollleft3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scroll left`)
},"templatespage_categorystrip_scrollright3":/** @type {(inputs: Templatespage_Categorystrip_Scrollright3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scroll right`)
},"templatespage_grid_emptydescription2":/** @type {(inputs: Templatespage_Grid_Emptydescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try adjusting your filters or search terms to find more results.`)
},"templatespage_grid_emptytitle2":/** @type {(inputs: Templatespage_Grid_Emptytitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No templates found`)
},"templatespage_grid_loading1":/** @type {(inputs: Templatespage_Grid_Loading1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
},"templatespage_grid_loadmore2":/** @type {(inputs: Templatespage_Grid_Loadmore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more templates`)
},"templatespage_hero_breadcrumbroot2":/** @type {(inputs: Templatespage_Hero_Breadcrumbroot2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Templates`)
},"templatespage_hero_h1default2":/** @type {(inputs: Templatespage_Hero_H1default2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website and app templates`)
},"templatespage_hero_h1suffix2":/** @type {(inputs: Templatespage_Hero_H1suffix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built with AI`)
},"templatespage_hero_subtitledefault2":/** @type {(inputs: Templatespage_Hero_Subtitledefault2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Production-ready apps from the Lovable community`)
},"templatespage_hero_subtitlewithname3":/** @type {(inputs: Templatespage_Hero_Subtitlewithname3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Production-ready ${i?.name} apps from the Lovable community`)
},"templatespage_meta_description1":/** @type {(inputs: Templatespage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse no-code and AI-powered website and app templates you can customise and launch fast with Lovable.`)
},"templatespage_meta_title1":/** @type {(inputs: Templatespage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website Templates for AI-Powered Apps and Sites | Lovable`)
},"termspage_meta_description1":/** @type {(inputs: Termspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable legal terms and conditions governing access to and use of the platform and its services.`)
},"termspage_meta_title1":/** @type {(inputs: Termspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable Terms & Conditions`)
},"tools_approvalnotification_waitingtitle2":/** @type {(inputs: Tools_Approvalnotification_Waitingtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for your input`)
},"tools_cloud_approvalbody1":/** @type {(inputs: Tools_Cloud_Approvalbody1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve Lovable Cloud to continue building your app`)
},"tools_copy_copied":/** @type {(inputs: Tools_Copy_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
},"tools_copy_copying":/** @type {(inputs: Tools_Copy_CopyingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copying`)
},"tools_database_approvalbody1":/** @type {(inputs: Tools_Database_Approvalbody1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve Lovable Database to continue building your app`)
},"tools_database_enabled":/** @type {(inputs: Tools_Database_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabled Lovable Database`)
},"tools_database_enablepending1":/** @type {(inputs: Tools_Database_Enablepending1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for user to enable Lovable Database`)
},"tools_database_enableskipped1":/** @type {(inputs: Tools_Database_Enableskipped1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skipped enabling Lovable Database`)
},"tools_database_enabling":/** @type {(inputs: Tools_Database_EnablingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabling Lovable Database`)
},"tools_database_queried":/** @type {(inputs: Tools_Database_QueriedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queried database`)
},"tools_database_querying":/** @type {(inputs: Tools_Database_QueryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Querying database`)
},"tools_edit_edited":/** @type {(inputs: Tools_Edit_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edited`)
},"tools_edit_editedtoolresult2":/** @type {(inputs: Tools_Edit_Editedtoolresult2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edited tool result`)
},"tools_edit_editing":/** @type {(inputs: Tools_Edit_EditingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editing`)
},"tools_edit_editingtoolresult2":/** @type {(inputs: Tools_Edit_Editingtoolresult2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editing tool result`)
},"tools_edit_updatedmemory1":/** @type {(inputs: Tools_Edit_Updatedmemory1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated memory`)
},"tools_edit_updatingmemory1":/** @type {(inputs: Tools_Edit_Updatingmemory1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updating memory`)
},"tools_edit_working":/** @type {(inputs: Tools_Edit_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Working...`)
},"tools_edit_workingdone1":/** @type {(inputs: Tools_Edit_Workingdone1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Working`)
},"tools_edit_writingplan1":/** @type {(inputs: Tools_Edit_Writingplan1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Writing plan`)
},"tools_edit_wroteplan1":/** @type {(inputs: Tools_Edit_Wroteplan1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrote plan`)
},"tools_exec_ran":/** @type {(inputs: Tools_Exec_RanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ran command`)
},"tools_exec_running":/** @type {(inputs: Tools_Exec_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running command`)
},"tools_imagegen_edited":/** @type {(inputs: Tools_Imagegen_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edited image`)
},"tools_imagegen_editing":/** @type {(inputs: Tools_Imagegen_EditingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editing image`)
},"tools_imagegen_generated":/** @type {(inputs: Tools_Imagegen_GeneratedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generated image`)
},"tools_imagegen_generating":/** @type {(inputs: Tools_Imagegen_GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating image`)
},"tools_listdir_listed1":/** @type {(inputs: Tools_Listdir_Listed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listed`)
},"tools_listdir_listing1":/** @type {(inputs: Tools_Listdir_Listing1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listing`)
},"tools_monitoring_readingnetworklogs2":/** @type {(inputs: Tools_Monitoring_Readingnetworklogs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading network logs`)
},"tools_monitoring_readingpreviewlogs2":/** @type {(inputs: Tools_Monitoring_Readingpreviewlogs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading preview logs`)
},"tools_monitoring_readingruntimeerrors2":/** @type {(inputs: Tools_Monitoring_Readingruntimeerrors2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading runtime errors`)
},"tools_monitoring_readnetworklogs2":/** @type {(inputs: Tools_Monitoring_Readnetworklogs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read network logs`)
},"tools_monitoring_readpreviewlogs2":/** @type {(inputs: Tools_Monitoring_Readpreviewlogs2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read preview logs`)
},"tools_monitoring_readruntimeerrors2":/** @type {(inputs: Tools_Monitoring_Readruntimeerrors2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read runtime errors`)
},"tools_plan_approvalbody1":/** @type {(inputs: Tools_Plan_Approvalbody1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to build?`)
},"tools_plan_approvaltitle1":/** @type {(inputs: Tools_Plan_Approvaltitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your plan is ready`)
},"tools_plan_approvepending1":/** @type {(inputs: Tools_Plan_Approvepending1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for user to approve plan`)
},"tools_plan_created":/** @type {(inputs: Tools_Plan_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created plan`)
},"tools_plan_creating":/** @type {(inputs: Tools_Plan_CreatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating plan`)
},"tools_plan_presented":/** @type {(inputs: Tools_Plan_PresentedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presented plan`)
},"tools_plan_presenting":/** @type {(inputs: Tools_Plan_PresentingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presenting plan`)
},"tools_plan_readapproved1":/** @type {(inputs: Tools_Plan_Readapproved1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read approved plan`)
},"tools_plan_readingapproved1":/** @type {(inputs: Tools_Plan_Readingapproved1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading approved plan`)
},"tools_plan_skipped":/** @type {(inputs: Tools_Plan_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skipped plan`)
},"tools_questions_approvalbody1":/** @type {(inputs: Tools_Questions_Approvalbody1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We have some questions for you about the app you want to build`)
},"tools_questions_askingquestions1":/** @type {(inputs: Tools_Questions_Askingquestions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asking questions`)
},"tools_questions_pending":/** @type {(inputs: Tools_Questions_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for answers`)
},"tools_questions_questionsanswered1":/** @type {(inputs: Tools_Questions_Questionsanswered1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions answered`)
},"tools_questions_questionsskipped1":/** @type {(inputs: Tools_Questions_Questionsskipped1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions skipped`)
},"tools_questions_readinganswers1":/** @type {(inputs: Tools_Questions_Readinganswers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading answers`)
},"tools_questions_skipped":/** @type {(inputs: Tools_Questions_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skipped questions`)
},"tools_supabase_configuredauth1":/** @type {(inputs: Tools_Supabase_Configuredauth1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configured auth`)
},"tools_supabase_configuringauth1":/** @type {(inputs: Tools_Supabase_Configuringauth1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuring auth`)
},"tools_supabase_enablecloudpending2":/** @type {(inputs: Tools_Supabase_Enablecloudpending2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for user to enable Cloud`)
},"tools_supabase_enabledcloud1":/** @type {(inputs: Tools_Supabase_Enabledcloud1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabled Cloud`)
},"tools_supabase_enablingcloud1":/** @type {(inputs: Tools_Supabase_Enablingcloud1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabling Cloud`)
},"tools_supabase_migrationpending1":/** @type {(inputs: Tools_Supabase_Migrationpending1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for user to approve migration`)
},"tools_supabase_migrationskipped1":/** @type {(inputs: Tools_Supabase_Migrationskipped1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skipped modifying database`)
},"tools_supabase_modifieddatabase1":/** @type {(inputs: Tools_Supabase_Modifieddatabase1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modified database`)
},"tools_supabase_modifydatabase1":/** @type {(inputs: Tools_Supabase_Modifydatabase1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modify database`)
},"tools_supabase_readdatabase1":/** @type {(inputs: Tools_Supabase_Readdatabase1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read database`)
},"tools_supabase_readingdatabase1":/** @type {(inputs: Tools_Supabase_Readingdatabase1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading database`)
},"tools_view_read":/** @type {(inputs: Tools_View_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read`)
},"tools_view_reading":/** @type {(inputs: Tools_View_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading`)
},"tools_view_readingmore1":/** @type {(inputs: Tools_View_Readingmore1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading more`)
},"tools_view_readmore1":/** @type {(inputs: Tools_View_Readmore1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read more`)
},"tools_view_recalledmemory1":/** @type {(inputs: Tools_View_Recalledmemory1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recalled memory`)
},"tools_view_recallingmemory1":/** @type {(inputs: Tools_View_Recallingmemory1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recalling memory`)
},"toolspage_builtforanyone_card1_description3":/** @type {(inputs: Toolspage_Builtforanyone_Card1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pull in Linear issues, Notion docs, Jira tickets and more so your tools reflect your workflows and data.`)
},"toolspage_builtforanyone_card1_title3":/** @type {(inputs: Toolspage_Builtforanyone_Card1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use real context`)
},"toolspage_builtforanyone_card2_description3":/** @type {(inputs: Toolspage_Builtforanyone_Card2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create and iterate on internal tools yourself. No backlog delays, no sprint waiting, no engineering bottlenecks.`)
},"toolspage_builtforanyone_card2_title3":/** @type {(inputs: Toolspage_Builtforanyone_Card2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build without help`)
},"toolspage_builtforanyone_card3_description3":/** @type {(inputs: Toolspage_Builtforanyone_Card3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build exactly what you need. No vendor roadmaps or template compromises.`)
},"toolspage_builtforanyone_card3_title3":/** @type {(inputs: Toolspage_Builtforanyone_Card3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A perfect fit`)
},"toolspage_builtforanyone_title3":/** @type {(inputs: Toolspage_Builtforanyone_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internal tools, built for anyone`)
},"toolspage_faq1_answer1":/** @type {(inputs: Toolspage_Faq1_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone can build internal tools on Lovable, no engineering support required. This includes sales, marketing, product, ops, people, and finance teams.`)
},"toolspage_faq1_question1":/** @type {(inputs: Toolspage_Faq1_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who builds internal tools with Lovable?`)
},"toolspage_faq2_answer1":/** @type {(inputs: Toolspage_Faq2_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes, Lovable can connect with your existing systems either through native connectors or custom connectors. Learn more about our connectors <connectorsLink>here</connectorsLink>.`)
},"toolspage_faq2_question1":/** @type {(inputs: Toolspage_Faq2_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can internal tools connect to your existing systems?`)
},"toolspage_faq3_answer1":/** @type {(inputs: Toolspage_Faq3_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes! Lovable internal tools are production ready. We have automatic security scans, SSO, audit logs, and more out of the box to make sure your app meets your security and compliance requirements.`)
},"toolspage_faq3_question1":/** @type {(inputs: Toolspage_Faq3_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are internal tools production ready?`)
},"toolspage_faq4_answer1":/** @type {(inputs: Toolspage_Faq4_Answer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates and changes to your Lovable internal tools are conversational, just like every other app. When your processes evolve, you can chat with Lovable to make changes.`)
},"toolspage_faq4_question1":/** @type {(inputs: Toolspage_Faq4_Question1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do I update my internal tool?`)
},"toolspage_faqtitle2":/** @type {(inputs: Toolspage_Faqtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently asked questions`)
},"toolspage_financeops_step1_description2":/** @type {(inputs: Toolspage_Financeops_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace spreadsheets with structured inputs, scenarios, and clearer approvals.`)
},"toolspage_financeops_step1_title2":/** @type {(inputs: Toolspage_Financeops_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budget planning`)
},"toolspage_financeops_step2_description2":/** @type {(inputs: Toolspage_Financeops_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Route requests through your org chart. Custom approval chains, notification triggers, audit trails.`)
},"toolspage_financeops_step2_title2":/** @type {(inputs: Toolspage_Financeops_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approval workflows`)
},"toolspage_financeops_step3_description2":/** @type {(inputs: Toolspage_Financeops_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardize requests, capture requirements, and route approvals automatically.`)
},"toolspage_financeops_step3_title2":/** @type {(inputs: Toolspage_Financeops_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Procurement intake forms`)
},"toolspage_financeops_title2":/** @type {(inputs: Toolspage_Financeops_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finance & operations teams`)
},"toolspage_hero_cta1":/** @type {(inputs: Toolspage_Hero_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Book a demo`)
},"toolspage_hero_subtitle1":/** @type {(inputs: Toolspage_Hero_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build custom internal tools without the need of engineering or settling for generic SaaS. Tools that fit your exact workflow, ready in days.`)
},"toolspage_hero_titleline12":/** @type {(inputs: Toolspage_Hero_Titleline12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build custom tools`)
},"toolspage_hero_titleline22":/** @type {(inputs: Toolspage_Hero_Titleline22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`from your workflows,`)
},"toolspage_hero_titleline32":/** @type {(inputs: Toolspage_Hero_Titleline32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`data, and ideas`)
},"toolspage_meta_description1":/** @type {(inputs: Toolspage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build custom internal tools without the need of engineering or settling for generic SaaS. Tools that fit your exact workflow, ready in days.`)
},"toolspage_meta_title1":/** @type {(inputs: Toolspage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For Internal Tools`)
},"toolspage_peopleteams_step1_description2":/** @type {(inputs: Toolspage_Peopleteams_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Centralize policies, benefits, and guidelines in one searchable hub that stays up to date.`)
},"toolspage_peopleteams_step1_title2":/** @type {(inputs: Toolspage_Peopleteams_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Employee handbook`)
},"toolspage_peopleteams_step2_description2":/** @type {(inputs: Toolspage_Peopleteams_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Track status, deadlines, and documentation with clear ownership and reminders.`)
},"toolspage_peopleteams_step2_title2":/** @type {(inputs: Toolspage_Peopleteams_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa tracking`)
},"toolspage_peopleteams_step3_description2":/** @type {(inputs: Toolspage_Peopleteams_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coordinate tasks, tools, and training so new hires ramp faster.`)
},"toolspage_peopleteams_step3_title2":/** @type {(inputs: Toolspage_Peopleteams_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onboarding portals`)
},"toolspage_peopleteams_title2":/** @type {(inputs: Toolspage_Peopleteams_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People teams`)
},"toolspage_productteams_step1_description2":/** @type {(inputs: Toolspage_Productteams_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help teammates see what's coming next and why it matters. Show work alongside customer feedback and insights.`)
},"toolspage_productteams_step1_title2":/** @type {(inputs: Toolspage_Productteams_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roadmap dashboards`)
},"toolspage_productteams_step2_description2":/** @type {(inputs: Toolspage_Productteams_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collect GTM requests, add context, and close the loop with clear status updates.`)
},"toolspage_productteams_step2_title2":/** @type {(inputs: Toolspage_Productteams_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feedback portals`)
},"toolspage_productteams_step3_description2":/** @type {(inputs: Toolspage_Productteams_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep customer requests in one place so nothing gets lost. Group and rank them, then link each one to the roadmap items it supports.`)
},"toolspage_productteams_step3_title2":/** @type {(inputs: Toolspage_Productteams_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature request trackers`)
},"toolspage_productteams_step4_description2":/** @type {(inputs: Toolspage_Productteams_Step4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep interview notes, recordings, and usability tests in a single, searchable space. Make it easy for anyone on the team to find real customer insights.`)
},"toolspage_productteams_step4_title2":/** @type {(inputs: Toolspage_Productteams_Step4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Research repositories`)
},"toolspage_productteams_title2":/** @type {(inputs: Toolspage_Productteams_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product teams`)
},"toolspage_salesmarketing_step1_description2":/** @type {(inputs: Toolspage_Salesmarketing_Step1_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate beautiful, custom, and on-brand pitch decks faster than ever with interactive functionality.`)
},"toolspage_salesmarketing_step1_title2":/** @type {(inputs: Toolspage_Salesmarketing_Step1_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slide deck builders`)
},"toolspage_salesmarketing_step2_description2":/** @type {(inputs: Toolspage_Salesmarketing_Step2_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show prospects their potential savings with custom inputs, branded design, and shareable results.`)
},"toolspage_salesmarketing_step2_title2":/** @type {(inputs: Toolspage_Salesmarketing_Step2_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ROI calculators`)
},"toolspage_salesmarketing_step3_description2":/** @type {(inputs: Toolspage_Salesmarketing_Step3_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Track performance across channels with metrics that matter to your team, not vendor defaults.`)
},"toolspage_salesmarketing_step3_title2":/** @type {(inputs: Toolspage_Salesmarketing_Step3_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campaign dashboards`)
},"toolspage_salesmarketing_step4_description2":/** @type {(inputs: Toolspage_Salesmarketing_Step4_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run registrations, forms, and cross-functional hubs without spreadsheets or manual ops work.`)
},"toolspage_salesmarketing_step4_title2":/** @type {(inputs: Toolspage_Salesmarketing_Step4_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Event & program tools`)
},"toolspage_salesmarketing_title2":/** @type {(inputs: Toolspage_Salesmarketing_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sales & marketing teams`)
},"toolspage_testimonial1_authorname2":/** @type {(inputs: Toolspage_Testimonial1_Authorname2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeffrey Leggo`)
},"toolspage_testimonial1_authortitle2":/** @type {(inputs: Toolspage_Testimonial1_Authortitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sr. Director, Product Marketing`)
},"toolspage_testimonial1_quote1":/** @type {(inputs: Toolspage_Testimonial1_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`"With Lovable, we can short-circuit tedious projects that we were previously managing in spreadsheets. We've saved weeks of labor this year."`)
},"toolspage_testimonial2_authorname2":/** @type {(inputs: Toolspage_Testimonial2_Authorname2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niklas Hatje`)
},"toolspage_testimonial2_authortitle2":/** @type {(inputs: Toolspage_Testimonial2_Authortitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group PM`)
},"toolspage_testimonial2_quote1":/** @type {(inputs: Toolspage_Testimonial2_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`"Where you would normally turn to some other tool, you can now build exactly the right tool you need. Without Lovable, we wouldn't have built it, or we would have used some existing tool that was suboptimal."`)
},"toolspage_testimonial3_authorname2":/** @type {(inputs: Toolspage_Testimonial3_Authorname2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seth Siegler`)
},"toolspage_testimonial3_authortitle2":/** @type {(inputs: Toolspage_Testimonial3_Authortitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chief Innovation Officer, eXp Realty`)
},"toolspage_testimonial3_quote1":/** @type {(inputs: Toolspage_Testimonial3_Quote1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`"The Hub is built by us and for us so it gives us unique features that could never be offered by a SaaS provider who sells to a whole base of customers. Plus since we're leveraging Lovable, we can iterate at warp speed."`)
},"typewriter_prefix1":/** @type {(inputs: Typewriter_Prefix1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to create `)
},"typewriter_words_01":/** @type {(inputs: Typewriter_Words_01Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a landing page for my...`)
},"typewriter_words_11":/** @type {(inputs: Typewriter_Words_11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a blog about...`)
},"typewriter_words_21":/** @type {(inputs: Typewriter_Words_21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a web app that...`)
},"typewriter_words_31":/** @type {(inputs: Typewriter_Words_31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a prototype...`)
},"typewriter_words_41":/** @type {(inputs: Typewriter_Words_41Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`an internal tool that...`)
},"typewriter_words_51":/** @type {(inputs: Typewriter_Words_51Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a dashboard to...`)
},"typewriteredu_prefix2":/** @type {(inputs: Typewriteredu_Prefix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to create `)
},"typewriteredu_words_02":/** @type {(inputs: Typewriteredu_Words_02Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a landing page for my...`)
},"typewriteredu_words_12":/** @type {(inputs: Typewriteredu_Words_12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a web app that...`)
},"typewriteredu_words_22":/** @type {(inputs: Typewriteredu_Words_22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a quiz competition game...`)
},"typewriteredu_words_32":/** @type {(inputs: Typewriteredu_Words_32Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a prototype...`)
},"typewriteredu_words_42":/** @type {(inputs: Typewriteredu_Words_42Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a flashcard learning tool...`)
},"typewriteredu_words_52":/** @type {(inputs: Typewriteredu_Words_52Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a blog about...`)
},"typewriteredu_words_62":/** @type {(inputs: Typewriteredu_Words_62Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a collaborative notetaking app...`)
},"typewriterexectool_prefix3":/** @type {(inputs: Typewriterexectool_Prefix3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to `)
},"typewriterexectool_words_03":/** @type {(inputs: Typewriterexectool_Words_03Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`build a landing page for my...`)
},"typewriterexectool_words_13":/** @type {(inputs: Typewriterexectool_Words_13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`create a presentation about...`)
},"typewriterexectool_words_23":/** @type {(inputs: Typewriterexectool_Words_23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`build a web app that...`)
},"typewriterexectool_words_33":/** @type {(inputs: Typewriterexectool_Words_33Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`generate a report on...`)
},"typewriterexectool_words_43":/** @type {(inputs: Typewriterexectool_Words_43Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`create a dashboard to...`)
},"typewriterexectool_words_53":/** @type {(inputs: Typewriterexectool_Words_53Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`analyze my data and...`)
},"typewriterexectool_words_63":/** @type {(inputs: Typewriterexectool_Words_63Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`build an internal tool that...`)
},"typewriterexectool_words_73":/** @type {(inputs: Typewriterexectool_Words_73Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`make a document that...`)
},"typewriterexectool_words_83":/** @type {(inputs: Typewriterexectool_Words_83Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`create a blog about...`)
},"typewriterexectool_words_93":/** @type {(inputs: Typewriterexectool_Words_93Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`build a prototype...`)
},"typewritershopify_prefix2":/** @type {(inputs: Typewritershopify_Prefix2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable to create a Shopify store for `)
},"typewritershopify_words_02":/** @type {(inputs: Typewritershopify_Words_02Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your clothing brand...`)
},"typewritershopify_words_12":/** @type {(inputs: Typewritershopify_Words_12Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your coffee roastery...`)
},"typewritershopify_words_22":/** @type {(inputs: Typewritershopify_Words_22Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your pottery studio...`)
},"usecaseswebsitespage_alt_backendai4":/** @type {(inputs: Usecaseswebsitespage_Alt_Backendai4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Cloud panel with backend and AI model setup options`)
},"usecaseswebsitespage_alt_backenddashboard4":/** @type {(inputs: Usecaseswebsitespage_Alt_Backenddashboard4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backend database dashboard with tables and cloud tools`)
},"usecaseswebsitespage_alt_designscreen4":/** @type {(inputs: Usecaseswebsitespage_Alt_Designscreen4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Example bug tracking website with a dark landing page and issue dashboard`)
},"usecaseswebsitespage_alt_integrationslogos4":/** @type {(inputs: Usecaseswebsitespage_Alt_Integrationslogos4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integration app logos with n8n highlighted in the center`)
},"usecaseswebsitespage_alt_introscreen4":/** @type {(inputs: Usecaseswebsitespage_Alt_Introscreen4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable editor showing a generated website with an AI chat sidebar`)
},"usecaseswebsitespage_backend_card1_description3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Database, authentication, file storage, and real-time features via Supabase.`)
},"usecaseswebsitespage_backend_card1_title3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real backend included`)
},"usecaseswebsitespage_backend_card2_description3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to Stripe or Paddle to accept payments, sell products, or gate content. Works out of the box, directly in the chat.`)
},"usecaseswebsitespage_backend_card2_title3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payments and e-commerce`)
},"usecaseswebsitespage_backend_card3_description3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to your CRM, email tools, analytics, and more via n8n. Send form submissions to HubSpot, trigger emails, and sync data without code.`)
},"usecaseswebsitespage_backend_card3_title3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`400+ integrations`)
},"usecaseswebsitespage_backend_card4_description3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add chatbots, AI-powered search, or text analysis directly to your website.`)
},"usecaseswebsitespage_backend_card4_title3":/** @type {(inputs: Usecaseswebsitespage_Backend_Card4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add AI to your site`)
},"usecaseswebsitespage_backend_description3":/** @type {(inputs: Usecaseswebsitespage_Backend_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable websites don't need to be static pages. Add forms, user accounts, payments, or AI features - all from the same chat where you built the site.`)
},"usecaseswebsitespage_backend_label3":/** @type {(inputs: Usecaseswebsitespage_Backend_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backend and integrations`)
},"usecaseswebsitespage_backend_title3":/** @type {(inputs: Usecaseswebsitespage_Backend_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More than a website`)
},"usecaseswebsitespage_cases_case1_description3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship a launch page for your product in an afternoon. Iterate on copy and design in the chat, publish, and start driving traffic the same day.`)
},"usecaseswebsitespage_cases_case1_title3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Product launch pages`)
},"usecaseswebsitespage_cases_case2_description3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build targeted landing pages for ads, email campaigns, or product launches. Spin up variants fast and let Semrush help you target the right keywords directly in chat.`)
},"usecaseswebsitespage_cases_case2_title3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landing pages for campaigns`)
},"usecaseswebsitespage_cases_case3_description3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Put your business online with a professional, custom-built website. Add pages, update content, and manage everything in the chat.`)
},"usecaseswebsitespage_cases_case3_title3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Business websites`)
},"usecaseswebsitespage_cases_case4_description3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a portfolio that stands out. Drop in your work, describe the vibe, and Lovable handles the design and code.`)
},"usecaseswebsitespage_cases_case4_title3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portfolio and personal sites`)
},"usecaseswebsitespage_cases_case5_description3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case5_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build keyword-targeted pages and content hubs that search engines can index immediately. Ask the agent what to target next and build the page in the same conversation.`)
},"usecaseswebsitespage_cases_case5_title3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case5_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SEO-optimized content hubs`)
},"usecaseswebsitespage_cases_case6_description3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case6_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build client sites faster than any traditional workflow.`)
},"usecaseswebsitespage_cases_case6_title3":/** @type {(inputs: Usecaseswebsitespage_Cases_Case6_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client websites`)
},"usecaseswebsitespage_cases_titleline14":/** @type {(inputs: Usecaseswebsitespage_Cases_Titleline14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What kind of websites`)
},"usecaseswebsitespage_cases_titleline24":/** @type {(inputs: Usecaseswebsitespage_Cases_Titleline24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`people build on Lovable`)
},"usecaseswebsitespage_casesdemo_intro4":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Intro4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Great, your project is ready to evolve! Looking at your Linea Jewelry storefront, here are some impactful directions to consider:`)
},"usecaseswebsitespage_casesdemo_section1_item14":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section1_Item14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Lovable Cloud to add real product data, user accounts, and a working cart/checkout.`)
},"usecaseswebsitespage_casesdemo_section1_item24":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section1_Item24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect Stripe for actual payments`)
},"usecaseswebsitespage_casesdemo_section1_title4":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section1_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make it functional`)
},"usecaseswebsitespage_casesdemo_section2_item14":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section2_Item14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build out the product detail page interactions (size selector, wishlist, recently viewed)`)
},"usecaseswebsitespage_casesdemo_section2_item24":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section2_Item24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a working search and filter system on category pages`)
},"usecaseswebsitespage_casesdemo_section2_item34":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section2_Item34Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create smooth page transitions with framer-motion`)
},"usecaseswebsitespage_casesdemo_section2_title4":/** @type {(inputs: Usecaseswebsitespage_Casesdemo_Section2_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polish the experience`)
},"usecaseswebsitespage_cta_learnmore4":/** @type {(inputs: Usecaseswebsitespage_Cta_Learnmore4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
},"usecaseswebsitespage_demo_edit3":/** @type {(inputs: Usecaseswebsitespage_Demo_Edit3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
},"usecaseswebsitespage_demo_promptplaceholder4":/** @type {(inputs: Usecaseswebsitespage_Demo_Promptplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable...`)
},"usecaseswebsitespage_design_feature1_description3":/** @type {(inputs: Usecaseswebsitespage_Design_Feature1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Professional design quality out of the box - clean typography, consistent spacing, thoughtful layouts.`)
},"usecaseswebsitespage_design_feature1_title3":/** @type {(inputs: Usecaseswebsitespage_Design_Feature1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beautiful defaults`)
},"usecaseswebsitespage_design_feature2_description3":/** @type {(inputs: Usecaseswebsitespage_Design_Feature2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tweak layouts, colors, and text with direct visual control. See changes instantly and bring your vision to life exactly as you imagined it.`)
},"usecaseswebsitespage_design_feature2_title3":/** @type {(inputs: Usecaseswebsitespage_Design_Feature2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visual editing`)
},"usecaseswebsitespage_design_feature3_description3":/** @type {(inputs: Usecaseswebsitespage_Design_Feature3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built on TanStack Start - a modern, full-stack TypeScript framework. Any developer can pick up your code and keep building.`)
},"usecaseswebsitespage_design_feature3_title3":/** @type {(inputs: Usecaseswebsitespage_Design_Feature3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modern, standard tech stack`)
},"usecaseswebsitespage_design_label3":/** @type {(inputs: Usecaseswebsitespage_Design_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design`)
},"usecaseswebsitespage_design_titleline14":/** @type {(inputs: Usecaseswebsitespage_Design_Titleline14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premium design,`)
},"usecaseswebsitespage_design_titleline24":/** @type {(inputs: Usecaseswebsitespage_Design_Titleline24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`no designer required`)
},"usecaseswebsitespage_faq1_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq1_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Connect a custom domain in project settings, or buy a domain directly in the Lovable interface.`)
},"usecaseswebsitespage_faq1_question3":/** @type {(inputs: Usecaseswebsitespage_Faq1_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I connect my own domain?`)
},"usecaseswebsitespage_faq2_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq2_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can build both. Start with a focused landing page, then add more pages, navigation, forms, auth, payments, and backend logic as the site grows.`)
},"usecaseswebsitespage_faq2_question3":/** @type {(inputs: Usecaseswebsitespage_Faq2_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Is Lovable just for landing pages, or can I build a full website?`)
},"usecaseswebsitespage_faq3_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq3_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Lovable helps you ship crawlable pages with titles, meta descriptions, social previews, sitemaps, robots.txt, and server-rendered content.`)
},"usecaseswebsitespage_faq3_question3":/** @type {(inputs: Usecaseswebsitespage_Faq3_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are Lovable websites SEO-friendly?`)
},"usecaseswebsitespage_faq4_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq4_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. Sync your project to GitHub and keep full access to the code, whether you continue building in Lovable or hand it off to your team.`)
},"usecaseswebsitespage_faq4_question3":/** @type {(inputs: Usecaseswebsitespage_Faq4_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can I export the code?`)
},"usecaseswebsitespage_faq5_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq5_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable generates modern React apps with TypeScript, Vite, Tailwind CSS, and Supabase-backed functionality by default.`)
},"usecaseswebsitespage_faq5_question3":/** @type {(inputs: Usecaseswebsitespage_Faq5_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What tech stack does Lovable use?`)
},"usecaseswebsitespage_faq6_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq6_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lovable works with Supabase, GitHub, Stripe, Paddle, Resend, and other services through APIs, webhooks, and built-in integrations.`)
},"usecaseswebsitespage_faq6_question3":/** @type {(inputs: Usecaseswebsitespage_Faq6_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What integrations work with Lovable?`)
},"usecaseswebsitespage_faq7_answer3":/** @type {(inputs: Usecaseswebsitespage_Faq7_Answer3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can start building for free, then upgrade when you need more credits, custom domains, or team features. See the pricing page for current plans.`)
},"usecaseswebsitespage_faq7_question3":/** @type {(inputs: Usecaseswebsitespage_Faq7_Question3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How much does it cost?`)
},"usecaseswebsitespage_faq_titleline14":/** @type {(inputs: Usecaseswebsitespage_Faq_Titleline14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frequently`)
},"usecaseswebsitespage_faq_titleline24":/** @type {(inputs: Usecaseswebsitespage_Faq_Titleline24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`asked questions`)
},"usecaseswebsitespage_hero_label3":/** @type {(inputs: Usecaseswebsitespage_Hero_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Website & Landing Page Builder`)
},"usecaseswebsitespage_hero_subtitleline14":/** @type {(inputs: Usecaseswebsitespage_Hero_Subtitleline14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build beautiful, SEO and AEO optimized websites and landing pages by chatting with AI.`)
},"usecaseswebsitespage_hero_subtitleline24":/** @type {(inputs: Usecaseswebsitespage_Hero_Subtitleline24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No clunky CMS, no waiting for developers.`)
},"usecaseswebsitespage_hero_subtitleline34":/** @type {(inputs: Usecaseswebsitespage_Hero_Subtitleline34Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just describe what you need.`)
},"usecaseswebsitespage_hero_title3":/** @type {(inputs: Usecaseswebsitespage_Hero_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From first draft to live site in one conversation`)
},"usecaseswebsitespage_intro_description3":/** @type {(inputs: Usecaseswebsitespage_Intro_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe what you want in plain language, drop in a screenshot, and Lovable builds a real, production-grade website. Iterate in the chat or use visual editing to refine directly. Publish when you're ready.`)
},"usecaseswebsitespage_intro_feature1_description3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A sentence, a screenshot, a Figma file, or a Notion doc. Lovable takes your input and builds a working website you can share and iterate on immediately.`)
},"usecaseswebsitespage_intro_feature1_title3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start from anything`)
},"usecaseswebsitespage_intro_feature2_description3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish with one click to a Lovable subdomain or connect your own custom domain. Hosting, SSL, and performance are handled for you.`)
},"usecaseswebsitespage_intro_feature2_title3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship it`)
},"usecaseswebsitespage_intro_feature3_description3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change layouts, swap sections, and rewrite copy in the chat - or use visual editing to tweak colors, text, and spacing directly. No drag-and-drop page builders, no rigid templates.`)
},"usecaseswebsitespage_intro_feature3_title3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iterate your way`)
},"usecaseswebsitespage_intro_feature4_description3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync to GitHub from day one. Hand off to a developer whenever you want, or keep building on Lovable.`)
},"usecaseswebsitespage_intro_feature4_title3":/** @type {(inputs: Usecaseswebsitespage_Intro_Feature4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export anytime`)
},"usecaseswebsitespage_intro_title3":/** @type {(inputs: Usecaseswebsitespage_Intro_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real websites without the CMS compromise`)
},"usecaseswebsitespage_meta_description3":/** @type {(inputs: Usecaseswebsitespage_Meta_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build beautiful, SEO- and AEO-ready websites and landing pages by chatting with AI. Publish to a Lovable subdomain, connect a custom domain, add backend features, and keep the code.`)
},"usecaseswebsitespage_meta_title3":/** @type {(inputs: Usecaseswebsitespage_Meta_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Website & Landing Page Builder | Lovable`)
},"usecaseswebsitespage_quote_jonathantembo_quote4":/** @type {(inputs: Usecaseswebsitespage_Quote_Jonathantembo_Quote4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We run an agency with 300+ clients and $600K ARR using Lovable. What used to take weeks of design and dev now takes hours or days, and clients get a real, full-stack website: forms, payments, integrations, all of it.`)
},"usecaseswebsitespage_quote_jonathantembo_title4":/** @type {(inputs: Usecaseswebsitespage_Quote_Jonathantembo_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-founder, J&T Promotions`)
},"usecaseswebsitespage_search_description3":/** @type {(inputs: Usecaseswebsitespage_Search_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most website builders help you build, then leave you to figure out how anyone will find it. Lovable ships your site discoverable by default - on Google and in AI search tools like ChatGPT, Claude, and Perplexity.`)
},"usecaseswebsitespage_search_item1_description3":/** @type {(inputs: Usecaseswebsitespage_Search_Item1_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your pages ship as fully rendered HTML that search engines and AI crawlers can read and index immediately.`)
},"usecaseswebsitespage_search_item1_title3":/** @type {(inputs: Usecaseswebsitespage_Search_Item1_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server-side rendering`)
},"usecaseswebsitespage_search_item2_description3":/** @type {(inputs: Usecaseswebsitespage_Search_Item2_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page titles, meta descriptions, Open Graph tags, sitemaps, and robots.txt all handled automatically.`)
},"usecaseswebsitespage_search_item2_title3":/** @type {(inputs: Usecaseswebsitespage_Search_Item2_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic SEO fundamentals`)
},"usecaseswebsitespage_search_item3_description3":/** @type {(inputs: Usecaseswebsitespage_Search_Item3_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask "what am I ranking for?" or "what keywords should I target?" and get answers backed by Semrush data, directly in the builder chat. Uses regular build credits, free through August 15, 2026.`)
},"usecaseswebsitespage_search_item3_title3":/** @type {(inputs: Usecaseswebsitespage_Search_Item3_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat with your search data`)
},"usecaseswebsitespage_search_item4_description3":/** @type {(inputs: Usecaseswebsitespage_Search_Item4_Description3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your site is optimized for discovery in ChatGPT, Claude, Perplexity, and other AI search tools.`)
},"usecaseswebsitespage_search_item4_title3":/** @type {(inputs: Usecaseswebsitespage_Search_Item4_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI search visibility`)
},"usecaseswebsitespage_search_label3":/** @type {(inputs: Usecaseswebsitespage_Search_Label3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
},"usecaseswebsitespage_search_titleline14":/** @type {(inputs: Usecaseswebsitespage_Search_Titleline14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search-ready`)
},"usecaseswebsitespage_search_titleline24":/** @type {(inputs: Usecaseswebsitespage_Search_Titleline24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`from day one`)
},"usecaseswebsitespage_searchassetai_question5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Question5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How should I manage my rental property?`)
},"usecaseswebsitespage_searchassetai_result1_description5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Result1_Description5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scale your short-term rental business with our automated channel manager, unified guest inbox, and real-time sync calendar.`)
},"usecaseswebsitespage_searchassetai_result1_title5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Result1_Title5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All-in-one BnB management`)
},"usecaseswebsitespage_searchassetai_result2_description5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Result2_Description5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automate tasks like guest communication, payment processing, and calendar updates.`)
},"usecaseswebsitespage_searchassetai_result2_title5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Result2_Title5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get your rental business under control`)
},"usecaseswebsitespage_searchassetai_result3_description5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Result3_Description5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scale your short-term rental business with our automated channel manager, unified guest inbox, and real-time sync calendar.`)
},"usecaseswebsitespage_searchassetai_result3_title5":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Result3_Title5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The ultimate solution for your rental empire`)
},"usecaseswebsitespage_searchassetai_resultstitle6":/** @type {(inputs: Usecaseswebsitespage_Searchassetai_Resultstitle6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top 10 BnB Property Management Software`)
},"usecaseswebsitespage_searchassetchat_questionprefix6":/** @type {(inputs: Usecaseswebsitespage_Searchassetchat_Questionprefix6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hey `)
},"usecaseswebsitespage_searchassetchat_questionsuffix6":/** @type {(inputs: Usecaseswebsitespage_Searchassetchat_Questionsuffix6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`, how findable is my site?`)
},"usecaseswebsitespage_searchassetchat_table_estimatedtraffic6":/** @type {(inputs: Usecaseswebsitespage_Searchassetchat_Table_Estimatedtraffic6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estimated traffic`)
},"usecaseswebsitespage_searchassetchat_table_market5":/** @type {(inputs: Usecaseswebsitespage_Searchassetchat_Table_Market5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Market`)
},"usecaseswebsitespage_searchassetchat_table_rankedkeywords6":/** @type {(inputs: Usecaseswebsitespage_Searchassetchat_Table_Rankedkeywords6Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranked keywords`)
},"usecaseswebsitespage_searchassetchat_thought5":/** @type {(inputs: Usecaseswebsitespage_Searchassetchat_Thought5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thought for 15s...`)
},"usermessage_backgroundtaskfinished3":/** @type {(inputs: Usermessage_Backgroundtaskfinished3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A background task finished`)
},"usermessage_subagentfinished3":/** @type {(inputs: Usermessage_Subagentfinished3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} finished`)
},"usermessage_workingontasks3":/** @type {(inputs: Usermessage_Workingontasks3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Working on tasks`)
},"usernamedialog_cancel1":/** @type {(inputs: Usernamedialog_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"usernamedialog_changehandletitle3":/** @type {(inputs: Usernamedialog_Changehandletitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change your workspace handle`)
},"usernamedialog_changeusernametitle3":/** @type {(inputs: Usernamedialog_Changeusernametitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change your username`)
},"usernamedialog_characterhint2":/** @type {(inputs: Usernamedialog_Characterhint2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Up to 20 characters (letters, numbers or _)`)
},"usernamedialog_save1":/** @type {(inputs: Usernamedialog_Save1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
},"usernamedialog_sethandletitle3":/** @type {(inputs: Usernamedialog_Sethandletitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set your workspace handle`)
},"usernamedialog_setusernametitle3":/** @type {(inputs: Usernamedialog_Setusernametitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set your username`)
},"usernamedialog_suggestions1":/** @type {(inputs: Usernamedialog_Suggestions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggestions`)
},"usernamedialog_updatefailedhandle3":/** @type {(inputs: Usernamedialog_Updatefailedhandle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update workspace handle. Please try again.`)
},"usernamedialog_updatefailedusername3":/** @type {(inputs: Usernamedialog_Updatefailedusername3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update username. Please try again.`)
},"variantdialog_agentbusytryagain4":/** @type {(inputs: Variantdialog_Agentbusytryagain4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The agent is busy, please try again later`)
},"variantdialog_agentworking2":/** @type {(inputs: Variantdialog_Agentworking2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent is working`)
},"variantdialog_creatingdraft2":/** @type {(inputs: Variantdialog_Creatingdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating draft`)
},"variantdialog_deletedraftdescription3":/** @type {(inputs: Variantdialog_Deletedraftdescription3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.label}” will be hidden from the drafts list.`)
},"variantdialog_deletedrafttitle3":/** @type {(inputs: Variantdialog_Deletedrafttitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete draft?`)
},"variantdialog_deletingdraft2":/** @type {(inputs: Variantdialog_Deletingdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleting draft`)
},"variantdialog_dismisserror2":/** @type {(inputs: Variantdialog_Dismisserror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss error`)
},"variantdialog_failedtoupdatedraft4":/** @type {(inputs: Variantdialog_Failedtoupdatedraft4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update draft`)
},"variantdialog_newchanges2":/** @type {(inputs: Variantdialog_Newchanges2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New changes`)
},"variantdialog_nocollaborators2":/** @type {(inputs: Variantdialog_Nocollaborators2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No collaborators on this draft yet.`)
},"variantdialog_noneweditsfrombase5":/** @type {(inputs: Variantdialog_Noneweditsfrombase5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No new edits from Base.`)
},"variantdialog_operationfailed2":/** @type {(inputs: Variantdialog_Operationfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operation failed`)
},"variantdialog_publish1":/** @type {(inputs: Variantdialog_Publish1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish`)
},"variantdialog_publishdescription2":/** @type {(inputs: Variantdialog_Publishdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing will add the changes from this draft to the project’s unpublished changes. Other unpublished drafts will need to be synced before they can be published.`)
},"variantdialog_publishingdraft2":/** @type {(inputs: Variantdialog_Publishingdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing draft`)
},"variantdialog_publishtitle2":/** @type {(inputs: Variantdialog_Publishtitle2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publish draft “${i?.label}”?`)
},"variantdialog_retry1":/** @type {(inputs: Variantdialog_Retry1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
},"variantdialog_sectioncollaborators2":/** @type {(inputs: Variantdialog_Sectioncollaborators2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collaborators`)
},"variantdialog_sectionedits2":/** @type {(inputs: Variantdialog_Sectionedits2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edits`)
},"variantdialog_sectionincomingchanges3":/** @type {(inputs: Variantdialog_Sectionincomingchanges3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incoming changes`)
},"variantdialog_sync1":/** @type {(inputs: Variantdialog_Sync1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync`)
},"variantdialog_syncdescription2":/** @type {(inputs: Variantdialog_Syncdescription2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will bring the latest edits from Base into this draft.`)
},"variantdialog_syncfailed2":/** @type {(inputs: Variantdialog_Syncfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync failed`)
},"variantdialog_syncgeneric2":/** @type {(inputs: Variantdialog_Syncgeneric2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Syncing brings this draft up to date with the latest edits from Base.`)
},"variantdialog_syncingdraft2":/** @type {(inputs: Variantdialog_Syncingdraft2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Syncing draft`)
},"verifieddomainspage_alldomains_title3":/** @type {(inputs: Verifieddomainspage_Alldomains_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All verified domains`)
},"verifieddomainspage_howtoverify_item14":/** @type {(inputs: Verifieddomainspage_Howtoverify_Item14Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the <b>from</b> email: it should end with <b>one of our verified domains</b>.`)
},"verifieddomainspage_howtoverify_item24":/** @type {(inputs: Verifieddomainspage_Howtoverify_Item24Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hover links before you click. We only link to this page, <b>lovable.dev</b> or another verified domain.`)
},"verifieddomainspage_howtoverify_item34":/** @type {(inputs: Verifieddomainspage_Howtoverify_Item34Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not sure? Forward it to <b>security@lovable.dev</b> or <b>hi@lovable.dev</b> and we'll confirm fast.`)
},"verifieddomainspage_howtoverify_item44":/** @type {(inputs: Verifieddomainspage_Howtoverify_Item44Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We use industry-standard email authentication. If your client flags a warning, ask us to re-send.`)
},"verifieddomainspage_howtoverify_title4":/** @type {(inputs: Verifieddomainspage_Howtoverify_Title4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to verify it's us`)
},"verifieddomainspage_meta_description2":/** @type {(inputs: Verifieddomainspage_Meta_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify if a domain, URL, or email address belongs to Lovable. Check our list of verified domains.`)
},"verifieddomainspage_meta_title2":/** @type {(inputs: Verifieddomainspage_Meta_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify Lovable Domains`)
},"verifieddomainspage_neverdo_item13":/** @type {(inputs: Verifieddomainspage_Neverdo_Item13Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask for your password, 2FA codes, or credit card over email.`)
},"verifieddomainspage_neverdo_item23":/** @type {(inputs: Verifieddomainspage_Neverdo_Item23Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send attachments that look odd or ask you to install software.`)
},"verifieddomainspage_neverdo_title3":/** @type {(inputs: Verifieddomainspage_Neverdo_Title3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What we'll never do`)
},"verifieddomainspage_resultnotverified4":/** @type {(inputs: Verifieddomainspage_Resultnotverified4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This domain is not associated with Lovable`)
},"verifieddomainspage_resultverified3":/** @type {(inputs: Verifieddomainspage_Resultverified3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a verified Lovable domain`)
},"verifieddomainspage_searchlabel3":/** @type {(inputs: Verifieddomainspage_Searchlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check if a domain belongs to Lovable`)
},"verifieddomainspage_searchplaceholder3":/** @type {(inputs: Verifieddomainspage_Searchplaceholder3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a domain, URL, or email address...`)
},"verifieddomainspage_title2":/** @type {(inputs: Verifieddomainspage_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify Lovable Domains`)
},"verifyemail_checking_description1":/** @type {(inputs: Verifyemail_Checking_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Just a moment while we confirm your email.`)
},"verifyemail_checking_title1":/** @type {(inputs: Verifyemail_Checking_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking your verification...`)
},"verifyemail_error_checkstatusfailed3":/** @type {(inputs: Verifyemail_Error_Checkstatusfailed3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to check status`)
},"verifyemail_error_checkstatusfaileddescription4":/** @type {(inputs: Verifyemail_Error_Checkstatusfaileddescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again in a moment.`)
},"verifyemail_error_generic1":/** @type {(inputs: Verifyemail_Error_Generic1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error verifying email`)
},"verifyemail_error_invalidcode2":/** @type {(inputs: Verifyemail_Error_Invalidcode2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid verification code`)
},"verifyemail_error_notyetverified3":/** @type {(inputs: Verifyemail_Error_Notyetverified3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email not yet verified`)
},"verifyemail_error_notyetverifieddescription4":/** @type {(inputs: Verifyemail_Error_Notyetverifieddescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please click the verification link in your email first.`)
},"verifyemail_error_resendfailed2":/** @type {(inputs: Verifyemail_Error_Resendfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to resend verification email`)
},"verifyemail_error_resendfaileddescription3":/** @type {(inputs: Verifyemail_Error_Resendfaileddescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try refreshing the page.`)
},"verifyemail_error_somethingwrong2":/** @type {(inputs: Verifyemail_Error_Somethingwrong2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong`)
},"verifyemail_error_title1":/** @type {(inputs: Verifyemail_Error_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
},"verifyemail_error_toomanyrequests3":/** @type {(inputs: Verifyemail_Error_Toomanyrequests3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many requests`)
},"verifyemail_error_toomanyrequestsdescription4":/** @type {(inputs: Verifyemail_Error_Toomanyrequestsdescription4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your email or please try again later.`)
},"verifyemail_pending_checkstatus2":/** @type {(inputs: Verifyemail_Pending_Checkstatus2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I've verified my email`)
},"verifyemail_pending_description1":/** @type {(inputs: Verifyemail_Pending_Description1Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Click the link we sent to ${i?.email} to finish your account setup.`)
},"verifyemail_pending_didntreceiveemail3":/** @type {(inputs: Verifyemail_Pending_Didntreceiveemail3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Didn't receive an email?`)
},"verifyemail_pending_openemailprovider3":/** @type {(inputs: Verifyemail_Pending_Openemailprovider3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Open ${i?.provider}`)
},"verifyemail_pending_resendemail2":/** @type {(inputs: Verifyemail_Pending_Resendemail2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resend`)
},"verifyemail_pending_title1":/** @type {(inputs: Verifyemail_Pending_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your inbox`)
},"verifyemail_pending_tryagaincountdown3":/** @type {(inputs: Verifyemail_Pending_Tryagaincountdown3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Try again in ${i?.count}s`)
},"verifyemail_success_continuetoapp3":/** @type {(inputs: Verifyemail_Success_Continuetoapp3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
},"verifyemail_success_description1":/** @type {(inputs: Verifyemail_Success_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re all set. Your email has been successfully verified.`)
},"verifyemail_success_redirecting1":/** @type {(inputs: Verifyemail_Success_Redirecting1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirecting...`)
},"verifyemail_success_title1":/** @type {(inputs: Verifyemail_Success_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verified`)
},"visibilityselection_draft_description1":/** @type {(inputs: Visibilityselection_Draft_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only visible to yourself, unless shared`)
},"visibilityselection_draft_title1":/** @type {(inputs: Visibilityselection_Draft_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restricted`)
},"visibilityselection_public_description1":/** @type {(inputs: Visibilityselection_Public_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone can view and remix`)
},"visibilityselection_public_title1":/** @type {(inputs: Visibilityselection_Public_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public`)
},"visibilityselection_workspace_description1":/** @type {(inputs: Visibilityselection_Workspace_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only visible to your workspace`)
},"visibilityselection_workspace_title1":/** @type {(inputs: Visibilityselection_Workspace_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace`)
},"visibilityselection_workspaceview_description2":/** @type {(inputs: Visibilityselection_Workspaceview_Description2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your workspace can view but not edit`)
},"visibilityselection_workspaceview_title2":/** @type {(inputs: Visibilityselection_Workspaceview_Title2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workspace (view only)`)
},"visionpage_cta1":/** @type {(inputs: Visionpage_Cta1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join us`)
},"visionpage_meta_description1":/** @type {(inputs: Visionpage_Meta_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our vision is to unlock human creativity by enabling anyone to create software`)
},"visionpage_meta_title1":/** @type {(inputs: Visionpage_Meta_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vision | Lovable`)
},"visionpage_paragraph11":/** @type {(inputs: Visionpage_Paragraph11Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For three decades, software has been the most significant tool to unleash the world’s ambition. Still, less than 1% of the world has the skills required to create software.`)
},"visionpage_paragraph21":/** @type {(inputs: Visionpage_Paragraph21Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If we succeed, everyone will have the same capabilities that entire product development teams at stellar tech companies have today. We believe this will unlock a new era of innovation.`)
},"visionpage_paragraph31":/** @type {(inputs: Visionpage_Paragraph31Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We’re reducing the barriers to build and are committed to the cause: Unleash human creativity on an unprecedented scale.`)
},"visionpage_subtitle1":/** @type {(inputs: Visionpage_Subtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To unlock human creativity — by enabling anyone to create software`)
},"visionpage_title1":/** @type {(inputs: Visionpage_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Our Vision`)
},"voicerecordingactions_apply2":/** @type {(inputs: Voicerecordingactions_Apply2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply recording`)
},"voicerecordingactions_discard2":/** @type {(inputs: Voicerecordingactions_Discard2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard recording`)
},"voicerecordingactions_retry2":/** @type {(inputs: Voicerecordingactions_Retry2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry transcription`)
},"voicetranscription_enablevoicemode3":/** @type {(inputs: Voicetranscription_Enablevoicemode3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable voice mode`)
},"voicetranscription_failed1":/** @type {(inputs: Voicetranscription_Failed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voice to text failed. Try again.`)
},"voicetranscription_finishrecording2":/** @type {(inputs: Voicetranscription_Finishrecording2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finish recording`)
},"voicetranscription_transcribing1":/** @type {(inputs: Voicetranscription_Transcribing1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcribing...`)
},"workspacechat_actions1":/** @type {(inputs: Workspacechat_Actions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat actions`)
},"workspacechat_askanything2":/** @type {(inputs: Workspacechat_Askanything2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Lovable anything…`)
},"workspacechat_cancel1":/** @type {(inputs: Workspacechat_Cancel1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
},"workspacechat_chatmessagelabel3":/** @type {(inputs: Workspacechat_Chatmessagelabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat message`)
},"workspacechat_couldnotloadchats4":/** @type {(inputs: Workspacechat_Couldnotloadchats4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load chats`)
},"workspacechat_delete1":/** @type {(inputs: Workspacechat_Delete1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
},"workspacechat_deleted1":/** @type {(inputs: Workspacechat_Deleted1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat deleted`)
},"workspacechat_deletedialogdescription3":/** @type {(inputs: Workspacechat_Deletedialogdescription3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to delete this chat?`)
},"workspacechat_deletedialogtitle3":/** @type {(inputs: Workspacechat_Deletedialogtitle3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete chat`)
},"workspacechat_emptystarthint3":/** @type {(inputs: Workspacechat_Emptystarthint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start a workspace chat and it will show up here.`)
},"workspacechat_failedtorename3":/** @type {(inputs: Workspacechat_Failedtorename3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to rename chat`)
},"workspacechat_failedtostar3":/** @type {(inputs: Workspacechat_Failedtostar3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to star chat`)
},"workspacechat_failedtounstar3":/** @type {(inputs: Workspacechat_Failedtounstar3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to unstar chat`)
},"workspacechat_generatingtitle2":/** @type {(inputs: Workspacechat_Generatingtitle2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating title`)
},"workspacechat_hidesidebar2":/** @type {(inputs: Workspacechat_Hidesidebar2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide chat sidebar`)
},"workspacechat_listingfailed2":/** @type {(inputs: Workspacechat_Listingfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The chat listing failed to load.`)
},"workspacechat_loadingworkspace2":/** @type {(inputs: Workspacechat_Loadingworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading workspace…`)
},"workspacechat_mentionedempty2":/** @type {(inputs: Workspacechat_Mentionedempty2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projects mentioned in this chat will appear here.`)
},"workspacechat_nochatsyet3":/** @type {(inputs: Workspacechat_Nochatsyet3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No chats yet`)
},"workspacechat_nomatchingchats3":/** @type {(inputs: Workspacechat_Nomatchingchats3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching chats`)
},"workspacechat_norecentchats3":/** @type {(inputs: Workspacechat_Norecentchats3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No recent chats`)
},"workspacechat_openactionsfor3":/** @type {(inputs: Workspacechat_Openactionsfor3Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Open actions for ${i?.title}`)
},"workspacechat_previewof2":/** @type {(inputs: Workspacechat_Previewof2Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Preview of ${i?.label}`)
},"workspacechat_projectcardlabel3":/** @type {(inputs: Workspacechat_Projectcardlabel3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web app`)
},"workspacechat_recents1":/** @type {(inputs: Workspacechat_Recents1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recents`)
},"workspacechat_rename1":/** @type {(inputs: Workspacechat_Rename1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename`)
},"workspacechat_renamechatarialabel4":/** @type {(inputs: Workspacechat_Renamechatarialabel4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename chat`)
},"workspacechat_renamed1":/** @type {(inputs: Workspacechat_Renamed1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat renamed`)
},"workspacechat_resizeartifact2":/** @type {(inputs: Workspacechat_Resizeartifact2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resize artifact panel`)
},"workspacechat_searchplaceholder2":/** @type {(inputs: Workspacechat_Searchplaceholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search chats...`)
},"workspacechat_selectworkspace2":/** @type {(inputs: Workspacechat_Selectworkspace2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a workspace to chat`)
},"workspacechat_senderror2":/** @type {(inputs: Workspacechat_Senderror2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong`)
},"workspacechat_senderrorhint3":/** @type {(inputs: Workspacechat_Senderrorhint3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try sending your message again.`)
},"workspacechat_sendfailed2":/** @type {(inputs: Workspacechat_Sendfailed2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to send message`)
},"workspacechat_sendmessage2":/** @type {(inputs: Workspacechat_Sendmessage2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send message`)
},"workspacechat_showsidebar2":/** @type {(inputs: Workspacechat_Showsidebar2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show chat sidebar`)
},"workspacechat_sortalphabetical2":/** @type {(inputs: Workspacechat_Sortalphabetical2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alphabetical`)
},"workspacechat_sortdatecreated3":/** @type {(inputs: Workspacechat_Sortdatecreated3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date created`)
},"workspacechat_sortlastedited3":/** @type {(inputs: Workspacechat_Sortlastedited3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last edited`)
},"workspacechat_star1":/** @type {(inputs: Workspacechat_Star1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Star chat`)
},"workspacechat_trydifferentsearch3":/** @type {(inputs: Workspacechat_Trydifferentsearch3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try a different search term.`)
},"workspacechat_unabletoload3":/** @type {(inputs: Workspacechat_Unabletoload3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unable to load chat`)
},"workspacechat_unabletoloadhint4":/** @type {(inputs: Workspacechat_Unabletoloadhint4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refresh the page or try again in a moment.`)
},"workspacechat_unknowntime2":/** @type {(inputs: Workspacechat_Unknowntime2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown`)
},"workspacechat_unstar1":/** @type {(inputs: Workspacechat_Unstar1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unstar chat`)
},"workspacediscovery_join1":/** @type {(inputs: Workspacediscovery_Join1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join`)
},"workspacediscovery_joined1":/** @type {(inputs: Workspacediscovery_Joined1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Joined`)
},"workspacediscovery_request1":/** @type {(inputs: Workspacediscovery_Request1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request`)
},"workspacediscovery_requested1":/** @type {(inputs: Workspacediscovery_Requested1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requested`)
},"workspaceprojectfilters_labels_order2":/** @type {(inputs: Workspaceprojectfilters_Labels_Order2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Order`)
},"workspaceprojectfilters_labels_sortby3":/** @type {(inputs: Workspaceprojectfilters_Labels_Sortby3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort by`)
},"workspaceprojectfilters_order_atoz4":/** @type {(inputs: Workspaceprojectfilters_Order_Atoz4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A–Z`)
},"workspaceprojectfilters_order_newestfirst3":/** @type {(inputs: Workspaceprojectfilters_Order_Newestfirst3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest first`)
},"workspaceprojectfilters_order_oldestfirst3":/** @type {(inputs: Workspaceprojectfilters_Order_Oldestfirst3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest first`)
},"workspaceprojectfilters_order_ztoa4":/** @type {(inputs: Workspaceprojectfilters_Order_Ztoa4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z–A`)
},"workspaceprojectfilters_search_placeholder2":/** @type {(inputs: Workspaceprojectfilters_Search_Placeholder2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search projects...`)
},"workspaceprojectfilters_sortby_alphabetical3":/** @type {(inputs: Workspaceprojectfilters_Sortby_Alphabetical3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alphabetical`)
},"workspaceprojectfilters_sortby_datecreated4":/** @type {(inputs: Workspaceprojectfilters_Sortby_Datecreated4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date created`)
},"workspaceprojectfilters_sortby_lastedited4":/** @type {(inputs: Workspaceprojectfilters_Sortby_Lastedited4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last edited`)
},"workspaceprojectfilters_userfilter_allcreators4":/** @type {(inputs: Workspaceprojectfilters_Userfilter_Allcreators4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All creators`)
},"workspaceprojectfilters_userfilter_searchplaceholder4":/** @type {(inputs: Workspaceprojectfilters_Userfilter_Searchplaceholder4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search creators...`)
},"workspaceprojectfilters_userfilter_you3":/** @type {(inputs: Workspaceprojectfilters_Userfilter_You3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(You)`)
},"workspaceprojects_noprojectsfound3":/** @type {(inputs: Workspaceprojects_Noprojectsfound3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No projects found`)
},"workspaceprojects_showmore2":/** @type {(inputs: Workspaceprojects_Showmore2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
},"workspacerole_admin1":/** @type {(inputs: Workspacerole_Admin1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
},"workspacerole_editor1":/** @type {(inputs: Workspacerole_Editor1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor`)
},"workspacerole_viewer1":/** @type {(inputs: Workspacerole_Viewer1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viewer`)
}});
