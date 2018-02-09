package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Widget;

public class HTMLPanelExample extends Composite implements HasText {

	private static HTMLPanelExampleUiBinder uiBinder = GWT.create(HTMLPanelExampleUiBinder.class);

	interface HTMLPanelExampleUiBinder extends UiBinder<Widget, HTMLPanelExample> {
	}

	public HTMLPanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@UiField
	Button myButton;
	@UiField Button myButton2;

	public HTMLPanelExample(String firstName) {
		initWidget(uiBinder.createAndBindUi(this));
		myButton.setText(firstName);
	}

	@UiHandler("myButton")
	void onClick(ClickEvent e) {
		Window.alert("Hello!");
	}

	public void setText(String text) {
		myButton.setText(text);
	}

	public String getText() {
		return myButton.getText();
	}

}
