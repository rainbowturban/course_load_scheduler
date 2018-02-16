package org.dselent.course_load_scheduler.client.view;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class Login extends Composite {

	private static LoginUiBinder uiBinder = GWT.create(LoginUiBinder.class);
	@UiField Button button;
	@UiField Button button_1;

	interface LoginUiBinder extends UiBinder<Widget, Login> {
	}

	public Login() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@UiHandler("button")
	void onButtonClick(ClickEvent event) {
	}
	@UiHandler("button_1")
	void onButton_1Click(ClickEvent event) {
	}
}
