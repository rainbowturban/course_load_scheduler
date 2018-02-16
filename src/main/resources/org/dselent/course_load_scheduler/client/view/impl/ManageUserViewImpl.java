package org.dselent.course_load_scheduler.client.view.impl;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class ManageUserViewImpl extends Composite {

	private static ManageUserViewImplUiBinder uiBinder = GWT.create(ManageUserViewImplUiBinder.class);

	interface ManageUserViewImplUiBinder extends UiBinder<Widget, ManageUserViewImpl> {
	}

	public ManageUserViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
