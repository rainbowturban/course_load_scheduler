package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class VerticalPanelExample extends Composite{

	private static VerticalPanelExampleUiBinder uiBinder = GWT.create(VerticalPanelExampleUiBinder.class);
	@UiField Button button1;
	@UiField Button button2;
	@UiField Button button3;

	interface VerticalPanelExampleUiBinder extends UiBinder<Widget, VerticalPanelExample> {
	}

	public VerticalPanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
