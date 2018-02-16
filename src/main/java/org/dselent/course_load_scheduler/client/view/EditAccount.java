package org.dselent.course_load_scheduler.client.view;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class EditAccount extends Composite {

	private static EditAccountUiBinder uiBinder = GWT.create(EditAccountUiBinder.class);

	interface EditAccountUiBinder extends UiBinder<Widget, EditAccount> {
	}

	public EditAccount() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
