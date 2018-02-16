package org.dselent.course_load_scheduler.client.view;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.ListBox;

public class CreateNewAccount extends Composite {

	private static CreateNewAccountUiBinder uiBinder = GWT.create(CreateNewAccountUiBinder.class);
	@UiField Button button;
	@UiField ListBox comboBox;

	interface CreateNewAccountUiBinder extends UiBinder<Widget, CreateNewAccount> {
	}

	public CreateNewAccount() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@UiHandler("button")
	void onButtonClick(ClickEvent event) {
	}
	@UiHandler("comboBox")
	void onComboBoxClick(ClickEvent event) {
	}
}
