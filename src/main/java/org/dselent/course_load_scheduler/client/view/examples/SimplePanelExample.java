package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Widget;

public class SimplePanelExample extends Composite implements HasText {

	private static testUiBinder uiBinder = GWT.create(testUiBinder.class);
	@UiField Button myButton;

	interface testUiBinder extends UiBinder<Widget, SimplePanelExample> {
	}

	public SimplePanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public SimplePanelExample(String firstName)
	{
		initWidget(uiBinder.createAndBindUi(this));
		myButton.setText(firstName);
	}

	public void setText(String text) {
		myButton.setText(text);
	}

	public String getText() {
		return myButton.getText();
	}

	@UiHandler("myButton")
	void onMyButtonClick(ClickEvent event) {
	}
}
