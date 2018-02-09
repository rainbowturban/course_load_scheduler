package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.Label;

public class HorizontalPanelExample extends Composite{

	private static HorizontalPanelUiBinder uiBinder = GWT.create(HorizontalPanelUiBinder.class);
	@UiField Label label1;
	@UiField Label label2;
	@UiField Label label3;

	interface HorizontalPanelUiBinder extends UiBinder<Widget, HorizontalPanelExample> {
	}

	public HorizontalPanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}


}
