import { React } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";

const { FormSection, FormDivider, FormSwitchRow, FormInput } = Forms;

export default function Settings() {
    useProxy(storage);

    return (
        <>
            <FormSection title="Action">
                <FormSwitchRow
                    label="Send Link to Chat"
                    subLabel="Automatically sends the Streamable link in chat after uploading."
                    value={!!storage.sendToChat}
                    onValueChange={(v: boolean) => (storage.sendToChat = v)}
                />
                <FormDivider />
                <FormSwitchRow
                    label="Copy Link to Clipboard"
                    subLabel="Copies the Streamable link to clipboard after uploading."
                    value={!!storage.copyToClipboard}
                    onValueChange={(v: boolean) => (storage.copyToClipboard = v)}
                />
            </FormSection>

            <FormSection title="Streamable Account (Optional)">
                <FormInput
                    title="Username"
                    placeholder="Leave blank for anonymous upload"
                    value={storage.streamableUsername ?? ""}
                    onChangeText={(v: string) => (storage.streamableUsername = v)}
                />
                <FormDivider />
                <FormInput
                    title="Password"
                    placeholder="Leave blank for anonymous upload"
                    value={storage.streamablePassword ?? ""}
                    secureTextEntry={true}
                    onChangeText={(v: string) => (storage.streamablePassword = v)}
                />
                <FormDivider />
                <FormSwitchRow
                    label="Logged in uploads are permanent"
                    subLabel="Anonymous uploads expire after 90 days of no views."
                    value={false}
                    disabled={true}
                    onValueChange={() => {}}
                />
            </FormSection>

            <FormSection title="Video Privacy">
                <FormSwitchRow
                    label="Private Upload"
                    subLabel="Only people with the link can view the video. (Requires account)"
                    value={!!storage.privateUpload}
                    onValueChange={(v: boolean) => (storage.privateUpload = v)}
                />
            </FormSection>
        </>
    );
}
